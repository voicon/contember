FROM node:10
WORKDIR /src

ADD ./ .
ADD ./src/config/config.prod.yaml ./src/config/config.yaml

ENV SERVER_PORT 4000
ENV NODE_ENV "production"
EXPOSE 4000

CMD ["sh", "./run.sh"]
