CREATE TABLE "references_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "references_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "person"
  ADD "short_name" text;
ALTER TABLE "person"
  ADD "long_name" text;
ALTER TABLE "person_locale"
  DROP "short_name";
ALTER TABLE "person_locale"
  DROP "long_name";
ALTER TABLE "reference"
  ALTER "order" SET DATA TYPE integer USING "order"::integer,
  ALTER "order" DROP NOT NULL;
ALTER TABLE "references_page"
  ADD "language_id" uuid UNIQUE REFERENCES "language"("id") ON DELETE restrict;
ALTER TABLE "references_page"
  ADD "title" text;
ALTER TABLE "references_page"
  ADD "quote" text;
ALTER TABLE "references_page"
  ADD "seo_id" uuid UNIQUE REFERENCES "page_seo"("id") ON DELETE restrict;
