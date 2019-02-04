-- ALTER TABLE "what_we_do" DROP CONSTRAINT "unique_WhatWeDo_featuredMedium_c47239";
ALTER TABLE "what_we_do"
  ADD "featured_photo_id" uuid UNIQUE;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_featured_photo_id_e106cd" FOREIGN KEY ("featured_photo_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do"
  ADD "featured_video_id" uuid UNIQUE;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_featured_video_id_1a46cb" FOREIGN KEY ("featured_video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do"
  DROP "featured_medium_id";
