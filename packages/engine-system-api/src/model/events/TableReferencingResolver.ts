import { Model } from '@contember/schema'
import { acceptEveryFieldVisitor } from '@contember/schema-utils'

export const getTableReferencing = (schema: Model.Schema): TableReferencingResolverResult => {
	const result: TableReferencingResolverResult = {}

	for (let entity of Object.values(schema.entities)) {
		result[entity.tableName] = {}
		acceptEveryFieldVisitor(
			schema,
			entity,
			new (class implements Model.RelationByTypeVisitor<void> {
				visitManyHasOne({}, relation: Model.ManyHasOneRelation, targetEntity: Model.Entity) {
					result[entity.tableName][relation.joiningColumn.columnName] = targetEntity.tableName
				}

				visitOneHasOneOwning({}, relation: Model.OneHasOneOwningRelation, targetEntity: Model.Entity) {
					result[entity.tableName][relation.joiningColumn.columnName] = targetEntity.tableName
				}

				visitManyHasManyOwning(
					entity: Model.Entity,
					relation: Model.ManyHasManyOwningRelation,
					targetEntity: Model.Entity,
				) {
					result[relation.joiningTable.tableName] = {
						[relation.joiningTable.joiningColumn.columnName]: entity.tableName,
						[relation.joiningTable.inverseJoiningColumn.columnName]: targetEntity.tableName,
					}
				}

				visitColumn() {}

				visitManyHasManyInverse() {}

				visitOneHasMany() {}

				visitOneHasOneInverse() {}
			})(),
		)
	}
	return result
}

export type TableReferencingResolverResult = { [tableName: string]: { [column: string]: string } }
