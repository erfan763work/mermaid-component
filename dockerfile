# Stage 1: Build the Vue 3 application
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --force
ENV NODE_OPTIONS="--max-old-space-size=8192"
COPY . .
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:stable-alpine
RUN apk add tzdata
ENV TZ="Asia/Tehran"
COPY  --from=build-stage /app/dist /usr/share/nginx/html
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
