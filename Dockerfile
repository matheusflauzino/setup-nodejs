FROM node:16-slim as BUILDER
LABEL maintainer="Matheus Flauzino"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY src ./src

FROM node:16-alpine


ARG NODE_ENV

WORKDIR /urs/src/app

COPY --from=BUILDER /usr/src/app/ ../

EXPOSE 3000

CMD ["npm","start"]