# Портфолио Жамили Нуртазиной (Astro, RU/EN)

Запуск: `npm install`, затем `npm run dev` (http://localhost:4321). Сборка: `npm run build` (папка `dist`).

## Что заменить
- Весь текст двух языков: `src/data/content.ts` (оригинал EN с jamilie.tilda.ws, RU — перевод, проверить).
- Контакты: блок `contacts` в том же файле (сейчас только Telegram @itsawild).
- Резюме и цифры результатов пока убраны (при желании вернуть: секция `resume` в `src/pages/[lang]/index.astro` и поля в content.ts).
- Картинки кейсов: сейчас на карточках и обложках плейсхолдеры, цифры результата на карточках — описательные (в старом портфолио конкретных цифр нет).

## Публикация (бесплатно, без домена)
GitHub, затем Vercel/Netlify/Cloudflare Pages (build `npm run build`, папка `dist`). Адрес будет вида `имя.vercel.app`.
