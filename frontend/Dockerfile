# build environment
FROM node:14-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./

# build shared
COPY shared /app/shared
WORKDIR /app/shared
RUN yarn install
RUN yarn build

# restore frontend
COPY frontend /app/frontend
RUN yarn install --pure-lockfile --non-interactive

# build frontend
WORKDIR /app/frontend
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
