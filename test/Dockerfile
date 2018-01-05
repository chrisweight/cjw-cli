FROM node:8.8-alpine

RUN mkdir -p /home/app \
    && apk update \
    && apk upgrade \
    && apk add git \
      python \
    && rm -rf /var/cache/apk/*

WORKDIR /home/app
COPY package.json .

RUN npm install

VOLUME ["/home/app"]

CMD ["npm", "start"]
