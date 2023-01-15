FROM node:16

WORKDIR /usr/src/app

ENV SECRET=secret

COPY . .

RUN npm ci

CMD ["npm", "start"]