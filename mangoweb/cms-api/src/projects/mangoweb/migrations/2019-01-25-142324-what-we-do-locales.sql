ALTER TABLE "what_we_do"
  ADD "what_we_do_page_locale_id" uuid NOT NULL;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_what_we_do_page_locale_id_78ba66" FOREIGN KEY ("what_we_do_page_locale_id") REFERENCES "what_we_do_page_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_what_we_do_page_locale_id_index" ON "what_we_do" ("what_we_do_page_locale_id");
ALTER TABLE "what_we_do"
  DROP "locale";
