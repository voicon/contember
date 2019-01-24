CREATE TABLE "language" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "language"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "language"
  ADD "slug" text;
ALTER TABLE "language"
  ADD "name" text;
ALTER TABLE "language"
  ADD CONSTRAINT "unique_Language_slug_ed72fc" UNIQUE ("slug");

INSERT INTO "language" ("id", "slug", "name")
  VALUES
    ('6ebbf6be-c25c-4e99-93d0-dd857bf170a6', 'cs', 'Czech'),
    ('791e4c64-872a-47b5-b193-ab0a9aa96f14', 'en', 'English');


ALTER TABLE "page_seo_locale"
  ADD "locale_id" uuid;
UPDATE "page_seo_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "page_seo_locale"."locale";
ALTER TABLE "page_seo_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "page_seo_locale"
  DROP "locale";
ALTER TABLE "page_seo_locale"
  ADD CONSTRAINT "fk_page_seo_locale_locale_id_4bd342" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "page_seo_locale_locale_id_index" ON "page_seo_locale" ("locale_id");

ALTER TABLE "menu_item_locale"
  ADD "locale_id" uuid;
UPDATE "menu_item_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "menu_item_locale"."locale";
ALTER TABLE "menu_item_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "menu_item_locale"
  DROP "locale";

ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "fk_menu_item_locale_locale_id_a1a1e4" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_locale_locale_id_index" ON "menu_item_locale" ("locale_id");

ALTER TABLE "footer_locale"
  ADD "locale_id" uuid;
UPDATE "footer_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "footer_locale"."locale";
ALTER TABLE "footer_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "footer_locale"
  DROP "locale";

ALTER TABLE "footer_locale"
  ADD CONSTRAINT "fk_footer_locale_locale_id_301a72" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_locale_locale_id_index" ON "footer_locale" ("locale_id");


ALTER TABLE "footer_button_locale"
  ADD "locale_id" uuid;
UPDATE "footer_button_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "footer_button_locale"."locale";
ALTER TABLE "footer_button_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "footer_button_locale"
  DROP "locale";

ALTER TABLE "footer_button_locale"
  ADD CONSTRAINT "fk_footer_button_locale_locale_id_c1dfab" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_button_locale_locale_id_index" ON "footer_button_locale" ("locale_id");

ALTER TABLE "front_page_locale"
  ADD "locale_id" uuid;
UPDATE "front_page_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "front_page_locale"."locale";
ALTER TABLE "front_page_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "front_page_locale"
  DROP "locale";

ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_locale_id_32a990" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_locale_locale_id_index" ON "front_page_locale" ("locale_id");

DELETE FROM "what_we_do"
  WHERE "locale" IS NULL;
ALTER TABLE "what_we_do"
  ADD "locale_id" uuid;
UPDATE "what_we_do"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "what_we_do"."locale";
ALTER TABLE "what_we_do"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "what_we_do"
  DROP "locale";


ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_locale_id_3e0d61" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_locale_id_index" ON "what_we_do" ("locale_id");


ALTER TABLE "what_we_do_page_locale"
  ADD "locale_id" uuid;
UPDATE "what_we_do_page_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "what_we_do_page_locale"."locale";
ALTER TABLE "what_we_do_page_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "what_we_do_page_locale"
  DROP "locale";


ALTER TABLE "what_we_do_page_locale"
  ADD CONSTRAINT "fk_what_we_do_page_locale_locale_id_d4e3c1" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_page_locale_locale_id_index" ON "what_we_do_page_locale" ("locale_id");

ALTER TABLE "person_locale"
  ADD "locale_id" uuid;
UPDATE "person_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "person_locale"."locale";
ALTER TABLE "person_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "person_locale"
  DROP "locale";

ALTER TABLE "person_locale"
  ADD CONSTRAINT "fk_person_locale_locale_id_28214e" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_locale_locale_id_index" ON "person_locale" ("locale_id");


ALTER TABLE "references_page_locale"
  ADD "locale_id" uuid;
UPDATE "references_page_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "references_page_locale"."locale";
ALTER TABLE "references_page_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "references_page_locale"
  DROP "locale";

ALTER TABLE "references_page_locale"
  ADD CONSTRAINT "fk_references_page_locale_locale_id_07759e" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "references_page_locale_locale_id_index" ON "references_page_locale" ("locale_id");

ALTER TABLE "contact_page_locale"
  ADD "locale_id" uuid;
UPDATE "contact_page_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "contact_page_locale"."locale";
ALTER TABLE "contact_page_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "contact_page_locale"
  DROP "locale";

ALTER TABLE "contact_page_locale"
  ADD CONSTRAINT "fk_contact_page_locale_locale_id_e88405" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_page_locale_locale_id_index" ON "contact_page_locale" ("locale_id");


ALTER TABLE "contact_location_locale"
  ADD "locale_id" uuid;
UPDATE "contact_location_locale"
  SET "locale_id"=sq."id"
  FROM (SELECT "id", "slug" FROM "language") AS sq
  WHERE sq."slug" = "contact_location_locale"."locale";
ALTER TABLE "contact_location_locale"
  ALTER COLUMN "locale_id" SET NOT NULL;
ALTER TABLE "contact_location_locale"
  DROP "locale";

ALTER TABLE "contact_location_locale"
  ADD CONSTRAINT "fk_contact_location_locale_locale_id_6670d8" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_location_locale_locale_id_index" ON "contact_location_locale" ("locale_id");
DROP DOMAIN "locale";
