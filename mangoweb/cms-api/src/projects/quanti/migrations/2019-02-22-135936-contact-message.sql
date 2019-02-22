CREATE TABLE "contact_message" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_message"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
ALTER TABLE "contact_message"
  ADD "contact" text;
ALTER TABLE "contact_message"
  ADD "message" text;
ALTER TABLE "contact_message"
  ADD "sent_at" timestamp;
