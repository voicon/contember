CREATE TABLE "video" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "video"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "medium" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "medium"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "MediumType" AS text CONSTRAINT MediumType_check CHECK (VALUE IN('image','video'));
ALTER TABLE "video"
  ADD "url" text;
ALTER TABLE "video"
  ADD "poster_id" uuid;
ALTER TABLE "video"
  ADD CONSTRAINT "fk_video_poster_id_72d2e3" FOREIGN KEY ("poster_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "video_poster_id_index" ON "video" ("poster_id");
ALTER TABLE "medium"
  ADD "type" "MediumType";
ALTER TABLE "medium"
  ADD "image_id" uuid;
ALTER TABLE "medium"
  ADD CONSTRAINT "fk_medium_image_id_c0afc0" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "medium_image_id_index" ON "medium" ("image_id");
ALTER TABLE "medium"
  ADD "video_id" uuid;
ALTER TABLE "medium"
  ADD CONSTRAINT "fk_medium_video_id_008e91" FOREIGN KEY ("video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "medium_video_id_index" ON "medium" ("video_id");
ALTER TABLE "front_page"
  ADD "header_medium_id" uuid;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_header_medium_id_f01782" FOREIGN KEY ("header_medium_id") REFERENCES "medium"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_header_medium_id_index" ON "front_page" ("header_medium_id");
ALTER TABLE "front_page"
  DROP "header_image_id";
