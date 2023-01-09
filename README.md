# Blog - сайт публикации постов

**Цель:**
- Попробовать backend разработку(Node, express, MongoDB)
- Создать MERN приложение

**О приложении:**
- Увеличивает просмотры при открытии поста
- Сохраняет токен в local storage
- Написание постов разрешено только авторизированным пользователям
- Редактирование/удаление постов разрешено только авторам

**Домашнее задание:**
- Сделать навигацию по тегам (Не выполнено)
- Возможность писать комментарии (Не выполнено)
- Динамическое добавление комментариев на главную страницу (Не выполнено)
- Переключение на вкладку "Популярное" (Не выполнено)

## Быстрый старт

#### `npm i` – установить зависимости проекта

#### `npm run start` – запуск devServer на http://localhost:4444/

## Скрипты

#### `npm run start` – запуск devServer на http://localhost:4444/

#### `npm run build` – production сборка проекта

## Используемые библиотеки
- [axios](https://github.com/axios/axios)
- [clsx](https://github.com/lukeed/clsx)
- [easymde](https://github.com/Ionaru/easy-markdown-editor)
- [react-simplemde-editor](https://github.com/RIP21/react-simplemde-editor)
- [react-router-dom](https://github.com/remix-run/react-router)
- [react-redux](https://github.com/reduxjs/react-redux)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [react-hook-form](https://github.com/react-hook-form/react-hook-form)

## Макеты

<table>
  <tr>
    <th><a href="https://disk.yandex.ru/client/disk/%D0%B1%D0%BB%D0%BE%D0%B3?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%B1%D0%BB%D0%BE%D0%B3%2Fmain-page.png">Главная страница</a></th>
        <th><a href="https://disk.yandex.ru/client/disk/%D0%B1%D0%BB%D0%BE%D0%B3?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%B1%D0%BB%D0%BE%D0%B3%2Fregister_page.png" target="_blank">Страница регистрации</a></th> 
    <th><a href="https://disk.yandex.ru/client/disk/%D0%B1%D0%BB%D0%BE%D0%B3?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%B1%D0%BB%D0%BE%D0%B3%2Flogin_page.png">Страница авторизации</a></th>
    <th><a href="https://disk.yandex.ru/client/disk/%D0%B1%D0%BB%D0%BE%D0%B3?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%B1%D0%BB%D0%BE%D0%B3%2Fcreate_page.png">Страница написания поста</a></th>
    <th><a href="https://disk.yandex.ru/client/disk/%D0%B1%D0%BB%D0%BE%D0%B3?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%B1%D0%BB%D0%BE%D0%B3%2Fpost_page.png">Страница поста</a></th> 
  </tr>
</table>

### Структура проекта

```
├── public/                          # Шаблон приложения
├── src/                             # Исходники
│   ├── components/                  # UI-компоненты проекта
│   ├── pages/                       # Страницы проекта
│   ├── store/                       # State проекта
│   │   ├── slices/                  # Разделение запросов на бэкенд
│   │   │   ├── auth.js              # Запросы для регистрации/авторизации
│   │   │   └── posts.js             # Запросы для получения постов
│   │   └── store.js                 # Редюсер для всех стейтов
│   ├── App.js                       # Файл роутов проекта
│   ├── axios.js                     # Файл упрощения axios запроса
│   ├── index.js                     # Главный файл проекта
│   ├── index.scss                   # Стили
│   └── theme.js                     # Файл с темой проекта
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── package-lock.json                # Зависимости верхнего уровня
└── README.md                        # Документация шаблона
```