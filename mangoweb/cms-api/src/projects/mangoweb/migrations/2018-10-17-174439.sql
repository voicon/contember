ALTER TABLE "front_page"
  ALTER "unique" SET DATA TYPE one;
ALTER TABLE "front_page"
  ADD CONSTRAINT "unique_unique" UNIQUE ("unique");
ALTER TABLE "front_page_location"
  ALTER "location" SET DATA TYPE location;
ALTER TABLE "front_page_location"
  DROP "front_page_locale_id";
ALTER TABLE "front_page_location"
  ADD "front_page_locale_id" uuid NOT NULL REFERENCES "front_page_locale"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_location_front_page_locale_id_index" ON "front_page_location" ("front_page_locale_id");
ALTER TABLE "front_page_reference_tile"
  DROP "front_page_locale_id";
ALTER TABLE "front_page_reference_tile"
  ADD "front_page_locale_id" uuid NOT NULL REFERENCES "front_page_locale"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_reference_tile_front_page_locale_id_index" ON "front_page_reference_tile" ("front_page_locale_id");
ALTER TABLE "front_page_featured_client"
  ADD "label" text;
ALTER TABLE "front_page_featured_client"
  DROP "front_page_locale_id";
ALTER TABLE "front_page_featured_client"
  ADD "front_page_locale_id" uuid NOT NULL REFERENCES "front_page_locale"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_featured_client_front_page_locale_id_index" ON "front_page_featured_client" ("front_page_locale_id");
ALTER TABLE "front_page_locale"
  ADD "front_page_id" uuid NOT NULL REFERENCES "front_page"("id") ON DELETE restrict;
CREATE  INDEX  "front_page_locale_front_page_id_index" ON "front_page_locale" ("front_page_id");
ALTER TABLE "front_page_locale"
  DROP "language_id";
ALTER TABLE "front_page_locale"
  ADD "language_id" uuid UNIQUE NOT NULL REFERENCES "language"("id") ON DELETE restrict;
ALTER TABLE "front_page_locale"
  DROP "seo_id";
ALTER TABLE "front_page_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "menu_item"
  DROP "language_id";
ALTER TABLE "menu_item"
  ADD "language_id" uuid NOT NULL REFERENCES "language"("id") ON DELETE restrict;
CREATE  INDEX  "menu_item_language_id_index" ON "menu_item" ("language_id");
ALTER TABLE "team_page"
  DROP "language_id";
ALTER TABLE "team_page"
  ADD "language_id" uuid UNIQUE NOT NULL REFERENCES "language"("id") ON DELETE restrict;
ALTER TABLE "team_page"
  DROP "seo_id";
ALTER TABLE "team_page"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "person"
  ADD "face_offset" double precision;
ALTER TABLE "person"
  ADD "order" integer;
ALTER TABLE "person_locale"
  DROP "person_id";
ALTER TABLE "person_locale"
  ADD "person_id" uuid NOT NULL REFERENCES "person"("id") ON DELETE restrict;
CREATE  INDEX  "person_locale_person_id_index" ON "person_locale" ("person_id");
ALTER TABLE "person_locale"
  DROP "language_id";
ALTER TABLE "person_locale"
  ADD "language_id" uuid NOT NULL REFERENCES "language"("id") ON DELETE restrict;
CREATE  INDEX  "person_locale_language_id_index" ON "person_locale" ("language_id");
ALTER TABLE "what_we_do"
  DROP "language_id";
ALTER TABLE "what_we_do"
  ADD "language_id" uuid UNIQUE NOT NULL REFERENCES "language"("id") ON DELETE restrict;
ALTER TABLE "what_we_do"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "reference_locale"
  DROP "language_id";
ALTER TABLE "reference_locale"
  ADD "language_id" uuid NOT NULL REFERENCES "language"("id") ON DELETE restrict;
CREATE  INDEX  "reference_locale_language_id_index" ON "reference_locale" ("language_id");
ALTER TABLE "reference_locale"
  DROP "reference_id";
ALTER TABLE "reference_locale"
  ADD "reference_id" uuid NOT NULL REFERENCES "reference"("id") ON DELETE restrict;
CREATE  INDEX  "reference_locale_reference_id_index" ON "reference_locale" ("reference_id");
ALTER TABLE "reference"
  ADD "order" text;
ALTER TABLE "contact_location_locale"
  DROP "language_id";
ALTER TABLE "contact_location_locale"
  ADD "language_id" uuid NOT NULL REFERENCES "language"("id") ON DELETE restrict;
CREATE  INDEX  "contact_location_locale_language_id_index" ON "contact_location_locale" ("language_id");
ALTER TABLE "contact_location_locale"
  DROP "contact_location_id";
ALTER TABLE "contact_location_locale"
  ADD "contact_location_id" uuid NOT NULL REFERENCES "contact_location"("id") ON DELETE restrict;
CREATE  INDEX  "contact_location_locale_contact_location_id_index" ON "contact_location_locale" ("contact_location_id");
ALTER TABLE "contact_location"
  ADD "slug" text;
ALTER TABLE "contact_page_locale"
  DROP "seo_id";
ALTER TABLE "contact_page_locale"
  ADD "seo_id" uuid UNIQUE NOT NULL REFERENCES "page_seo"("id") ON DELETE restrict;
ALTER TABLE "contact_page_locale"
  DROP "language_id";
ALTER TABLE "contact_page_locale"
  ADD "language_id" uuid UNIQUE NOT NULL REFERENCES "language"("id") ON DELETE restrict;
