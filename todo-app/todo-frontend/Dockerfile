FROM node:16 AS build-stage

ENV REACT_APP_BACKEND_URL=http://localhost:3000

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN mkdir -p build && chmod -R 777 build

USER node

RUN CI=true npm test

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
