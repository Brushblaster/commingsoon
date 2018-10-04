FROM node:alpine

COPY ./ /usr/share/app

WORKDIR /usr/share/app

ARG PORT
ARG HOST

ENV PORT=${PORT}
ENV HOST=${HOST}

CMD yarn install && yarn start

EXPOSE 3000

