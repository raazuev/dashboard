# Приложение Dashboard

Это приложение предназначено для работы с тестами: отображение их списка, фильтрация и поиск по имени. Оно позволяет пользователю взаимодействовать с тестами, изменять их состояние и просматривать результаты.

## Структура проекта

Проект разделен на несколько частей:

- `src/app/api` — папка с логикой взаимодействия с API.
- `src/widgets` — папка с компонентами и виджетами, которые отображаются на различных страницах.
- `src/pages` — страницы приложения, каждая из которых содержит соответствующие компоненты.
- `src/shared` — общие компоненты, утилиты и стили, которые используются на разных страницах и в разных частях приложения.

## Требования

- Node.js (версии 16 и выше)
- npm или yarn

## Установка

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Установите зависимости:

   Если вы используете npm:

   ```bash
   npm install
   ```

   Или с использованием yarn:

   ```bash
   yarn install
   ```

## Запуск в локальной среде

1. После установки всех зависимостей, чтобы запустить приложение, используйте одну из следующих команд:

   Для разработки с hot-reload:

   ```bash
   npm start
   ```

   Или с использованием yarn:

   ```bash
   yarn start
   ```

2. Приложение будет доступно по адресу: [http://localhost:3100](http://localhost:3100).

## Структура кода

- `src/app/api/` — содержит логику взаимодействия с API.
- `src/widgets/` — виджеты, которые выполняют логику отображения и обработки данных на страницах.
- `src/pages/` — страницы приложения.
- `src/shared/` — общие компоненты и утилиты.

## Доступные скрипты

- `npm start` или `yarn start` — запуск в режиме разработки.
- `npm run build` или `yarn build` — создание сборки для продакшн.
- `npm test` или `yarn test` — запуск тестов (если они есть).

## Разработка

1. **Создание новых компонентов**: Все новые компоненты должны быть размещены в соответствующих директориях внутри `src/widgets/` или `src/pages/`.
2. **Работа с API**: Для работы с сервером используйте папку `src/app/api/`. Все запросы к серверу должны быть инкапсулированы в сервисах API.
3. **Добавление новых типов**: Новые типы данных следует добавлять в `src/app/types/`.

## Примечания

- Приложение использует TypeScript для улучшенной типизации и безопасности кода.
- Для работы с тестами и их фильтрацией используется локальная логика сортировки и поиска.
