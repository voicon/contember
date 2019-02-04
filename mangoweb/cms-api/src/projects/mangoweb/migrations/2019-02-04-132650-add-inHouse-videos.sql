ALTER TABLE "image"
  ADD "order" integer;
ALTER TABLE "video"
  ADD "order" integer;
ALTER TABLE "video"
  ADD "footer_id" uuid;
ALTER TABLE "video"
  ADD CONSTRAINT "fk_video_footer_id_7ebb99" FOREIGN KEY ("footer_id") REFERENCES "footer"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "video_footer_id_index" ON "video" ("footer_id");
