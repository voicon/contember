ALTER TABLE "front_page"
  ADD "hero_image_id" uuid UNIQUE;
ALTER TABLE "front_page"
  ADD CONSTRAINT "fk_front_page_hero_image_id_5c676d" FOREIGN KEY ("hero_image_id") REFERENCES "image"("id") ON DELETE NO ACTION DEFERRABLE INITIALLY IMMEDIATE;
ALTER TABLE "references_page_locale"
  DROP "quote";
ALTER TABLE "reference"
  DROP "references_page_id";
ALTER TABLE "reference"
  DROP "is_featured";
ALTER TABLE "contact_page_locale"
  ADD "user_contact_label" text;
ALTER TABLE "contact_page_locale"
  ADD "submit_button_text" text;
ALTER TABLE "contact_page_locale"
  ADD "form_success_message" text;
ALTER TABLE "contact_page_locale"
  ADD "form_error_message" text;
ALTER TABLE "contact_page_locale"
  ADD "unfilled_message_message" text;
ALTER TABLE "contact_page_locale"
  ADD "unfilled_contact_message" text;
ALTER TABLE "contact_page_locale"
  DROP "user_phone_label";
ALTER TABLE "contact_page_locale"
  DROP "contact_form_button_text";
ALTER TABLE "contact_page_locale"
  DROP "contact_form_success_message";
ALTER TABLE "contact_page_locale"
  DROP "contact_form_error_message";
