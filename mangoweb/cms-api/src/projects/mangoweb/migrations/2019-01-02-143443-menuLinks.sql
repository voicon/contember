CREATE DOMAIN "page" AS text CHECK (VALUE IN('front','team','whatWeDo','references','contact'));
ALTER TABLE "menu_item"
  ADD "target" "page";
ALTER TABLE "menu_item_locale"
  DROP "url";
