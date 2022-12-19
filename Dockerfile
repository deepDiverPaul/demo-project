# develop stage
FROM node:16-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @vue/cli@next
RUN yarn install
COPY . .

# build stage
FROM develop-stage as build-stage
RUN yarn build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY docker/prod_nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
