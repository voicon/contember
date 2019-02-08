ALTER TABLE "video"
  ADD "poster_id" uuid UNIQUE;
ALTER TABLE "video"
  ADD CONSTRAINT "fk_video_poster_id_72d2e3" FOREIGN KEY ("poster_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do"
  ADD "boomerang_video_id" uuid UNIQUE;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_boomerang_video_id_14110f" FOREIGN KEY ("boomerang_video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
