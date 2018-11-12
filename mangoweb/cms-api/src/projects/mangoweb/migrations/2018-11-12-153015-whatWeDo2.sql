ALTER TABLE "front_page_featured_client"
  ADD "front_page_locale_id" uuid NOT NULL;
ALTER TABLE "front_page_featured_client"
  ADD CONSTRAINT "fk_front_page_featured_client_front_page_locale_id_28b9e4" FOREIGN KEY ("front_page_locale_id") REFERENCES "front_page_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_featured_client_front_page_locale_id_index" ON "front_page_featured_client" ("front_page_locale_id");
ALTER TABLE "front_page_featured_client"
  ADD "order" integer;
ALTER TABLE "front_page_featured_client"
  DROP "front_page_id";
ALTER TABLE "what_we_do"
  ADD "front_page_id" uuid;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_front_page_id_37194a" FOREIGN KEY ("front_page_id") REFERENCES "front_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_front_page_id_index" ON "what_we_do" ("front_page_id");
DROP TABLE "front_page_featured_client_locale";
