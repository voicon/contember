ALTER TABLE "person"
  ADD "team_page_id" uuid;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_team_page_id_f44854" FOREIGN KEY ("team_page_id") REFERENCES "team_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_team_page_id_index" ON "person" ("team_page_id");
DROP TABLE "team_page_locale";
