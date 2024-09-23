FROM node:lts-alpine AS base

RUN npm install -g pnpm


FROM base AS deps

WORKDIR /web-app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

FROM base AS production-deps

WORKDIR /web-app

COPY --from=deps /web-app/node_modules /web-app/node_modules
COPY package.json pnpm-lock.yaml ./

RUN pnpm prune --prod


FROM base AS build

WORKDIR /web-app

COPY --from=deps /web-app/node_modules /web-app/node_modules
COPY . .

RUN pnpm build


FROM base

WORKDIR /web-app

COPY --from=production-deps /web-app/node_modules /web-app/node_modules
COPY --from=build /web-app/build /web-app/build
COPY --from=build /web-app/public /web-app/public

COPY . .

CMD ["pnpm", "start"]
