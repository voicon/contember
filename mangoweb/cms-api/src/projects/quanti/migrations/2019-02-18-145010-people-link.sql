ALTER TABLE "front_page_locale"
	ADD "people_link" TEXT;
ALTER TABLE "front_page_locale"
  ADD "people_link_target_id" uuid;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_people_link_target_id_5cca7a" FOREIGN KEY ("people_link_target_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_locale_people_link_target_id_index" ON "front_page_locale" ("people_link_target_id");
