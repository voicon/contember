ALTER TABLE "front_page_reference_tile_locale"
  ADD "front_page_reference_id" uuid NOT NULL REFERENCES "front_page_reference_tile"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_locale_front_page_reference_id_index" ON "front_page_reference_tile_locale" ("front_page_reference_id");
ALTER TABLE "front_page_reference_tile_locale"
  DROP "front_page_reference_tile_id";
ALTER TABLE "front_page_reference_tile_locale"
  ADD CONSTRAINT "unique_frontPageReference_language" UNIQUE ("front_page_reference_id", "language_id");
ALTER TABLE "reference_locale"
  ADD CONSTRAINT "unique_reference_language" UNIQUE ("reference_id", "language_id");
