ALTER TABLE "menu_item"
  DROP "url";
ALTER TABLE "menu_item_locale"
  ADD "url" text;
