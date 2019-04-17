ALTER DOMAIN "SocialNetwork" DROP CONSTRAINT SocialNetwork_check;
ALTER DOMAIN "SocialNetwork" ADD CONSTRAINT SocialNetwork_check CHECK (VALUE IN('Facebook','Twitter','LinkedIn','Instagram'));
