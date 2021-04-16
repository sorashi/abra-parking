FROM node:14-alpine

RUN mkdir -p /app/backend /app/shared
WORKDIR /app

COPY package.json yarn.lock ./

COPY shared /app/shared
COPY backend /app/backend

# restore all
RUN yarn install --pure-lockfile --non-interactive

# build shared
WORKDIR /app/shared
RUN yarn build

# build backend
WORKDIR /app/backend
RUN yarn build

EXPOSE 3001
CMD node dist/
