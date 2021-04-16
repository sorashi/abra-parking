FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# restore in seperate layers
COPY package.json .
RUN yarn install

# copy rest
COPY . .
EXPOSE 3000
CMD yarn start
