ALTER TABLE "menu_item" DROP CONSTRAINT "unique_MenuItem_page_c3344d";
ALTER TABLE "menu_item"
  ADD "url" text;
ALTER TABLE "menu_item"
  DROP "page";
DROP DOMAIN "page";
