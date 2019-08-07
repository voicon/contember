SET tenant.identity_id = '11111111-1111-1111-1111-111111111111';

INSERT INTO "language" (id, slug, name) VALUES
  ('32dbad81-4efd-4e55-ab71-621cd9959543', 'cs', 'Czech'),
  ('aa03e504-499e-40ec-b30c-d4cb4d1c245e', 'en', 'English');

INSERT INTO "front_page" (id, "unique", vimeo_id) VALUES
  ('74030830-2ebc-4e76-851c-220074c99e16', 'one', '123456789');

INSERT INTO "front_page_locale" (id, language_id, intro_short, intro_main, intro_long, references_title, button_label, button_url) VALUES
  ('66077ded-9094-4a60-951d-eaebbc1f4cbd', '32dbad81-4efd-4e55-ab71-621cd9959543', 'Jsme manGoweb', 'Jsme tech a des', 'Děláme, pracujeme', 'Udělali jsme toho dost', 'více našich', '/references');

INSERT INTO "front_page_location" (id, location, title, text, front_page_locale_id) VALUES
  ('a7b5f4e1-433a-4529-b147-08a22c141abb', 'prague', 'Praha', 'Text, LOL, TODO WYSIWYG', '66077ded-9094-4a60-951d-eaebbc1f4cbd'),
  ('ff97f84d-07ec-48e6-9e85-3711636e5ff3', 'london', 'Londýn', 'Text, LOL, TODO WYSIWYG', '66077ded-9094-4a60-951d-eaebbc1f4cbd');

INSERT INTO "front_page_reference_tile" (id, label, image, link_target, front_page_locale_id) VALUES
  ('3a8955f2-1e78-410f-8c71-4fa8f64d17f1', 'Prodáváme na netu', 'https://imgproxy.mangoweb.org/nuWlU0TJzhnFcrbhnx9srSBt7id1I_La8xmHtz72hq4/fit/2048/20480/ce/1/aHR0cHM6Ly93d3cubWFuZ293ZWIuY3ovaW1hZ2VzL3JlZmVyZW5jZXMtaG9tZXBhZ2Uvb2RpdmkuanBn.jpg', 'http://example.com/', '66077ded-9094-4a60-951d-eaebbc1f4cbd');
