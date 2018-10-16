ALTER TABLE "category_locale"
  ADD "category_id" uuid REFERENCES "category"("id") ON DELETE restrict;
CREATE  INDEX  "category_locale_category_id_index" ON "category_locale" ("category_id");
ALTER TABLE "category_locale"
  DROP "category_id";
ALTER TABLE "category_locale"
  ADD CONSTRAINT "unique_category_locale" UNIQUE ("category_id", "locale");
