FROM node:lts-alpine as build

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3001

CMD ["node", "./dist/index.js"]
