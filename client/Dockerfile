FROM node:14.15.1-buster

RUN apt-get update&&apt-get install symlinks

RUN yarn add global @vue/cli @vue/cli-service-global

COPY package.json /tmp/workspace/package.json
WORKDIR /tmp/workspace
RUN yarn

WORKDIR /root/workspace
RUN mkdir node_modules && symlinks node_modules /tmp/workspace/node_modules