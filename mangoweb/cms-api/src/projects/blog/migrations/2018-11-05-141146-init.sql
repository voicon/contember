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
  ADD "category_id" uuid;
ALTER TABLE "category_locale"
  ADD CONSTRAINT "fk_category_locale_category_id_9b881e" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "category_locale_category_id_index" ON "category_locale" ("category_id");
ALTER TABLE "category_locale"
  ADD "name" text;
ALTER TABLE "category_locale"
  ADD "locale" "locale";
ALTER TABLE "post"
  ADD "published_at" timestamp;
ALTER TABLE "post"
  ADD "author_id" uuid;
ALTER TABLE "post"
  ADD CONSTRAINT "fk_post_author_id_87ef9a" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "post_author_id_index" ON "post" ("author_id");
CREATE TABLE "post_categories" (
  "id" uuid PRIMARY KEY NOT NULL,
  "post_id" uuid NOT NULL REFERENCES "post"("id") ON DELETE CASCADE,
  "category_id" uuid NOT NULL REFERENCES "category"("id") ON DELETE CASCADE,
  CONSTRAINT "post_categories_uniq_post_id_category_id" UNIQUE ("post_id", "category_id")
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "post_categories"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "post_locale"
  ADD "post_id" uuid;
ALTER TABLE "post_locale"
  ADD CONSTRAINT "fk_post_locale_post_id_f3d2e5" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "post_locale_post_id_index" ON "post_locale" ("post_id");
ALTER TABLE "post_locale"
  ADD "locale" "locale";
ALTER TABLE "post_locale"
  ADD "title" text;
ALTER TABLE "post_site"
  ADD "post_id" uuid;
ALTER TABLE "post_site"
  ADD CONSTRAINT "fk_post_site_post_id_fd2e0b" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "post_site_post_id_index" ON "post_site" ("post_id");
ALTER TABLE "post_site"
  ADD "visibility" "siteVisibility";
ALTER TABLE "post_site"
  ADD "site_id" uuid;
ALTER TABLE "post_site"
  ADD CONSTRAINT "fk_post_site_site_id_263830" FOREIGN KEY ("site_id") REFERENCES "site"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "post_site_site_id_index" ON "post_site" ("site_id");
ALTER TABLE "site"
  ADD "name" text;
ALTER TABLE "site"
  ADD "setting_id" uuid UNIQUE;
ALTER TABLE "site"
  ADD CONSTRAINT "fk_site_setting_id_6a4aa6" FOREIGN KEY ("setting_id") REFERENCES "site_setting"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "site_setting"
  ADD "url" text;
ALTER TABLE "featured_link"
  ADD "title" text;
ALTER TABLE "featured_link"
  ADD "url" text;
ALTER TABLE "featured_link"
  ADD "color" text;
ALTER TABLE "featured_link"
  ADD "page_id" uuid;
ALTER TABLE "featured_link"
  ADD CONSTRAINT "fk_featured_link_page_id_9496bc" FOREIGN KEY ("page_id") REFERENCES "page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
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
ALTER TABLE "category_locale"
  ADD CONSTRAINT "unique_CategoryLocale_category_locale_7a1d47" UNIQUE ("category_id", "locale");
ALTER TABLE "post_locale"
  ADD CONSTRAINT "unique_PostLocale_post_locale_5759e8" UNIQUE ("post_id", "locale");
