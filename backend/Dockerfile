FROM node:14-alpine

RUN mkdir -p /usr/src/backend /usr/src/shared
WORKDIR /usr/src/backend

# restore in seperate layers
COPY backend/package.json backend/yarn.lock ./
RUN yarn --frozen-lockfile

# copy shared folder
COPY ./shared /usr/src/shared

# copy rest
COPY ./backend .
EXPOSE 3001
CMD yarn start
