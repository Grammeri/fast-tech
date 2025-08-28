# 🚀 Запуск проекта

## 🔧 Запуск локально (без Docker для фронта)

1. В первом терминале (фронт):
   pnpm dev

   ➜ откроется приложение на:  
   http://localhost:5173/signin

2. Во втором терминале (моки):
   docker compose up mock

   ➜ Wiremock доступен по:  
   http://localhost:3001/__admin/mappings

---

## 🐳 Запуск полностью через Docker

Фронт + моки поднимаются вместе:
   docker compose up --build

После сборки:
- Приложение доступно по адресу:  
  http://localhost:5173/signin

- Wiremock админка:  
  http://localhost:3001/__admin/mappings
