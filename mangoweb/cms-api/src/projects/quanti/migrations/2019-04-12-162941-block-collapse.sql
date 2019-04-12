CREATE TABLE "collapse" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "collapse"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "collapse_item" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "collapse_item"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER DOMAIN "BlockType" DROP CONSTRAINT BlockType_check;
ALTER DOMAIN "BlockType" ADD CONSTRAINT BlockType_check CHECK (VALUE IN('Heading','Text','Image','ImageGrid','Numbers','Perks','People','Category','Collapse'));
ALTER TABLE "collapse"
  ADD "title" text;
ALTER TABLE "collapse_item"
  ADD "collapse_id" uuid;
ALTER TABLE "collapse_item"
  ADD CONSTRAINT "fk_collapse_item_collapse_id_e4b9b5" FOREIGN KEY ("collapse_id") REFERENCES "collapse"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "collapse_item_collapse_id_index" ON "collapse_item" ("collapse_id");
ALTER TABLE "collapse_item"
  ADD "order" integer;
ALTER TABLE "collapse_item"
  ADD "heading" text;
ALTER TABLE "collapse_item"
  ADD "text" text;
ALTER TABLE "collapse_item"
  ADD "image_id" uuid;
ALTER TABLE "collapse_item"
  ADD CONSTRAINT "fk_collapse_item_image_id_274522" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "collapse_item_image_id_index" ON "collapse_item" ("image_id");
ALTER TABLE "collapse_item"
  ADD "link_target" text;
ALTER TABLE "collapse_item"
  ADD "link_caption" text;
ALTER TABLE "block"
  ADD "collapse_id" uuid;
ALTER TABLE "block"
  ADD CONSTRAINT "fk_block_collapse_id_50b501" FOREIGN KEY ("collapse_id") REFERENCES "collapse"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_collapse_id_index" ON "block" ("collapse_id");
