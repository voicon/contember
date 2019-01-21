ALTER TABLE "front_page_featured_client"
  ADD "logo_id" uuid;
ALTER TABLE "front_page_featured_client"
  ADD CONSTRAINT "fk_front_page_featured_client_logo_id_e1d15d" FOREIGN KEY ("logo_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_featured_client_logo_id_index" ON "front_page_featured_client" ("logo_id");
ALTER TABLE "front_page_featured_client"
  DROP "image_id";
ALTER TABLE "what_we_do"
  DROP "front_page_id";
