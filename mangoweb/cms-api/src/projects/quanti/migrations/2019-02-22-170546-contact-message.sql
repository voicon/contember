ALTER DOMAIN "Translatable" DROP CONSTRAINT Translatable_check;
ALTER DOMAIN "Translatable" ADD CONSTRAINT Translatable_check CHECK (VALUE IN('emailContent','emailContact','emailSend','emailSentMessage'));
