CREATE TABLE "locale" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "locale"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "linkable" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "linkable"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "redirect" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "redirect"
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
CREATE TABLE "image_grid" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "image_grid"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "numbers" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "numbers"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "block" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "block"
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
CREATE TABLE "social" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "social"
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
CREATE TABLE "contact" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "contact"
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
CREATE TABLE "translation_root" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "translation_root"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "translated" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "translated"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "join_us_root" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "join_us_root"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE TABLE "join_us" (
  "id" uuid PRIMARY KEY NOT NULL
);
CREATE TRIGGER "log_event"
  AFTER INSERT OR UPDATE OR DELETE ON "join_us"
  FOR EACH ROW
  EXECUTE PROCEDURE "system"."trigger_event"();
CREATE DOMAIN "One" AS text CHECK (VALUE IN('One'));
CREATE DOMAIN "State" AS text CHECK (VALUE IN('Draft','ToBePublished','Published'));
CREATE DOMAIN "BlockType" AS text CHECK (VALUE IN('Heading','Text','Image','ImageGrid','Numbers'));
CREATE DOMAIN "SocialNetwork" AS text CHECK (VALUE IN('Facebook','Twitter','LinkedIn'));
CREATE DOMAIN "Translatable" AS text CHECK (VALUE IN('emailContent','emailContact','emailSend'));
ALTER TABLE "locale"
  ADD "slug" text;
ALTER TABLE "locale"
  ADD "switch_to_label" text;
ALTER TABLE "linkable"
  ADD "url" text NOT NULL;
ALTER TABLE "redirect"
  ADD "link_id" uuid UNIQUE NOT NULL;
ALTER TABLE "redirect"
  ADD CONSTRAINT "fk_redirect_link_id_42992b" FOREIGN KEY ("link_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "redirect"
  ADD "target_id" uuid NOT NULL;
ALTER TABLE "redirect"
  ADD CONSTRAINT "fk_redirect_target_id_d45ee3" FOREIGN KEY ("target_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "redirect_target_id_index" ON "redirect" ("target_id");
ALTER TABLE "image"
  ADD "url" text;
ALTER TABLE "seo"
  ADD "title" text;
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
ALTER TABLE "image_grid"
  ADD "image_position1_id" uuid;
ALTER TABLE "image_grid"
  ADD CONSTRAINT "fk_image_grid_image_position1_id_9a1749" FOREIGN KEY ("image_position1_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "image_grid_image_position1_id_index" ON "image_grid" ("image_position1_id");
ALTER TABLE "image_grid"
  ADD "image_position2_id" uuid;
ALTER TABLE "image_grid"
  ADD CONSTRAINT "fk_image_grid_image_position2_id_2cb465" FOREIGN KEY ("image_position2_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "image_grid_image_position2_id_index" ON "image_grid" ("image_position2_id");
ALTER TABLE "image_grid"
  ADD "image_position3_id" uuid;
ALTER TABLE "image_grid"
  ADD CONSTRAINT "fk_image_grid_image_position3_id_ed4a01" FOREIGN KEY ("image_position3_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "image_grid_image_position3_id_index" ON "image_grid" ("image_position3_id");
ALTER TABLE "image_grid"
  ADD "image_position4_id" uuid;
ALTER TABLE "image_grid"
  ADD CONSTRAINT "fk_image_grid_image_position4_id_8daee0" FOREIGN KEY ("image_position4_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "image_grid_image_position4_id_index" ON "image_grid" ("image_position4_id");
ALTER TABLE "image_grid"
  ADD "image_position5_id" uuid;
ALTER TABLE "image_grid"
  ADD CONSTRAINT "fk_image_grid_image_position5_id_c5f7fa" FOREIGN KEY ("image_position5_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "image_grid_image_position5_id_index" ON "image_grid" ("image_position5_id");
ALTER TABLE "image_grid"
  ADD "image_position6_id" uuid;
ALTER TABLE "image_grid"
  ADD CONSTRAINT "fk_image_grid_image_position6_id_065ad6" FOREIGN KEY ("image_position6_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "image_grid_image_position6_id_index" ON "image_grid" ("image_position6_id");
ALTER TABLE "numbers"
  ADD "order" integer;
ALTER TABLE "numbers"
  ADD "number" text;
ALTER TABLE "numbers"
  ADD "label" text;
ALTER TABLE "numbers"
  ADD "block_id" uuid;
ALTER TABLE "numbers"
  ADD CONSTRAINT "fk_numbers_block_id_577979" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "numbers_block_id_index" ON "numbers" ("block_id");
ALTER TABLE "block"
  ADD "order" integer;
ALTER TABLE "block"
  ADD "type" "BlockType";
ALTER TABLE "block"
  ADD "text" text;
ALTER TABLE "block"
  ADD "image_grid_id" uuid;
ALTER TABLE "block"
  ADD CONSTRAINT "fk_block_image_grid_id_bb8a2c" FOREIGN KEY ("image_grid_id") REFERENCES "image_grid"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_image_grid_id_index" ON "block" ("image_grid_id");
ALTER TABLE "block"
  ADD "image_id" uuid;
ALTER TABLE "block"
  ADD CONSTRAINT "fk_block_image_id_6e67a7" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_image_id_index" ON "block" ("image_id");
ALTER TABLE "block"
  ADD "page_locale_id" uuid;
ALTER TABLE "block"
  ADD CONSTRAINT "fk_block_page_locale_id_6668d9" FOREIGN KEY ("page_locale_id") REFERENCES "page_locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "block_page_locale_id_index" ON "block" ("page_locale_id");
ALTER TABLE "menu_item"
  ADD "order" integer;
ALTER TABLE "menu_item_locale"
  ADD "menu_item_id" uuid NOT NULL;
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "fk_menu_item_locale_menu_item_id_d89a3d" FOREIGN KEY ("menu_item_id") REFERENCES "menu_item"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_locale_menu_item_id_index" ON "menu_item_locale" ("menu_item_id");
ALTER TABLE "menu_item_locale"
  ADD "label" text;
ALTER TABLE "menu_item_locale"
  ADD "target_id" uuid NOT NULL;
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "fk_menu_item_locale_target_id_856427" FOREIGN KEY ("target_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_locale_target_id_index" ON "menu_item_locale" ("target_id");
ALTER TABLE "menu_item_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "fk_menu_item_locale_locale_id_09ac67" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "menu_item_locale_locale_id_index" ON "menu_item_locale" ("locale_id");
ALTER TABLE "social"
  ADD "network" "SocialNetwork";
ALTER TABLE "social"
  ADD "url" text;
ALTER TABLE "footer"
  ADD "unique" "One" NOT NULL;
ALTER TABLE "footer_locale"
  ADD "footer_id" uuid NOT NULL;
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "fk_footer_locale_footer_id_ce8317" FOREIGN KEY ("footer_id") REFERENCES "footer"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_locale_footer_id_index" ON "footer_locale" ("footer_id");
ALTER TABLE "footer_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "fk_footer_locale_locale_id_d3deaa" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "footer_locale_locale_id_index" ON "footer_locale" ("locale_id");
ALTER TABLE "footer_locale"
  ADD "address" text;
ALTER TABLE "front_page"
  ADD "unique" "One" NOT NULL;
ALTER TABLE "front_page"
  ADD "header_image_id" uuid;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_header_image_id_9553ac" FOREIGN KEY ("header_image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_header_image_id_index" ON "front_page" ("header_image_id");
ALTER TABLE "front_page"
  ADD "image_grid_id" uuid;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_image_grid_id_8e8887" FOREIGN KEY ("image_grid_id") REFERENCES "image_grid"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_image_grid_id_index" ON "front_page" ("image_grid_id");
ALTER TABLE "front_page_locale"
  ADD "front_page_id" uuid NOT NULL;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_front_page_id_8a6305" FOREIGN KEY ("front_page_id") REFERENCES "front_page"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_locale_front_page_id_index" ON "front_page_locale" ("front_page_id");
ALTER TABLE "front_page_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_locale_id_49c03f" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "front_page_locale_locale_id_index" ON "front_page_locale" ("locale_id");
ALTER TABLE "front_page_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_seo_id_d1d253" FOREIGN KEY ("seo_id") REFERENCES "seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "front_page_locale"
  ADD "header" text;
ALTER TABLE "front_page_locale"
  ADD "quote" text;
ALTER TABLE "front_page_locale"
  ADD "partners_header" text;
ALTER TABLE "front_page_locale"
  ADD "partners_content" text;
ALTER TABLE "front_page_locale"
  ADD "people_header" text;
ALTER TABLE "front_page_locale"
  ADD "people_subheader" text;
ALTER TABLE "front_page_locale"
  ADD "contact_us" text;
ALTER TABLE "front_page_locale"
  ADD "find_us_header" text;
ALTER TABLE "front_page_locale"
  ADD "find_us_subheader" text;
ALTER TABLE "front_page_locale"
  ADD "link_id" uuid UNIQUE NOT NULL;
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "fk_front_page_locale_link_id_43c687" FOREIGN KEY ("link_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
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
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "person_locale"
  ADD CONSTRAINT "fk_person_locale_locale_id_e332fd" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "person_locale_locale_id_index" ON "person_locale" ("locale_id");
ALTER TABLE "person_locale"
  ADD "quote" text;
ALTER TABLE "person_locale"
  ADD "name" text;
ALTER TABLE "page"
  ADD "image_id" uuid;
ALTER TABLE "page"
  ADD CONSTRAINT "fk_page_image_id_b6c91e" FOREIGN KEY ("image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "page_image_id_index" ON "page" ("image_id");
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
  ADD "contact_us" text;
ALTER TABLE "page_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL;
ALTER TABLE "page_locale"
  ADD CONSTRAINT "fk_page_locale_seo_id_efa670" FOREIGN KEY ("seo_id") REFERENCES "seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "page_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "page_locale"
  ADD CONSTRAINT "fk_page_locale_locale_id_6e4d17" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "page_locale_locale_id_index" ON "page_locale" ("locale_id");
ALTER TABLE "page_locale"
  ADD "link_id" uuid UNIQUE NOT NULL;
ALTER TABLE "page_locale"
  ADD CONSTRAINT "fk_page_locale_link_id_cd9f32" FOREIGN KEY ("link_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "contact"
  ADD "unique" "One" NOT NULL;
ALTER TABLE "contact_locale"
  ADD "contact_id" uuid NOT NULL;
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "fk_contact_locale_contact_id_6d5b77" FOREIGN KEY ("contact_id") REFERENCES "contact"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_locale_contact_id_index" ON "contact_locale" ("contact_id");
ALTER TABLE "contact_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "fk_contact_locale_locale_id_a7cc26" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "contact_locale_locale_id_index" ON "contact_locale" ("locale_id");
ALTER TABLE "contact_locale"
  ADD "header" text;
ALTER TABLE "contact_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL;
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "fk_contact_locale_seo_id_a8fa27" FOREIGN KEY ("seo_id") REFERENCES "seo"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "contact_locale"
  ADD "link_id" uuid UNIQUE NOT NULL;
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "fk_contact_locale_link_id_29aaff" FOREIGN KEY ("link_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "place"
  ADD "order" integer NOT NULL;
ALTER TABLE "place"
  ADD "state" "State" NOT NULL;
ALTER TABLE "place"
  ADD "is_bigger_on_front_page" boolean NOT NULL;
ALTER TABLE "place"
  ADD "gps_lat" double precision;
ALTER TABLE "place"
  ADD "gps_lng" double precision;
ALTER TABLE "place_locale"
  ADD "place_id" uuid NOT NULL;
ALTER TABLE "place_locale"
  ADD CONSTRAINT "fk_place_locale_place_id_25ac9a" FOREIGN KEY ("place_id") REFERENCES "place"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "place_locale_place_id_index" ON "place_locale" ("place_id");
ALTER TABLE "place_locale"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "place_locale"
  ADD CONSTRAINT "fk_place_locale_locale_id_8d81bf" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "place_locale_locale_id_index" ON "place_locale" ("locale_id");
ALTER TABLE "place_locale"
  ADD "name" text NOT NULL;
ALTER TABLE "place_locale"
  ADD "address" text NOT NULL;
ALTER TABLE "place_locale"
  ADD "sub_address" text;
ALTER TABLE "translation_root"
  ADD "unique" "One" NOT NULL;
ALTER TABLE "translated"
  ADD "root_id" uuid NOT NULL;
ALTER TABLE "translated"
  ADD CONSTRAINT "fk_translated_root_id_47ac3b" FOREIGN KEY ("root_id") REFERENCES "translation_root"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "translated_root_id_index" ON "translated" ("root_id");
ALTER TABLE "translated"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "translated"
  ADD CONSTRAINT "fk_translated_locale_id_2324fb" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "translated_locale_id_index" ON "translated" ("locale_id");
ALTER TABLE "translated"
  ADD "translatable" "Translatable" NOT NULL;
ALTER TABLE "translated"
  ADD "translated" text NOT NULL;
ALTER TABLE "join_us_root"
  ADD "unique" "One" NOT NULL;
ALTER TABLE "join_us"
  ADD "root_id" uuid NOT NULL;
ALTER TABLE "join_us"
  ADD CONSTRAINT "fk_join_us_root_id_e8981f" FOREIGN KEY ("root_id") REFERENCES "join_us_root"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "join_us_root_id_index" ON "join_us" ("root_id");
ALTER TABLE "join_us"
  ADD "label" text NOT NULL;
ALTER TABLE "join_us"
  ADD "target_id" uuid NOT NULL;
ALTER TABLE "join_us"
  ADD CONSTRAINT "fk_join_us_target_id_f25514" FOREIGN KEY ("target_id") REFERENCES "linkable"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "join_us_target_id_index" ON "join_us" ("target_id");
ALTER TABLE "join_us"
  ADD "locale_id" uuid NOT NULL;
ALTER TABLE "join_us"
  ADD CONSTRAINT "fk_join_us_locale_id_270ccb" FOREIGN KEY ("locale_id") REFERENCES "locale"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
CREATE  INDEX  "join_us_locale_id_index" ON "join_us" ("locale_id");
ALTER TABLE "locale"
  ADD CONSTRAINT "unique_Locale_slug_67d6fc" UNIQUE ("slug");
ALTER TABLE "linkable"
  ADD CONSTRAINT "unique_Linkable_url_f92092" UNIQUE ("url");
ALTER TABLE "menu_item_locale"
  ADD CONSTRAINT "unique_MenuItemLocale_menuItem_locale_9e2d51" UNIQUE ("menu_item_id", "locale_id");
ALTER TABLE "social"
  ADD CONSTRAINT "unique_Social_network_79050e" UNIQUE ("network");
ALTER TABLE "footer"
  ADD CONSTRAINT "unique_Footer_unique_c0f335" UNIQUE ("unique");
ALTER TABLE "footer_locale"
  ADD CONSTRAINT "unique_FooterLocale_footer_locale_95872c" UNIQUE ("footer_id", "locale_id");
ALTER TABLE "front_page"
  ADD CONSTRAINT "unique_FrontPage_unique_f03fc1" UNIQUE ("unique");
ALTER TABLE "front_page_locale"
  ADD CONSTRAINT "unique_FrontPageLocale_frontPage_locale_7c31c3" UNIQUE ("front_page_id", "locale_id");
ALTER TABLE "person_locale"
  ADD CONSTRAINT "unique_PersonLocale_person_locale_8cb199" UNIQUE ("person_id", "locale_id");
ALTER TABLE "page_locale"
  ADD CONSTRAINT "unique_PageLocale_page_locale_42ead3" UNIQUE ("page_id", "locale_id");
ALTER TABLE "contact"
  ADD CONSTRAINT "unique_Contact_unique_3eeed3" UNIQUE ("unique");
ALTER TABLE "contact_locale"
  ADD CONSTRAINT "unique_ContactLocale_contact_locale_bd2875" UNIQUE ("contact_id", "locale_id");
ALTER TABLE "place_locale"
  ADD CONSTRAINT "unique_PlaceLocale_place_locale_3db5ff" UNIQUE ("place_id", "locale_id");
ALTER TABLE "translation_root"
  ADD CONSTRAINT "unique_TranslationRoot_unique_c8984c" UNIQUE ("unique");
ALTER TABLE "translated"
  ADD CONSTRAINT "unique_Translated_locale_translatable_d62478" UNIQUE ("locale_id", "translatable");
ALTER TABLE "join_us_root"
  ADD CONSTRAINT "unique_JoinUsRoot_unique_2d9174" UNIQUE ("unique");
ALTER TABLE "join_us"
  ADD CONSTRAINT "unique_JoinUs_root_locale_7003e0" UNIQUE ("root_id", "locale_id");
