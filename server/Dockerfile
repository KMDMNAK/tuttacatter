FROM node:14.15.1-buster



WORKDIR /tmp/server
COPY ./server/package.json .
RUN yarn

COPY ./server .
COPY @types ./src/@types
RUN yarn add mongodb-client-encryption
RUN yarn build
CMD yarn start