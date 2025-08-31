# build
FROM node:20-alpine AS build
WORKDIR /app

# передадим сборочные аргументы
ARG VITE_API_URL
ARG VITE_IMAGE_HOST
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_IMAGE_HOST=$VITE_IMAGE_HOST

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# run
FROM nginx:alpine

# собранный фронт
COPY --from=build /app/dist /usr/share/nginx/html

# ⬇️ подключаем наш SPA fallback-конфиг
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
