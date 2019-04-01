FROM ubuntu:16.04

ARG EXPO_USER
ARG EXPO_PASSWORD

# Install Node.js
RUN apt-get update && apt-get install -y apt-transport-https
RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential
RUN npm install yarn --global

EXPOSE 19000 19001 19002

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN yarn install

ENTRYPOINT [ "yarn", "start" ]
