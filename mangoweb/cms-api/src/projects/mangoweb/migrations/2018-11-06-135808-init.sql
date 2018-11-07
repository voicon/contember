CREATE TABLE "image" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "image"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "video" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "video"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "front_page_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "front_page_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_location" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_location"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "contact_location_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact_location_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "footer" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "footer"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "footer_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "footer_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "footer_button" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "footer_button"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "footer_button_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "footer_button_locale"
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
CREATE TABLE "what_we_do" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "what_we_do"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "what_we_do_locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "what_we_do_locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "what_we_do_description" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "what_we_do_description"
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
CREATE TABLE "contact" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "one" AS text CHECK (VALUE IN('one'));
CREATE DOMAIN "locale" AS text CHECK (VALUE IN('cs','en'));
CREATE DOMAIN "page" AS text CHECK (VALUE IN('frontPage','team','whatWeDo','references','contact'));
ALTER TABLE "image"
  ADD "url" text;
ALTER TABLE "video"
  ADD "vimeo_id" text;
ALTER TABLE "front_page"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "front_page"
  ADD "intro_video_id" uuid UNIQUE;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_intro_video_id_75dbea" FOREIGN KEY ("intro_video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "front_page"
  ADD "seo_id" uuid UNIQUE;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_seo_id_0fd66c" FOREIGN KEY ("seo_id") REFERENCES "page_seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "front_page_locale"
  ADD "front_page_id" uuid NOT NULL;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_front_page_id_8a6305" FOREIGN KEY ("front_page_id") REFERENCES "front_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_locale_front_page_id_index" ON "front_page_locale" ("front_page_id");
ALTER TABLE "front_page_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_locale"
  ADD "intro_label" text;
ALTER TABLE "front_page_locale"
  ADD "intro_heading" text;
ALTER TABLE "front_page_locale"
  ADD "intro_bubble_text" text;
ALTER TABLE "front_page_locale"
  ADD "what_we_do_label" text;
ALTER TABLE "front_page_locale"
  ADD "what_we_do_title" text;
ALTER TABLE "front_page_locale"
  ADD "what_we_do_also" text;
ALTER TABLE "front_page_locale"
  ADD "featured_clients_label" text;
ALTER TABLE "front_page_locale"
  ADD "featured_clients_title" text;
ALTER TABLE "front_page_locale"
  ADD "videos_title" text;
ALTER TABLE "contact_location"
  ADD "email" text;
ALTER TABLE "contact_location"
  ADD "phone_number" text;
ALTER TABLE "contact_location_locale"
  ADD "contact_location_id" uuid NOT NULL;
ALTER TABLE "contact_location_locale"
  ADD CONSTRAINT "fk_contact_location_locale_contact_location_id_9a61c2" FOREIGN KEY ("contact_location_id") REFERENCES "contact_location"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_location_locale_contact_location_id_index" ON "contact_location_locale" ("contact_location_id");
ALTER TABLE "contact_location_locale"
  ADD "locale" "locale";
ALTER TABLE "contact_location_locale"
  ADD "title" text;
ALTER TABLE "contact_location_locale"
  ADD "entity" text;
ALTER TABLE "contact_location_locale"
  ADD "address" text;
ALTER TABLE "contact_location_locale"
  ADD "additional_text" text;
ALTER TABLE "footer"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "footer_locale"
  ADD "footer_id" uuid NOT NULL;
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "fk_footer_locale_footer_id_ce8317" FOREIGN KEY ("footer_id") REFERENCES "footer"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_locale_footer_id_index" ON "footer_locale" ("footer_id");
ALTER TABLE "footer_locale"
  ADD "locale" "locale";
ALTER TABLE "footer_locale"
  ADD "contact_button_text" text;
ALTER TABLE "footer_button"
  ADD "footer_id" uuid NOT NULL;
ALTER TABLE "footer_button"
  ADD CONSTRAINT "fk_footer_button_footer_id_eb3c09" FOREIGN KEY ("footer_id") REFERENCES "footer"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_button_footer_id_index" ON "footer_button" ("footer_id");
ALTER TABLE "footer_button"
  ADD "url" text;
ALTER TABLE "footer_button_locale"
  ADD "footer_button_id" uuid NOT NULL;
ALTER TABLE "footer_button_locale"
  ADD CONSTRAINT "fk_footer_button_locale_footer_button_id_924527" FOREIGN KEY ("footer_button_id") REFERENCES "footer_button"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_button_locale_footer_button_id_index" ON "footer_button_locale" ("footer_button_id");
ALTER TABLE "footer_button_locale"
  ADD "label" text;
ALTER TABLE "footer_button_locale"
  ADD "locale" "locale";
ALTER TABLE "front_page_featured_client"
  ADD "front_page_id" uuid NOT NULL;
ALTER TABLE "front_page_featured_client"
  ADD CONSTRAINT "fk_front_page_featured_client_front_page_id_835659" FOREIGN KEY ("front_page_id") REFERENCES "front_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_featured_client_front_page_id_index" ON "front_page_featured_client" ("front_page_id");
ALTER TABLE "front_page_featured_client"
  ADD "image_id" uuid;
ALTER TABLE "front_page_featured_client"
  ADD CONSTRAINT "fk_front_page_featured_client_image_id_21f4dc" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_featured_client_image_id_index" ON "front_page_featured_client" ("image_id");
ALTER TABLE "front_page_featured_client_locale"
  ADD "front_page_featured_client_id" uuid NOT NULL;
ALTER TABLE "front_page_featured_client_locale"
  ADD CONSTRAINT "fk_front_page_featured_client_locale_front_page_featured_client_id_e80b66" FOREIGN KEY ("front_page_featured_client_id") REFERENCES "front_page_featured_client"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_featured_client_locale_front_page_featured_client_id_index" ON "front_page_featured_client_locale" ("front_page_featured_client_id");
ALTER TABLE "front_page_featured_client_locale"
  ADD "label" text;
ALTER TABLE "front_page_featured_client_locale"
  ADD "locale" "locale";
ALTER TABLE "page_seo"
  ADD "og_image_id" uuid UNIQUE;
ALTER TABLE "page_seo"
  ADD CONSTRAINT "fk_page_seo_og_image_id_c11e17" FOREIGN KEY ("og_image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "page_seo_locale"
  ADD "page_seo_id" uuid NOT NULL;
ALTER TABLE "page_seo_locale"
  ADD CONSTRAINT "fk_page_seo_locale_page_seo_id_7d0e74" FOREIGN KEY ("page_seo_id") REFERENCES "page_seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
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
ALTER TABLE "menu_item"
  ADD "page" "page";
ALTER TABLE "menu_item"
  ADD "order" integer;
ALTER TABLE "menu_item_locale"
  ADD "menu_item_id" uuid NOT NULL;
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "fk_menu_item_locale_menu_item_id_d89a3d" FOREIGN KEY ("menu_item_id") REFERENCES "menu_item"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_locale_menu_item_id_index" ON "menu_item_locale" ("menu_item_id");
ALTER TABLE "menu_item_locale"
  ADD "locale" "locale";
ALTER TABLE "menu_item_locale"
  ADD "label" text;
ALTER TABLE "team_page"
  ADD "seo_id" uuid UNIQUE;
ALTER TABLE "team_page"
  ADD CONSTRAINT "fk_team_page_seo_id_85cec9" FOREIGN KEY ("seo_id") REFERENCES "page_seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "team_page_locale"
  ADD "team_page_id" uuid NOT NULL;
ALTER TABLE "team_page_locale"
  ADD CONSTRAINT "fk_team_page_locale_team_page_id_36971d" FOREIGN KEY ("team_page_id") REFERENCES "team_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "team_page_locale_team_page_id_index" ON "team_page_locale" ("team_page_id");
ALTER TABLE "team_page_locale"
  ADD "locale" "locale";
ALTER TABLE "team_page_locale"
  ADD "title" text;
ALTER TABLE "person"
  ADD "short_name" text;
ALTER TABLE "person"
  ADD "long_name" text;
ALTER TABLE "person"
  ADD "image_big_id" uuid;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_image_big_id_87169a" FOREIGN KEY ("image_big_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_image_big_id_index" ON "person" ("image_big_id");
ALTER TABLE "person"
  ADD "image_square_id" uuid;
ALTER TABLE "person"
  ADD CONSTRAINT "fk_person_image_square_id_dc451f" FOREIGN KEY ("image_square_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
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
  ADD "person_id" uuid NOT NULL;
ALTER TABLE "person_locale"
  ADD CONSTRAINT "fk_person_locale_person_id_2dc27b" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_locale_person_id_index" ON "person_locale" ("person_id");
ALTER TABLE "person_locale"
  ADD "locale" "locale";
ALTER TABLE "person_locale"
  ADD "position" text;
ALTER TABLE "person_locale"
  ADD "bio" text;
ALTER TABLE "what_we_do"
  ADD "front_page_order" integer;
ALTER TABLE "what_we_do"
  ADD "what_we_do_page_order" integer;
ALTER TABLE "what_we_do_locale"
  ADD "what_we_do_id" uuid NOT NULL;
ALTER TABLE "what_we_do_locale"
  ADD CONSTRAINT "fk_what_we_do_locale_what_we_do_id_c27ffb" FOREIGN KEY ("what_we_do_id") REFERENCES "what_we_do"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_locale_what_we_do_id_index" ON "what_we_do_locale" ("what_we_do_id");
ALTER TABLE "what_we_do_locale"
  ADD "locale" "locale";
ALTER TABLE "what_we_do_locale"
  ADD "activity" text;
ALTER TABLE "what_we_do_locale"
  ADD "featured_image_id" uuid UNIQUE;
ALTER TABLE "what_we_do_locale"
  ADD CONSTRAINT "fk_what_we_do_locale_featured_image_id_0e988c" FOREIGN KEY ("featured_image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do_locale"
  ADD "description_heading" text;
ALTER TABLE "what_we_do_locale"
  ADD "featured_video_id" uuid UNIQUE;
ALTER TABLE "what_we_do_locale"
  ADD CONSTRAINT "fk_what_we_do_locale_featured_video_id_bc716c" FOREIGN KEY ("featured_video_id") REFERENCES "video"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do_description"
  ADD "what_we_do_locale_id" uuid;
ALTER TABLE "what_we_do_description"
  ADD CONSTRAINT "fk_what_we_do_description_what_we_do_locale_id_5bcfb9" FOREIGN KEY ("what_we_do_locale_id") REFERENCES "what_we_do_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_description_what_we_do_locale_id_index" ON "what_we_do_description" ("what_we_do_locale_id");
ALTER TABLE "what_we_do_description"
  ADD "heading" text;
ALTER TABLE "what_we_do_description"
  ADD "image_id" uuid UNIQUE;
ALTER TABLE "what_we_do_description"
  ADD CONSTRAINT "fk_what_we_do_description_image_id_27667f" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do_description"
  ADD "description" text;
ALTER TABLE "what_we_do_page"
  ADD "seo_id" uuid UNIQUE;
ALTER TABLE "what_we_do_page"
  ADD CONSTRAINT "fk_what_we_do_page_seo_id_7e276d" FOREIGN KEY ("seo_id") REFERENCES "page_seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "what_we_do_page_locale"
  ADD "what_we_do_page_id" uuid NOT NULL;
ALTER TABLE "what_we_do_page_locale"
  ADD CONSTRAINT "fk_what_we_do_page_locale_what_we_do_page_id_001198" FOREIGN KEY ("what_we_do_page_id") REFERENCES "what_we_do_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "what_we_do_page_locale_what_we_do_page_id_index" ON "what_we_do_page_locale" ("what_we_do_page_id");
ALTER TABLE "what_we_do_page_locale"
  ADD "locale" "locale";
ALTER TABLE "what_we_do_page_locale"
  ADD "title" text;
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
  ADD "reference_id" uuid NOT NULL;
ALTER TABLE "reference_locale"
  ADD CONSTRAINT "fk_reference_locale_reference_id_d3166e" FOREIGN KEY ("reference_id") REFERENCES "reference"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "reference_locale_reference_id_index" ON "reference_locale" ("reference_id");
ALTER TABLE "reference"
  ADD "image_id" uuid;
ALTER TABLE "reference"
  ADD CONSTRAINT "fk_reference_image_id_2881ce" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "reference_image_id_index" ON "reference" ("image_id");
ALTER TABLE "reference"
  ADD "order" integer;
ALTER TABLE "references_page"
  ADD "seo_id" uuid UNIQUE;
ALTER TABLE "references_page"
  ADD CONSTRAINT "fk_references_page_seo_id_2e4e78" FOREIGN KEY ("seo_id") REFERENCES "page_seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "references_page_locale"
  ADD "references_page_id" uuid NOT NULL;
ALTER TABLE "references_page_locale"
  ADD CONSTRAINT "fk_references_page_locale_references_page_id_9bec82" FOREIGN KEY ("references_page_id") REFERENCES "references_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "references_page_locale_references_page_id_index" ON "references_page_locale" ("references_page_id");
ALTER TABLE "references_page_locale"
  ADD "locale" "locale";
ALTER TABLE "references_page_locale"
  ADD "title" text;
ALTER TABLE "references_page_locale"
  ADD "quote" text;
ALTER TABLE "contact_page"
  ADD "seo_id" uuid UNIQUE;
ALTER TABLE "contact_page"
  ADD CONSTRAINT "fk_contact_page_seo_id_761aa5" FOREIGN KEY ("seo_id") REFERENCES "page_seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "contact_page_locale"
  ADD "contact_page_id" uuid NOT NULL;
ALTER TABLE "contact_page_locale"
  ADD CONSTRAINT "fk_contact_page_locale_contact_page_id_bceccd" FOREIGN KEY ("contact_page_id") REFERENCES "contact_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_page_locale_contact_page_id_index" ON "contact_page_locale" ("contact_page_id");
ALTER TABLE "contact_page_locale"
  ADD "locale" "locale";
ALTER TABLE "contact_page_locale"
  ADD "contact_us_button_label" text;
ALTER TABLE "contact_page_locale"
  ADD "user_message_label" text;
ALTER TABLE "contact_page_locale"
  ADD "user_phone_label" text;
ALTER TABLE "contact_page_locale"
  ADD "contact_form_button_text" text;
ALTER TABLE "contact_page_locale"
  ADD "contact_form_success_message" text;
ALTER TABLE "contact_page_locale"
  ADD "contact_form_error_message" text;
ALTER TABLE "contact"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "contact"
  ADD "facebook" text;
ALTER TABLE "contact"
  ADD "linked_in" text;
ALTER TABLE "contact"
  ADD "instagram" text;
ALTER TABLE "contact"
  ADD "twitter" text;
ALTER TABLE "front_page"
  ADD CONSTRAINT "unique_FrontPage_unique_f03fc1" UNIQUE ("unique");
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "unique_FrontPageLocale_frontPage_locale_7c31c3" UNIQUE ("front_page_id", "locale");
ALTER TABLE "contact_location_locale"
  ADD CONSTRAINT "unique_ContactLocationLocale_contactLocation_locale_da4389" UNIQUE ("contact_location_id", "locale");
ALTER TABLE "footer"
  ADD CONSTRAINT "unique_Footer_unique_c0f335" UNIQUE ("unique");
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "unique_FooterLocale_footer_locale_95872c" UNIQUE ("footer_id", "locale");
ALTER TABLE "footer_button_locale"
  ADD CONSTRAINT "unique_FooterButtonLocale_footerButton_locale_2bb1d7" UNIQUE ("footer_button_id", "locale");
ALTER TABLE "front_page_featured_client_locale"
  ADD CONSTRAINT "unique_FrontPageFeaturedClientLocale_frontPageFeaturedClient_locale_db0ddb" UNIQUE ("front_page_featured_client_id", "locale");
ALTER TABLE "page_seo_locale"
  ADD CONSTRAINT "unique_PageSeoLocale_pageSeo_locale_013706" UNIQUE ("page_seo_id", "locale");
ALTER TABLE "menu_item"
  ADD CONSTRAINT "unique_MenuItem_page_c3344d" UNIQUE ("page");
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "unique_MenuItemLocale_menuItem_locale_9e2d51" UNIQUE ("menu_item_id", "locale");
ALTER TABLE "team_page_locale"
  ADD CONSTRAINT "unique_TeamPageLocale_teamPage_locale_3b51a8" UNIQUE ("team_page_id", "locale");
ALTER TABLE "person_locale"
  ADD CONSTRAINT "unique_PersonLocale_locale_person_a8c4a2" UNIQUE ("locale", "person_id");
ALTER TABLE "what_we_do_locale"
  ADD CONSTRAINT "unique_WhatWeDoLocale_whatWeDo_locale_6e6b8c" UNIQUE ("what_we_do_id", "locale");
ALTER TABLE "what_we_do_page_locale"
  ADD CONSTRAINT "unique_WhatWeDoPageLocale_whatWeDoPage_locale_501bdb" UNIQUE ("what_we_do_page_id", "locale");
ALTER TABLE "reference_locale"
  ADD CONSTRAINT "unique_ReferenceLocale_reference_locale_96e5a4" UNIQUE ("reference_id", "locale");
ALTER TABLE "references_page_locale"
  ADD CONSTRAINT "unique_ReferencesPageLocale_referencesPage_locale_a824e1" UNIQUE ("references_page_id", "locale");
ALTER TABLE "contact_page_locale"
  ADD CONSTRAINT "unique_ContactPageLocale_contactPage_locale_5b26ac" UNIQUE ("contact_page_id", "locale");
ALTER TABLE "contact"
  ADD CONSTRAINT "unique_Contact_unique_3eeed3" UNIQUE ("unique");
