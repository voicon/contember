FROM node:10-slim

RUN mkdir /src
WORKDIR /src

COPY ./lerna.json .
COPY ./package.json .
COPY ./package-lock.json .

COPY ./mangoweb/cms-api/package.json ./mangoweb/cms-api/
COPY ./mangoweb/cms-api/package-lock.json ./mangoweb/cms-api/

COPY ./packages/cms-api/package.json ./packages/cms-api/
COPY ./packages/cms-api/package-lock.json ./packages/cms-api/

RUN npm install && \
    npm run bootstrap
