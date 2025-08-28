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
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
