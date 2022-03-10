FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . .

ARG PORT 

ENV PORT=$PORT

EXPOSE $PORT

RUN yarn build

CMD [ "yarn", "start" ]