FROM node:14-alpine

WORKDIR /app

# restore in seperate layers
COPY package.json yarn.lock ./
RUN yarn

# copy rest
COPY . ./
CMD yarn start
