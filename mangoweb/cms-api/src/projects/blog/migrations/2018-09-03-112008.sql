CREATE TABLE "author" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "author"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "category" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "category"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "category_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "category_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "post" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "post"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "post_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "post_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "post_site" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "post_site"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "site" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "site"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "site_setting" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "site_setting"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "featured_link" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "featured_link"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "siteVisibility" AS text CHECK (VALUE IN('visible','hidden'));
CREATE DOMAIN "locale" AS text CHECK (VALUE IN('cs','en'));
ALTER TABLE "author"
  ADD "name" text;
ALTER TABLE "category_locale"
  ADD "category_id" uuid REFERENCES "category"("id") ON DELETE restrict;
CREATE  INDEX  "category_locale_category_id_index" ON "category_locale" ("category_id");
ALTER TABLE "category_locale"
  ADD "name" text;
ALTER TABLE "category_locale"
  ADD "locale" "locale";
ALTER TABLE "post"
  ADD "published_at" timestamp;
ALTER TABLE "post"
  ADD "author_id" uuid REFERENCES "author"("id") ON DELETE restrict;
CREATE  INDEX  "post_author_id_index" ON "post" ("author_id");
CREATE TABLE "post_categories" (
  "id" uuid PRIMARY KEY NOT NULL,
  "post_id" uuid NOT NULL REFERENCES "post"("id") ON DELETE cascade,
  "category_id" uuid NOT NULL REFERENCES "category"("id") ON DELETE cascade,
  CONSTRAINT "post_categories_uniq_post_id_category_id" UNIQUE ("post_id", "category_id")
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "post_categories"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "post_locale"
  ADD "post_id" uuid REFERENCES "post"("id") ON DELETE restrict;
CREATE  INDEX  "post_locale_post_id_index" ON "post_locale" ("post_id");
ALTER TABLE "post_locale"
  ADD "locale" "locale";
ALTER TABLE "post_locale"
  ADD "title" text;
ALTER TABLE "post_locale"
  ADD CONSTRAINT "unique_post_locale" UNIQUE ("post_id", "locale");
ALTER TABLE "post_site"
  ADD "post_id" uuid REFERENCES "post"("id") ON DELETE restrict;
CREATE  INDEX  "post_site_post_id_index" ON "post_site" ("post_id");
ALTER TABLE "post_site"
  ADD "visibility" "siteVisibility";
ALTER TABLE "post_site"
  ADD "site_id" uuid REFERENCES "site"("id") ON DELETE restrict;
CREATE  INDEX  "post_site_site_id_index" ON "post_site" ("site_id");
ALTER TABLE "site"
  ADD "name" text;
ALTER TABLE "site"
  ADD "setting_id" uuid UNIQUE REFERENCES "site_setting"("id") ON DELETE restrict;
ALTER TABLE "site_setting"
  ADD "url" text;
ALTER TABLE "featured_link"
  ADD "title" text;
ALTER TABLE "featured_link"
  ADD "url" text;
ALTER TABLE "featured_link"
  ADD "color" text;
ALTER TABLE "featured_link"
  ADD "page_id" uuid REFERENCES "page"("id") ON DELETE restrict;
CREATE  INDEX  "featured_link_page_id_index" ON "featured_link" ("page_id");
ALTER TABLE "page"
  ADD "title" text;
ALTER TABLE "page"
  ADD "url_slug" text;
ALTER TABLE "page"
  ADD "perex" text;
ALTER TABLE "page"
  ADD "content" text;
ALTER TABLE "page"
  ADD "featured" boolean;
