# build environment
FROM node:14-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./

COPY shared /app/shared
COPY frontend /app/frontend

# restore all
RUN yarn install --pure-lockfile --non-interactive

# build shared
WORKDIR /app/shared
RUN yarn build

# build frontend
WORKDIR /app/frontend
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
