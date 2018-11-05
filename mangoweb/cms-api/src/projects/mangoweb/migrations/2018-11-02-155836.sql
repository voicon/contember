ALTER TABLE "front_page"
  DROP "intro_video_id";
ALTER TABLE "front_page"
  ADD "intro_video_id" uuid UNIQUE REFERENCES "video"("id") ON DELETE restrict;
ALTER TABLE "front_page_reference_tile"
  DROP "image_id";
ALTER TABLE "front_page_reference_tile"
  ADD "image_id" uuid REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_image_id_index" ON "front_page_reference_tile" ("image_id");
ALTER TABLE "front_page_featured_client"
  DROP "image_id";
ALTER TABLE "front_page_featured_client"
  ADD "image_id" uuid REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_featured_client_image_id_index" ON "front_page_featured_client" ("image_id");
ALTER TABLE "page_seo"
  DROP "og_image_id";
ALTER TABLE "page_seo"
  ADD "og_image_id" uuid UNIQUE REFERENCES "image"("id") ON DELETE restrict;
ALTER TABLE "team_page"
  DROP "seo_id";
ALTER TABLE "team_page"
  ADD "seo_id" uuid UNIQUE REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "person"
  DROP "image_big_id";
ALTER TABLE "person"
  ADD "image_big_id" uuid REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "person_image_big_id_index" ON "person" ("image_big_id");
ALTER TABLE "person"
  DROP "image_square_id";
ALTER TABLE "person"
  ADD "image_square_id" uuid REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "person_image_square_id_index" ON "person" ("image_square_id");
ALTER TABLE "what_we_do_page"
  DROP "seo_id";
ALTER TABLE "what_we_do_page"
  ADD "seo_id" uuid UNIQUE REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "reference"
  DROP "image_id";
ALTER TABLE "reference"
  ADD "image_id" uuid REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "reference_image_id_index" ON "reference" ("image_id");
ALTER TABLE "contact_page"
  DROP "seo_id";
ALTER TABLE "contact_page"
  ADD "seo_id" uuid UNIQUE REFERENCES "page_seo"("id") ON DELETE restrict;
