CREATE TABLE "join_us" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "join_us"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "linkable"
  ALTER "is_primary" SET DATA TYPE boolean;
ALTER TABLE "seo"
  ADD "title" text;
ALTER TABLE "front_page"
  ADD "image_grid" text;
ALTER TABLE "place"
  ADD "is_bigger_on_homepage" boolean NOT NULL;
ALTER TABLE "join_us"
  ADD "label" text NOT NULL;
ALTER TABLE "join_us"
  ADD "target_id" uuid NOT NULL;
ALTER TABLE "join_us"
  ADD CONSTRAINT "fk_join_us_target_id_f25514" FOREIGN KEY ("target_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "join_us_target_id_index" ON "join_us" ("target_id");
ALTER TABLE "join_us"
  ADD "locale_id" uuid UNIQUE NOT NULL;
ALTER TABLE "join_us"
  ADD CONSTRAINT "fk_join_us_locale_id_453ffc" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
