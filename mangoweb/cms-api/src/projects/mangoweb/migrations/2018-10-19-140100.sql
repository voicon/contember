ALTER TABLE "front_page_reference_tile_locale"
  ADD "front_page_reference_id" uuid NOT NULL REFERENCES "front_page_reference_tile"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_locale_front_page_reference_id_index" ON "front_page_reference_tile_locale" ("front_page_reference_id");
ALTER TABLE "front_page_reference_tile_locale"
  DROP "front_page_reference_tile_id";
ALTER TABLE "front_page_reference_tile_locale"
  ADD CONSTRAINT "unique_frontPageReference_language" UNIQUE ("front_page_reference_id", "language_id");
ALTER TABLE "front_page_locale"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_locale_front_page_id_index" ON "front_page_locale" ("front_page_id");
ALTER TABLE "front_page_locale"
  DROP "language_id";
ALTER TABLE "front_page_locale"
  ADD "language_id" uuid NOT NULL REFERENCES "language"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_locale_language_id_index" ON "front_page_locale" ("language_id");
ALTER TABLE "front_page_locale"
  DROP "front_page_id";
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "unique_frontPage_language" UNIQUE ("front_page_id", "language_id");
ALTER TABLE "front_page_locale" DROP CONSTRAINT "unique_language";
ALTER TABLE "reference_locale"
  ADD CONSTRAINT "unique_reference_language" UNIQUE ("reference_id", "language_id");
