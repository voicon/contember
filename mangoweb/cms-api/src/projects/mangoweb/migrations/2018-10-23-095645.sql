CREATE TABLE "image" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "image"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_location" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_location"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_location_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_location_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_reference_tile" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_reference_tile"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_reference_tile_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_reference_tile_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_featured_client" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_featured_client"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_featured_client_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_featured_client_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_button" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_button"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_button_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_button_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "page_seo" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "page_seo"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "page_seo_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "page_seo_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "menu_item" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "menu_item"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "menu_item_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "menu_item_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "team_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "team_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "team_page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "team_page_locale"
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
CREATE TABLE "what_we_do_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "what_we_do_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "what_we_do_page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "what_we_do_page_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "reference_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "reference_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "reference" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "reference"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "references_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "references_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "references_page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "references_page_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_location_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_location_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_location" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_location"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_page_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "one" AS text CHECK (VALUE IN('one'));
CREATE DOMAIN "location" AS text CHECK (VALUE IN('prague','london'));
CREATE DOMAIN "locale" AS text CHECK (VALUE IN('cs','en'));
CREATE DOMAIN "page" AS text CHECK (VALUE IN('frontPage','team','whatWeDo','references','contact'));
ALTER TABLE "image"
  ADD "url" text;
ALTER TABLE "front_page"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "front_page"
  ADD "vimeo_id" text;
ALTER TABLE "front_page"
  ADD "seo_id" uuid UNIQUE REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "front_page"
  ADD CONSTRAINT "unique_unique" UNIQUE ("unique");
ALTER TABLE "front_page_location"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_location_front_page_id_index" ON "front_page_location" ("front_page_id");
ALTER TABLE "front_page_location"
  ADD "location" "location" NOT NULL;
ALTER TABLE "front_page_location"
  ADD CONSTRAINT "unique_location" UNIQUE ("location");
ALTER TABLE "front_page_location_locale"
  ADD "front_page_location_id" uuid NOT NULL REFERENCES "front_page_location"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_location_locale_front_page_location_id_index" ON "front_page_location_locale" ("front_page_location_id");
ALTER TABLE "front_page_location_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_location_locale"
  ADD "title" text;
ALTER TABLE "front_page_location_locale"
  ADD "text" text;
ALTER TABLE "front_page_location_locale"
  ADD CONSTRAINT "unique_frontPageLocation_locale" UNIQUE ("front_page_location_id", "locale");
ALTER TABLE "front_page_reference_tile"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_front_page_id_index" ON "front_page_reference_tile" ("front_page_id");
ALTER TABLE "front_page_reference_tile"
  ADD "image_id" uuid NOT NULL REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_image_id_index" ON "front_page_reference_tile" ("image_id");
ALTER TABLE "front_page_reference_tile_locale"
  ADD "front_page_reference_tile_id" uuid NOT NULL REFERENCES "front_page_reference_tile"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_locale_front_page_reference_tile_id_index" ON "front_page_reference_tile_locale" ("front_page_reference_tile_id");
ALTER TABLE "front_page_reference_tile_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_reference_tile_locale"
  ADD "label" text;
ALTER TABLE "front_page_reference_tile_locale"
  ADD "link_target" text;
ALTER TABLE "front_page_reference_tile_locale"
  ADD CONSTRAINT "unique_frontPageReferenceTile_locale" UNIQUE ("front_page_reference_tile_id", "locale");
ALTER TABLE "front_page_featured_client"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_featured_client_front_page_id_index" ON "front_page_featured_client" ("front_page_id");
ALTER TABLE "front_page_featured_client"
  ADD "image_id" uuid NOT NULL REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_featured_client_image_id_index" ON "front_page_featured_client" ("image_id");
ALTER TABLE "front_page_featured_client_locale"
  ADD "front_page_featured_client_id" uuid NOT NULL REFERENCES "front_page_featured_client"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_featured_client_locale_front_page_featured_client_id_index" ON "front_page_featured_client_locale" ("front_page_featured_client_id");
ALTER TABLE "front_page_featured_client_locale"
  ADD "label" text;
ALTER TABLE "front_page_featured_client_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_featured_client_locale"
  ADD CONSTRAINT "unique_frontPageFeaturedClient_locale" UNIQUE ("front_page_featured_client_id", "locale");
ALTER TABLE "front_page_button"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_button_front_page_id_index" ON "front_page_button" ("front_page_id");
ALTER TABLE "front_page_button"
  ADD "url" text;
ALTER TABLE "front_page_button_locale"
  ADD "front_page_button_id" uuid NOT NULL REFERENCES "front_page_button"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_button_locale_front_page_button_id_index" ON "front_page_button_locale" ("front_page_button_id");
ALTER TABLE "front_page_button_locale"
  ADD "label" text;
ALTER TABLE "front_page_button_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_button_locale"
  ADD CONSTRAINT "unique_frontPageButton_locale" UNIQUE ("front_page_button_id", "locale");
ALTER TABLE "page_seo"
  ADD "og_image_id" uuid UNIQUE NOT NULL REFERENCES "image"("id") ON DELETE restrict;
ALTER TABLE "page_seo_locale"
  ADD "page_seo_id" uuid NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
CREATE  INDEX  "page_seo_locale_page_seo_id_index" ON "page_seo_locale" ("page_seo_id");
ALTER TABLE "page_seo_locale"
  ADD "locale" "locale";
ALTER TABLE "page_seo_locale"
  ADD "title" text;
ALTER TABLE "page_seo_locale"
  ADD "description" text;
ALTER TABLE "page_seo_locale"
  ADD "og_title" text;
ALTER TABLE "page_seo_locale"
  ADD "og_description" text;
ALTER TABLE "page_seo_locale"
  ADD CONSTRAINT "unique_pageSeo_locale" UNIQUE ("page_seo_id", "locale");
ALTER TABLE "front_page_locale"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_locale_front_page_id_index" ON "front_page_locale" ("front_page_id");
ALTER TABLE "front_page_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_locale"
  ADD "intro_short" text;
ALTER TABLE "front_page_locale"
  ADD "intro_main" text;
ALTER TABLE "front_page_locale"
  ADD "intro_long" text;
ALTER TABLE "front_page_locale"
  ADD "references_title" text;
ALTER TABLE "front_page_locale"
  ADD "button_label" text;
ALTER TABLE "front_page_locale"
  ADD "button_url" text;
ALTER TABLE "front_page_locale"
  ADD "locations_title" text;
ALTER TABLE "front_page_locale"
  ADD "featured_clients_text" text;
ALTER TABLE "front_page_locale"
  ADD "contact_button_label" text;
ALTER TABLE "front_page_locale"
  ADD "contact_button_url" text;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "unique_frontPage_locale" UNIQUE ("front_page_id", "locale");
ALTER TABLE "menu_item"
  ADD "page" "page";
ALTER TABLE "menu_item"
  ADD "order" integer;
ALTER TABLE "menu_item"
  ADD CONSTRAINT "unique_page" UNIQUE ("page");
ALTER TABLE "menu_item_locale"
  ADD "menu_item_id" uuid NOT NULL REFERENCES "menu_item"("id") ON DELETE restrict;
CREATE  INDEX  "menu_item_locale_menu_item_id_index" ON "menu_item_locale" ("menu_item_id");
ALTER TABLE "menu_item_locale"
  ADD "locale" "locale";
ALTER TABLE "menu_item_locale"
  ADD "label" text;
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "unique_menuItem_locale" UNIQUE ("menu_item_id", "locale");
ALTER TABLE "team_page"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "team_page_locale"
  ADD "team_page_id" uuid NOT NULL REFERENCES "team_page"("id") ON DELETE restrict;
CREATE  INDEX  "team_page_locale_team_page_id_index" ON "team_page_locale" ("team_page_id");
ALTER TABLE "team_page_locale"
  ADD "locale" "locale";
ALTER TABLE "team_page_locale"
  ADD "title" text;
ALTER TABLE "team_page_locale"
  ADD CONSTRAINT "unique_teamPage_locale" UNIQUE ("team_page_id", "locale");
ALTER TABLE "person"
  ADD "short_name" text;
ALTER TABLE "person"
  ADD "long_name" text;
ALTER TABLE "person"
  ADD "image_big_id" uuid NOT NULL REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "person_image_big_id_index" ON "person" ("image_big_id");
ALTER TABLE "person"
  ADD "image_square_id" uuid NOT NULL REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "person_image_square_id_index" ON "person" ("image_square_id");
ALTER TABLE "person"
  ADD "face_offset" double precision;
ALTER TABLE "person"
  ADD "phone_number" text;
ALTER TABLE "person"
  ADD "email" text;
ALTER TABLE "person"
  ADD "facebook" text;
ALTER TABLE "person"
  ADD "twitter" text;
ALTER TABLE "person"
  ADD "likendin" text;
ALTER TABLE "person"
  ADD "github" text;
ALTER TABLE "person"
  ADD "instagram" text;
ALTER TABLE "person"
  ADD "order" integer;
ALTER TABLE "person_locale"
  ADD "person_id" uuid NOT NULL REFERENCES "person"("id") ON DELETE restrict;
CREATE  INDEX  "person_locale_person_id_index" ON "person_locale" ("person_id");
ALTER TABLE "person_locale"
  ADD "locale" "locale";
ALTER TABLE "person_locale"
  ADD "position" text;
ALTER TABLE "person_locale"
  ADD "bio" text;
ALTER TABLE "person_locale"
  ADD CONSTRAINT "unique_locale_person" UNIQUE ("locale", "person_id");
ALTER TABLE "what_we_do_page"
  ADD "button_url" text;
ALTER TABLE "what_we_do_page"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "what_we_do_page_locale"
  ADD "what_we_do_page_id" uuid NOT NULL REFERENCES "what_we_do_page"("id") ON DELETE restrict;
CREATE  INDEX  "what_we_do_page_locale_what_we_do_page_id_index" ON "what_we_do_page_locale" ("what_we_do_page_id");
ALTER TABLE "what_we_do_page_locale"
  ADD "locale" "locale";
ALTER TABLE "what_we_do_page_locale"
  ADD "title" text;
ALTER TABLE "what_we_do_page_locale"
  ADD "quote" text;
ALTER TABLE "what_we_do_page_locale"
  ADD "text" text;
ALTER TABLE "what_we_do_page_locale"
  ADD "button_label" text;
ALTER TABLE "what_we_do_page_locale"
  ADD CONSTRAINT "unique_whatWeDoPage_locale" UNIQUE ("what_we_do_page_id", "locale");
ALTER TABLE "reference_locale"
  ADD "locale" "locale";
ALTER TABLE "reference_locale"
  ADD "title" text;
ALTER TABLE "reference_locale"
  ADD "url" text;
ALTER TABLE "reference_locale"
  ADD "url_label" text;
ALTER TABLE "reference_locale"
  ADD "case_study_url" text;
ALTER TABLE "reference_locale"
  ADD "reference_id" uuid NOT NULL REFERENCES "reference"("id") ON DELETE restrict;
CREATE  INDEX  "reference_locale_reference_id_index" ON "reference_locale" ("reference_id");
ALTER TABLE "reference_locale"
  ADD CONSTRAINT "unique_reference_locale" UNIQUE ("reference_id", "locale");
ALTER TABLE "reference"
  ADD "image_id" uuid NOT NULL REFERENCES "image"("id") ON DELETE restrict;
CREATE  INDEX  "reference_image_id_index" ON "reference" ("image_id");
ALTER TABLE "reference"
  ADD "order" integer;
ALTER TABLE "references_page"
  ADD "seo_id" uuid UNIQUE REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "references_page_locale"
  ADD "references_page_id" uuid NOT NULL REFERENCES "references_page"("id") ON DELETE restrict;
CREATE  INDEX  "references_page_locale_references_page_id_index" ON "references_page_locale" ("references_page_id");
ALTER TABLE "references_page_locale"
  ADD "locale" "locale";
ALTER TABLE "references_page_locale"
  ADD "title" text;
ALTER TABLE "references_page_locale"
  ADD "quote" text;
ALTER TABLE "references_page_locale"
  ADD CONSTRAINT "unique_referencesPage_locale" UNIQUE ("references_page_id", "locale");
ALTER TABLE "contact_location_locale"
  ADD "locale" "locale";
ALTER TABLE "contact_location_locale"
  ADD "top_title" text;
ALTER TABLE "contact_location_locale"
  ADD "address" text;
ALTER TABLE "contact_location_locale"
  ADD "email" text;
ALTER TABLE "contact_location_locale"
  ADD "phone" text;
ALTER TABLE "contact_location_locale"
  ADD "bottom_title" text;
ALTER TABLE "contact_location_locale"
  ADD "company" text;
ALTER TABLE "contact_location_locale"
  ADD "text" text;
ALTER TABLE "contact_location_locale"
  ADD "contact_location_id" uuid NOT NULL REFERENCES "contact_location"("id") ON DELETE restrict;
CREATE  INDEX  "contact_location_locale_contact_location_id_index" ON "contact_location_locale" ("contact_location_id");
ALTER TABLE "contact_location_locale"
  ADD CONSTRAINT "unique_contactLocation_locale" UNIQUE ("contact_location_id", "locale");
ALTER TABLE "contact_location"
  ADD "location" "location";
ALTER TABLE "contact_location"
  ADD "slug" text;
ALTER TABLE "contact_location"
  ADD CONSTRAINT "unique_location" UNIQUE ("location");
ALTER TABLE "contact_page"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "contact_page_locale"
  ADD "contact_page_id" uuid NOT NULL REFERENCES "contact_page"("id") ON DELETE restrict;
CREATE  INDEX  "contact_page_locale_contact_page_id_index" ON "contact_page_locale" ("contact_page_id");
ALTER TABLE "contact_page_locale"
  ADD "button_url" text;
ALTER TABLE "contact_page_locale"
  ADD "button_label" text;
ALTER TABLE "contact_page_locale"
  ADD "locale" "locale";
ALTER TABLE "contact_page_locale"
  ADD CONSTRAINT "unique_contactPage_locale" UNIQUE ("contact_page_id", "locale");
