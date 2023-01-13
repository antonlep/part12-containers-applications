FROM node:16

ENV REACT_APP_BACKEND_URL=http://localhost:3000

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

USER node

RUN CI=true npm test

CMD npm start