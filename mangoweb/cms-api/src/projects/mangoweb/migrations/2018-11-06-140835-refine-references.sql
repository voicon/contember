ALTER TABLE "video"
  ADD "src" text;
ALTER TABLE "video"
  DROP "vimeo_id";
ALTER TABLE "reference"
  ADD "references_page_id" uuid NOT NULL;
ALTER TABLE "reference"
  ADD CONSTRAINT "fk_reference_references_page_id_40194f" FOREIGN KEY ("references_page_id") REFERENCES "references_page_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "reference_references_page_id_index" ON "reference" ("references_page_id");
ALTER TABLE "reference"
  ADD "video_id" uuid;
ALTER TABLE "reference"
  ADD CONSTRAINT "fk_reference_video_id_1c704c" FOREIGN KEY ("video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "reference_video_id_index" ON "reference" ("video_id");
ALTER TABLE "reference"
  ADD "title" text;
ALTER TABLE "reference"
  ADD "is_featured" boolean;
ALTER TABLE "reference"
  ADD "url" text;
ALTER TABLE "reference"
  ADD "url_label" text;
DROP TABLE "reference_locale";
