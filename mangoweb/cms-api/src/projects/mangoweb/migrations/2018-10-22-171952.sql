CREATE TABLE "front_page_location_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_location_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "front_page_location_locale"
  ADD "front_page_location_id" uuid NOT NULL REFERENCES "front_page_location"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_location_locale_front_page_location_id_index" ON "front_page_location_locale" ("front_page_location_id");
ALTER TABLE "front_page_location_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_location_locale"
  ADD "title" text;
ALTER TABLE "front_page_location_locale"
  ADD "text" text;
ALTER TABLE "front_page_location_locale"
  ADD CONSTRAINT "unique_frontPageLocation_locale" UNIQUE ("front_page_location_id", "locale");
DROP TABLE "branch_location_locale";
