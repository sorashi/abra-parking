FROM node:14-alpine

RUN mkdir -p /usr/src/backend /usr/src/shared
WORKDIR /usr/src/backend

# restore in seperate layers
COPY backend/package.json .
RUN yarn install

# copy shared folder
COPY ./shared /usr/src/shared

# copy rest
COPY ./backend .
EXPOSE 3000
CMD yarn start