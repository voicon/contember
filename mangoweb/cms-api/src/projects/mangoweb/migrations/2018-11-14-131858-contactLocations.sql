ALTER TABLE "contact_location"
  ADD "contact_id" uuid;
ALTER TABLE "contact_location"
  ADD CONSTRAINT "fk_contact_location_contact_id_8444a0" FOREIGN KEY ("contact_id") REFERENCES "contact"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_location_contact_id_index" ON "contact_location" ("contact_id");
