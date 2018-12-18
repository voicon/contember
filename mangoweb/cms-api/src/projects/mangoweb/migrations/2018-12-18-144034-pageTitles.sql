ALTER TABLE "page_seo_locale"
  DROP "title";
ALTER TABLE "what_we_do_page_locale"
  ADD "title_short" text;
ALTER TABLE "what_we_do_page_locale"
  ADD "title_full" text;
ALTER TABLE "what_we_do_page_locale"
  DROP "title";
ALTER TABLE "references_page_locale"
  ADD "title_short" text;
ALTER TABLE "references_page_locale"
  ADD "title_full" text;
ALTER TABLE "references_page_locale"
  DROP "title";
ALTER TABLE "contact_page_locale"
  ADD "title_short" text;
ALTER TABLE "contact_page_locale"
  ADD "title_full" text;
