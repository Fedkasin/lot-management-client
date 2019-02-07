FROM node:11.9.0-alpine

EXPOSE 19000 19001 19002

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade && \
        apk add --no-cache bash && \
        yarn install

ENTRYPOINT [ "yarn", "start" ]
