FROM node:lts-alpine AS build

RUN npm install -g pnpm

WORKDIR /web-app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

ENV NODE_ENV=production

CMD ["pnpm", "start"]
