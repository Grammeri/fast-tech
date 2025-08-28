# Этап сборки
FROM node:20-alpine AS build
WORKDIR /app

# Копируем package.json и lock-файл
COPY package.json pnpm-lock.yaml* ./

# Устанавливаем pnpm и зависимости
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# Копируем весь проект и билдим
COPY . .
RUN pnpm build

# Этап запуска (Nginx для отдачи статических файлов)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Настройки nginx можно переопределить через свой конфиг, если нужно
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
