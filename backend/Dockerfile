FROM node:14-alpine

RUN mkdir -p /app/backend /app/shared
WORKDIR /app

COPY package.json yarn.lock ./

# build shared
COPY shared /app/shared
WORKDIR /app/shared
RUN yarn install
RUN yarn build

# restore backend
COPY backend /app/backend
RUN yarn install --pure-lockfile --non-interactive

# build backend
WORKDIR /app/backend
RUN yarn build

EXPOSE 3001
CMD node dist/
