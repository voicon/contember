create extension if not EXISTS "uuid-ossp";

SET tenant.identity_id = '11111111-1111-1111-1111-111111111111';

INSERT INTO "category" (id) VALUES
  (uuid_generate_v4()),
  (uuid_generate_v4()),
  (uuid_generate_v4()),
  (uuid_generate_v4()),
  (uuid_generate_v4());


INSERT INTO "category_locale" (id, name, locale, category_id)
  SELECT
    uuid_generate_v4(),
    concat(t.prefix, ' - ', row_number()
    OVER ()),
    t.locale,
    "category".id
  FROM "category", unnest(ARRAY [ROW ('en' :: "locale", 'category' :: TEXT), ROW ('cs' :: "locale", 'kategorie' :: TEXT)]) AS t(locale "locale", prefix TEXT);


INSERT INTO "author" (id, name) VALUES
  (uuid_generate_v4(), 'author 1'),
  (uuid_generate_v4(), 'author 2'),
  (uuid_generate_v4(), 'author 3');


INSERT INTO "site_setting" (id, url) VALUES
  (uuid_generate_v4(), 'https://site1.cz'),
  (uuid_generate_v4(), 'https://site2.cz');

INSERT INTO "site" (id, name, setting_id)
  SELECT
    uuid_generate_v4(),
    substring("site_setting".url FROM 9),
    "site_setting".id
  FROM "site_setting";


INSERT INTO "post" (id, published_at, author_id)
  SELECT
    uuid_generate_v4(),
    now(),
    (SELECT id
     FROM "author"
     WHERE t = t
     ORDER BY random()
     LIMIT 1)
  FROM unnest(ARRAY [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) t;

INSERT INTO "page" (id, url_slug, title, perex, content) VALUES
  ('79eb5a3e-91b0-4499-8aa4-c490e5313960', '/one', 'Page one', 'Perex', 'Content');

INSERT INTO "featured_link" (id, title, url, color, page_id) VALUES
  ('b6e92b52-6429-4632-9a6b-70ce982bd259', 'Google', 'https://google.com', '#0000ff', '79eb5a3e-91b0-4499-8aa4-c490e5313960'),
  ('75577546-43f7-4440-9b25-c93aec333011', 'Seznam', 'http://seznam.cz', '#ff0000', '79eb5a3e-91b0-4499-8aa4-c490e5313960');


INSERT INTO "post_locale" (id, title, locale, post_id)
  SELECT
    uuid_generate_v4(),
    concat(t.prefix, ' - ', row_number()
    OVER ()),
    t.locale,
    "post".id
  FROM "post", unnest(ARRAY [ROW ('en' :: "locale", 'post' :: TEXT), ROW ('cs' :: "locale", 'článek' :: TEXT)]) AS t(locale "locale", prefix TEXT);

WITH t AS (
  SELECT
    "post".id AS post_id,
    "category".id AS category_id,
    mod(row_number()
        OVER (), 3) = 0 AS active
  FROM "post", "category"
), data AS (
  SELECT
    post_id,
    category_id
  FROM t
  WHERE active = TRUE
)

INSERT INTO "post_categories" (post_id, category_id)
  SELECT *
  FROM data;

WITH t AS (
  SELECT
    uuid_generate_v4(),
    "post".id AS post_id,
    "site".id AS site_id,
    CASE WHEN mod(row_number()
                  OVER (), 2) = 0 THEN 'visible' :: "siteVisibility" ELSE 'hidden' :: "siteVisibility" END
  FROM "post", "site"
)
INSERT INTO "post_site" (id, post_id, site_id, visibility) SELECT *
                                                           FROM t
