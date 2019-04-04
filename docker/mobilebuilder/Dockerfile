FROM ubuntu:16.04

ARG EXPO_USER
ARG EXPO_PASSWORD
ARG API_BASE=localhost
ARG REACT_NATIVE_PACKAGER_HOSTNAME=localhost
ENV EXPO_USER=${EXPO_USER}
ENV EXPO_PASSWORD=${EXPO_PASSWORD}
ARG API_BASE=${API_BASE}
ENV REACT_NATIVE_PACKAGER_HOSTNAME=${REACT_NATIVE_PACKAGER_HOSTNAME}

# Install Node.js
RUN apt-get update > /dev/null 2>&1 && \
    apt-get install -y curl > /dev/null 2>&1 && \
    curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update > /dev/null 2>&1 && \
    apt-get install yarn -y > /dev/null 2>&1

EXPOSE 19000 19001 19002

COPY . /home/client
WORKDIR /home/client

RUN yarn install

ENTRYPOINT ["/bin/bash", "-c", "./bin/start"]
