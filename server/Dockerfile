FROM node:lts-alpine as build

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM build AS final

WORKDIR /app

COPY --from=build /app/dist ./dist 
COPY --from=build /app/node_modules ./node_modules 
COPY --from=build /app/.env ./.env

EXPOSE 3001

CMD ["node", "./dist/index.js"]
