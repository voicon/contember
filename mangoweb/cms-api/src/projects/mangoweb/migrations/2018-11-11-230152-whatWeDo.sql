ALTER TABLE "what_we_do"
  ADD "locale" "locale";
ALTER TABLE "what_we_do"
  ADD "activity" text;
ALTER TABLE "what_we_do"
  ADD "featured_image_id" uuid UNIQUE;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_featured_image_id_c40e5e" FOREIGN KEY ("featured_image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do"
  ADD "description_heading" text;
ALTER TABLE "what_we_do"
  ADD "featured_video_id" uuid UNIQUE;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_featured_video_id_1a46cb" FOREIGN KEY ("featured_video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do_description"
  ADD "what_we_do_id" uuid;
ALTER TABLE "what_we_do_description"
  ADD CONSTRAINT "fk_what_we_do_description_what_we_do_id_4c6bcd" FOREIGN KEY ("what_we_do_id") REFERENCES "what_we_do"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_description_what_we_do_id_index" ON "what_we_do_description" ("what_we_do_id");
ALTER TABLE "what_we_do_description"
  DROP "what_we_do_locale_id";
DROP TABLE "what_we_do_locale";
