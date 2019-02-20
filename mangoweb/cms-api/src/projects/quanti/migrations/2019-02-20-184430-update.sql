CREATE TABLE "block_person" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "block_person"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "category_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "category_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "category" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "category"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER DOMAIN "BlockType" DROP CONSTRAINT BlockType_check;
ALTER DOMAIN "BlockType" ADD CONSTRAINT BlockType_check CHECK (VALUE IN('Heading','Text','Image','ImageGrid','Numbers','Perks','People','Category'));
ALTER TABLE "block_person"
  ADD "order" integer;
ALTER TABLE "block_person"
  ADD "person_id" uuid;
ALTER TABLE "block_person"
  ADD CONSTRAINT "fk_block_person_person_id_384b86" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_person_person_id_index" ON "block_person" ("person_id");
ALTER TABLE "block_person"
  ADD "block_id" uuid;
ALTER TABLE "block_person"
  ADD CONSTRAINT "fk_block_person_block_id_4ee114" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_person_block_id_index" ON "block_person" ("block_id");
ALTER TABLE "block"
  ADD "category_id" uuid;
ALTER TABLE "block"
  ADD CONSTRAINT "fk_block_category_id_fff94e" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_category_id_index" ON "block" ("category_id");
ALTER TABLE "person"
  ADD "show_on_front_page" boolean NOT NULL DEFAULT FALSE;
ALTER TABLE "person"
	ALTER "show_on_front_page" DROP DEFAULT;
ALTER TABLE "person"
  DROP "front_page_id";
ALTER TABLE "person_locale"
  ADD "position" text;
ALTER TABLE "page"
  ADD "category_id" uuid;
ALTER TABLE "page"
  ADD CONSTRAINT "fk_page_category_id_fc728b" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "page_category_id_index" ON "page" ("category_id");
ALTER TABLE "category_locale"
  ADD "name" text;
ALTER TABLE "category_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "category_locale"
  ADD CONSTRAINT "fk_category_locale_locale_id_a0c811" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "category_locale_locale_id_index" ON "category_locale" ("locale_id");
ALTER TABLE "category_locale"
  ADD "category_id" uuid NOT NULL;
ALTER TABLE "category_locale"
  ADD CONSTRAINT "fk_category_locale_category_id_9b881e" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "category_locale_category_id_index" ON "category_locale" ("category_id");
ALTER TABLE "category_locale"
  ADD CONSTRAINT "unique_CategoryLocale_category_locale_7a1d47" UNIQUE ("category_id", "locale_id");
