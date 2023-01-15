FROM node:16

WORKDIR /usr/src/app

ENV SECRET=secret

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]