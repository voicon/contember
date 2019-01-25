CREATE TABLE "medium" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "medium"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "mediumType" AS text CHECK (VALUE IN('image','video'));
ALTER TABLE "medium"
  ADD "type" "mediumType";
ALTER TABLE "medium"
  ADD "image_id" uuid UNIQUE;
ALTER TABLE "medium"
  ADD CONSTRAINT "fk_medium_image_id_c0afc0" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "medium"
  ADD "video_id" uuid UNIQUE;
ALTER TABLE "medium"
  ADD CONSTRAINT "fk_medium_video_id_008e91" FOREIGN KEY ("video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do"
  ADD "featured_medium_id" uuid UNIQUE;
ALTER TABLE "what_we_do"
  ADD CONSTRAINT "fk_what_we_do_featured_medium_id_64e5bc" FOREIGN KEY ("featured_medium_id") REFERENCES "medium"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do"
  DROP "featured_image_id";
ALTER TABLE "what_we_do_description"
  ADD "featured_medium_id" uuid UNIQUE;
ALTER TABLE "what_we_do_description"
  ADD CONSTRAINT "fk_what_we_do_description_featured_medium_id_abc7e7" FOREIGN KEY ("featured_medium_id") REFERENCES "medium"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do_description"
  DROP "image_id";
ALTER TABLE "person"
  ADD "photo_id" uuid UNIQUE;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_photo_id_b93ea5" FOREIGN KEY ("photo_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "person"
  ADD "mugshot_id" uuid UNIQUE;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_mugshot_id_affab2" FOREIGN KEY ("mugshot_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "person"
  DROP "image_big_id";
ALTER TABLE "person"
  DROP "image_square_id";
ALTER TABLE "reference"
  ADD "reference_page_locale_id" uuid NOT NULL;
ALTER TABLE "reference"
  ADD CONSTRAINT "fk_reference_reference_page_locale_id_5cf6a2" FOREIGN KEY ("reference_page_locale_id") REFERENCES "references_page_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "reference_reference_page_locale_id_index" ON "reference" ("reference_page_locale_id");
ALTER TABLE "reference"
  ADD "medium_id" uuid UNIQUE;
ALTER TABLE "reference"
  ADD CONSTRAINT "fk_reference_medium_id_face85" FOREIGN KEY ("medium_id") REFERENCES "medium"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "reference"
  DROP "image_id";
ALTER TABLE "reference"
  DROP "video_id";
