CREATE OR REPLACE FUNCTION rebase_events_unsafe(head UUID, oldBase UUID, newBase UUID, appliedEvents UUID[]) RETURNS UUID AS
$$

WITH RECURSIVE events(id, type, data, previous_id, created_at, identity_id, transaction_id, index) AS (
	SELECT event.id, event.type, event.data, event.previous_id, event.created_at, event.identity_id, event.transaction_id, 0
	FROM system.event
	WHERE event.id = head AND event.previous_id <> oldBase
	UNION
	SELECT event.id, event.type, event.data, event.previous_id, event.created_at, event.identity_id, event.transaction_id, index + 1
	FROM system.event, events
	WHERE event.id = events.previous_id AND events.previous_id <> oldBase
),
	filtered_with_ids AS (
		SELECT event.id, event.type, event.data, event.previous_id, event.created_at, event.identity_id, event.transaction_id, 0, event.id AS new_id,
			NULL AS new_trx_id, 0 AS number
		FROM system.event
		WHERE id = newBase
		UNION
		SELECT *,
			system.uuid_generate_v4() AS new_id,
			system.uuid_generate_v4() AS new_trx_id,
			row_number() OVER (ORDER BY events.index DESC) AS number
		FROM events
		WHERE NOT (id = ANY (appliedEvents))
	),
	with_ids_by_window AS (
		SELECT *,
			first_value(filtered_with_ids.new_id) OVER (ORDER BY number ROWS 1 PRECEDING) AS new_previous_id,
			first_value(filtered_with_ids.new_trx_id) OVER (PARTITION BY filtered_with_ids.transaction_id) AS new_trx_id2
		FROM filtered_with_ids
	),
	insert AS (
		INSERT
			INTO system.event(id, type, data, previous_id, created_at, identity_id, transaction_id)
				SELECT new_id, type, data, new_previous_id, created_at, identity_id, new_trx_id2
				FROM with_ids_by_window
				WHERE with_ids_by_window.number > 0 RETURNING *
	)
SELECT insert.id
FROM with_ids_by_window
		 JOIN insert ON insert.id = with_ids_by_window.new_id
ORDER BY number DESC
LIMIT 1
$$
	LANGUAGE SQL;
