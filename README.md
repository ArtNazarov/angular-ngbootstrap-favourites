# angular-ngbootstrap-favourites

Веб-сайт с коллекцией полезных ссылок, построенный на **Angular 19** с использованием **ng-bootstrap** и **Bootstrap 5**.

## Особенности

- 📌 **Избранное** — закреплённые ссылки (Linux.org.ru, Pikabu, Lenta.ru и др.)
- 🔍 **Поисковики** — Google, Yandex
- 🤖 **ИИ** — ChatGPT, DeepSeek, Perplexity, Qwen и другие
- 💼 **Фриланс** — биржи фриланса (Freelance.ru, Kwork, Kadrof и др.)
- 🔎 **Фильтрация** — поиск по названию и описанию ссылок
- 📄 **Пагинация** — постраничный вывод (по 3 элемента на страницу)
- 📱 **Адаптивный дизайн** — Bootstrap grid-система (3 колонки)

## Скриншоты

![Filter](https://dl.dropbox.com/scl/fi/mhg8yem2ahyqh38pmzchc/ng-filterII.png?rlkey=33caz4vn6rrrf4qhaw74n4xoh&st=7xc801vb)

## Технологический стек

| Технология | Версия |
|------------|--------|
| Angular | 19.x |
| TypeScript | 5.6.x |
| ng-bootstrap | 18.x |
| Bootstrap | 5.3.x |
| RxJS | 7.8.x |

## Структура проекта

```
src/app/
├── models/
│   └── links.ts              # Интерфейсы ILink, IMenuItem, типы и модели данных
├── services/
│   └── links.service.ts      # Сервис для загрузки данных через HTTP
├── nz-center-area/           # Центральная область (роутинг + основной контент)
├── nz-filter/                # Компонент фильтрации ссылок
├── nz-footer/                # Подвал сайта
├── nz-header/                # Шапка сайта
├── nz-info-item/             # Карточка отдельной ссылки
├── nz-info-list/             # Список ссылок с пагинацией и фильтром
├── nz-left-area/             # Левая боковая панель (поисковики)
├── nz-menu/                  # Навигационное меню
├── nz-menu-item/             # Элемент меню
├── nz-right-area/            # Правая боковая панель (ИИ)
├── app.component.*           # Корневой компонент
├── app.config.ts             # Конфигурация приложения (провайдеры)
└── app.routes.ts             # Маршрутизация
```

## Компоненты

### Компоненты-области (Layout)

| Компонент | Описание |
|-----------|----------|
| `NzHeaderComponent` | Шапка сайта |
| `NzFooterComponent` | Подвал с динамическим годом |
| `NzMenuComponent` | Горизонтальное меню навигации |
| `NzLeftAreaComponent` | Левая колонка (поисковые системы) |
| `NzRightAreaComponent` | Правая колонка (ИИ-сервисы) |
| `NzCenterAreaComponent` | Центральная область с роутингом |

### Компоненты контента

| Компонент | Описание |
|-----------|----------|
| `NzInfoListComponent` | Список ссылок с пагинацией и фильтрацией |
| `NzInfoItemComponent` | Отдельная карточка ссылки (caption, content, link) |
| `NzFilterComponent` | Поле фильтрации с debounce (300ms) |

### Маршруты

```typescript
{ path: 'pinned',          component: NzCenterAreaComponent }  // Избранное
{ path: 'search_engines',  component: NzCenterAreaComponent }  // Поисковики
{ path: 'ai',              component: NzCenterAreaComponent }  // ИИ
{ path: 'freelance',       component: NzCenterAreaComponent }  // Фриланс
{ path: '',               redirectTo: '/pinned' }
```

## Установка и запуск

### Предварительные требования

- Node.js ≥ 18.x
- npm ≥ 9.x

### Установка зависимостей

```bash
npm install
```

### Запуск dev-сервера

```bash
ng serve
```

Приложение доступно по адресу: `http://localhost:4200`

### Сборка

```bash
ng build
```

Артефакты сборки будут в папке `dist/`.

### Запуск тестов

```bash
ng test
```

## Данные

Данные загружаются из JSON-файлов в папке `public/assets/data/`:

- `pinned.json` — закреплённые ссылки
- `search-engines.json` — поисковые системы
- `ai.json` — ИИ-сервисы
- `freelance.json` — фриланс-биржи
- `menu.json` — пункты меню

Если файлы не найдены, используется fallback-данные из `LinksService`.

## Что нового

- ✅ Добавлена фильтрация элементов по названию и описанию
- ✅ Подсветка совпадений в тексте
- ✅ Пагинация списка (3 элемента на страницу)
- ✅ Debounce для поля поиска (300ms)
- ✅ Автоподстановка текущего года в футере

## Демо

[Посмотреть](https://apprr.rf.gd)

## Лицензия

MIT
