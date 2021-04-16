FROM node:14-alpine

RUN mkdir -p /usr/src/backend /usr/src/shared
WORKDIR /usr/src/backend

# restore and build shared
COPY shared/package.json shared/yarn.lock /usr/src/shared/
RUN yarn --cwd /usr/src/shared --frozen-lockfile
COPY ./shared ../shared
RUN yarn --cwd /usr/src/shared build

# restore backend
COPY backend/package.json backend/yarn.lock ./
RUN yarn --frozen-lockfile

# copy rest
COPY ./backend ./

# build backend
RUN yarn build
EXPOSE 3001
CMD node dist/
