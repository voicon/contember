ALTER TABLE "front_page_reference_tile"
  ADD "order" integer;
ALTER TABLE "front_page_reference_tile"
  ADD "front_page_locale_id" uuid NOT NULL REFERENCES "front_page_locale"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_front_page_locale_id_index" ON "front_page_reference_tile" ("front_page_locale_id");
ALTER TABLE "front_page_reference_tile"
  DROP "front_page_id";
