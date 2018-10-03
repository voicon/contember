FROM node:10

ADD ./ .
ADD ./src/config/config.prod.yaml ./src/config/config.yaml

ENV SERVER_PORT 4000
EXPOSE 4000

CMD ["sh", "./run.sh"]
