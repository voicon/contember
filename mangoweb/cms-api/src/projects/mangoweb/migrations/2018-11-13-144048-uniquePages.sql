ALTER TABLE "team_page"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "what_we_do_page"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "references_page"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "contact_page"
  ADD "unique" "one" NOT NULL;
ALTER TABLE "team_page"
  ADD CONSTRAINT "unique_TeamPage_unique_0e4023" UNIQUE ("unique");
ALTER TABLE "what_we_do_page"
  ADD CONSTRAINT "unique_WhatWeDoPage_unique_9d1f47" UNIQUE ("unique");
ALTER TABLE "references_page"
  ADD CONSTRAINT "unique_ReferencesPage_unique_82b3b9" UNIQUE ("unique");
ALTER TABLE "contact_page"
  ADD CONSTRAINT "unique_ContactPage_unique_510597" UNIQUE ("unique");
