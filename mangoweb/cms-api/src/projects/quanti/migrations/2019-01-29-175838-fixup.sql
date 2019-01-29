CREATE TABLE "language" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "language"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "linkable" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "linkable"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "image" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "image"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "seo" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "seo"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "menu_item" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "menu_item"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "social" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "social"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "footer_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "footer_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "person" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "person"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "person_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "person_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "page_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "place" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "place"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "place_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "place_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "translated" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "translated"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "State" AS text CHECK (VALUE IN('Draft','ToBePublished','Published'));
CREATE DOMAIN "SocialNetwork" AS text CHECK (VALUE IN('Facebook','Twitter','LinkedIn'));
CREATE DOMAIN "Translatable" AS text CHECK (VALUE IN('emailContent','emailContact','emailSend'));
ALTER TABLE "language"
  ADD "slug" text;
ALTER TABLE "linkable"
  ADD "url" text NOT NULL;
ALTER TABLE "linkable"
  ADD "is_primary" boolean;
ALTER TABLE "linkable"
  ADD "front_page_id" uuid;
ALTER TABLE "linkable"
  ADD CONSTRAINT "fk_linkable_front_page_id_07c360" FOREIGN KEY ("front_page_id") REFERENCES "front_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "linkable_front_page_id_index" ON "linkable" ("front_page_id");
ALTER TABLE "linkable"
  ADD "page_id" uuid;
ALTER TABLE "linkable"
  ADD CONSTRAINT "fk_linkable_page_id_4a324b" FOREIGN KEY ("page_id") REFERENCES "page_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "linkable_page_id_index" ON "linkable" ("page_id");
ALTER TABLE "linkable"
  ADD "contact_id" uuid;
ALTER TABLE "linkable"
  ADD CONSTRAINT "fk_linkable_contact_id_b82ef2" FOREIGN KEY ("contact_id") REFERENCES "contact_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "linkable_contact_id_index" ON "linkable" ("contact_id");
ALTER TABLE "image"
  ADD "url" text;
ALTER TABLE "seo"
  ADD "og_image_id" uuid UNIQUE;
ALTER TABLE "seo"
  ADD CONSTRAINT "fk_seo_og_image_id_ed751d" FOREIGN KEY ("og_image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "seo"
  ADD "description" text;
ALTER TABLE "seo"
  ADD "og_title" text;
ALTER TABLE "seo"
  ADD "og_description" text;
ALTER TABLE "menu_item"
  ADD "label" text;
ALTER TABLE "menu_item"
  ADD "target_id" uuid NOT NULL;
ALTER TABLE "menu_item"
  ADD CONSTRAINT "fk_menu_item_target_id_6b77d1" FOREIGN KEY ("target_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_target_id_index" ON "menu_item" ("target_id");
ALTER TABLE "menu_item"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "menu_item"
  ADD CONSTRAINT "fk_menu_item_locale_id_2e3d9b" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_locale_id_index" ON "menu_item" ("locale_id");
ALTER TABLE "menu_item"
  ADD "order" integer NOT NULL;
ALTER TABLE "social"
  ADD "network" "SocialNetwork";
ALTER TABLE "social"
  ADD "url" text;
ALTER TABLE "footer_locale"
  ADD "locale_id" uuid;
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "fk_footer_locale_locale_id_301a72" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_locale_locale_id_index" ON "footer_locale" ("locale_id");
ALTER TABLE "footer_locale"
  ADD "footer" text;
ALTER TABLE "front_page"
  ADD "locale_id" uuid UNIQUE NOT NULL;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_locale_id_4abd71" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "front_page"
  ADD "seo_id" uuid UNIQUE NOT NULL;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_seo_id_9c4871" FOREIGN KEY ("seo_id") REFERENCES "seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "front_page"
  ADD "big_header" text;
ALTER TABLE "front_page"
  ADD "small_header" text;
ALTER TABLE "front_page"
  ADD "partners_header" text;
ALTER TABLE "front_page"
  ADD "partners_content" text;
ALTER TABLE "front_page"
  ADD "people_header" text;
ALTER TABLE "front_page"
  ADD "people_subheader" text;
ALTER TABLE "front_page"
  ADD "contact_us" text;
ALTER TABLE "front_page"
  ADD "find_us_header" text;
ALTER TABLE "front_page"
  ADD "find_us_subheader" text;
ALTER TABLE "person"
  ADD "front_page_id" uuid NOT NULL;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_front_page_id_e6ee36" FOREIGN KEY ("front_page_id") REFERENCES "front_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_front_page_id_index" ON "person" ("front_page_id");
ALTER TABLE "person"
  ADD "order" integer;
ALTER TABLE "person"
  ADD "image_id" uuid;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_image_id_ea07e2" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_image_id_index" ON "person" ("image_id");
ALTER TABLE "person_locale"
  ADD "person_id" uuid;
ALTER TABLE "person_locale"
  ADD CONSTRAINT "fk_person_locale_person_id_2dc27b" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_locale_person_id_index" ON "person_locale" ("person_id");
ALTER TABLE "person_locale"
  ADD "quote" text;
ALTER TABLE "person_locale"
  ADD "name" text;
ALTER TABLE "page_locale"
  ADD "page_id" uuid;
ALTER TABLE "page_locale"
  ADD CONSTRAINT "fk_page_locale_page_id_f41e5e" FOREIGN KEY ("page_id") REFERENCES "page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "page_locale_page_id_index" ON "page_locale" ("page_id");
ALTER TABLE "page_locale"
  ADD "state" "State" NOT NULL;
ALTER TABLE "page_locale"
  ADD "header" text;
ALTER TABLE "page_locale"
  ADD "perex" text;
ALTER TABLE "page_locale"
  ADD "content" text;
ALTER TABLE "page_locale"
  ADD "contact_us" text;
ALTER TABLE "page_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL;
ALTER TABLE "page_locale"
  ADD CONSTRAINT "fk_page_locale_seo_id_efa670" FOREIGN KEY ("seo_id") REFERENCES "seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "page_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "page_locale"
  ADD CONSTRAINT "fk_page_locale_locale_id_4a0e59" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "page_locale_locale_id_index" ON "page_locale" ("locale_id");
ALTER TABLE "contact_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "fk_contact_locale_locale_id_2ea835" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_locale_locale_id_index" ON "contact_locale" ("locale_id");
ALTER TABLE "contact_locale"
  ADD "header" text;
ALTER TABLE "contact_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL;
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "fk_contact_locale_seo_id_a8fa27" FOREIGN KEY ("seo_id") REFERENCES "seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "place"
  ADD "state" "State" NOT NULL;
ALTER TABLE "place"
  ADD "order" integer NOT NULL;
ALTER TABLE "place"
  ADD "gps_n" double precision;
ALTER TABLE "place"
  ADD "gps_e" double precision;
ALTER TABLE "place_locale"
  ADD "place_id" uuid NOT NULL;
ALTER TABLE "place_locale"
  ADD CONSTRAINT "fk_place_locale_place_id_25ac9a" FOREIGN KEY ("place_id") REFERENCES "place"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "place_locale_place_id_index" ON "place_locale" ("place_id");
ALTER TABLE "place_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "place_locale"
  ADD CONSTRAINT "fk_place_locale_locale_id_154acb" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "place_locale_locale_id_index" ON "place_locale" ("locale_id");
ALTER TABLE "place_locale"
  ADD "name" text NOT NULL;
ALTER TABLE "place_locale"
  ADD "address" text NOT NULL;
ALTER TABLE "place_locale"
  ADD "sub_address" text;
ALTER TABLE "translated"
  ADD "locale_id" uuid;
ALTER TABLE "translated"
  ADD CONSTRAINT "fk_translated_locale_id_c18c02" FOREIGN KEY ("locale_id") REFERENCES "language"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "translated_locale_id_index" ON "translated" ("locale_id");
ALTER TABLE "translated"
  ADD "translatable" "Translatable" NOT NULL;
ALTER TABLE "translated"
  ADD "translated" text NOT NULL;
ALTER TABLE "language"
  ADD CONSTRAINT "unique_Language_slug_ed72fc" UNIQUE ("slug");
ALTER TABLE "linkable"
  ADD CONSTRAINT "unique_Linkable_url_f92092" UNIQUE ("url");
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "unique_FooterLocale_locale_f95277" UNIQUE ("locale_id");
ALTER TABLE "page_locale"
  ADD CONSTRAINT "unique_PageLocale_page_locale_42ead3" UNIQUE ("page_id", "locale_id");
ALTER TABLE "place_locale"
  ADD CONSTRAINT "unique_PlaceLocale_place_locale_3db5ff" UNIQUE ("place_id", "locale_id");
ALTER TABLE "translated"
  ADD CONSTRAINT "unique_Translated_locale_translatable_d62478" UNIQUE ("locale_id", "translatable");
