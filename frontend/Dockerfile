# build environment
FROM node:14-alpine as build
WORKDIR /app/frontend

# restore and build shared
COPY shared/package.json shared/yarn.lock ../shared/
RUN yarn --cwd ../shared --frozen-lockfile
COPY ./shared ../shared
RUN yarn --cwd ../shared build

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install --prod --frozen-lockfile
COPY ./frontend ./
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
