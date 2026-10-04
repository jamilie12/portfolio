// Весь текст сайта: оригинал EN взят с jamilie.tilda.ws/portfolio, RU — перевод (проверить).
// TODO(контент): контакты, ссылка на Figma, PDF резюме, реальные цифры результатов по кейсам.

export type Lang = 'ru' | 'en';
export const langs: Lang[] = ['ru', 'en'];

type Block = { h?: string; p?: string[]; list?: string[]; note?: string };
export type Case = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  metric: string;
  metricLabel: string;
  blocks: Block[];
};

type Content = {
  meta: { title: string; description: string };
  nav: { about: string; resume: string; experience: string; cases: string; contacts: string };
  hero: { name: string; role: string; line: string; markWord: string; ctaCases: string; ctaResume: string };
  about: { title: string; p: string[]; skillsTitle: string; skills: string[]; toolsTitle: string; tools: string[] };
  resume: { title: string; text: string; button: string; file: string; soon: string };
  experience: {
    title: string;
    items: { company: string; field: string; role: string; period: string }[];
    respTitle: string;
    uxTitle: string;
    ux: string[];
    uiTitle: string;
    ui: string[];
    launch: string;
  };
  casesSection: { title: string; intro: string; open: string; back: string };
  cases: Case[];
  contacts: { title: string; text: string; handle: string; href: string; more: string };
  footer: string;
};

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: 'Zhamilya Nurtazina — UX/UI designer',
      description: 'UX/UI designer with 5+ years in FinTech and EdTech. Cases, experience and resume.',
    },
    nav: { about: 'About', resume: 'Resume', experience: 'Experience', cases: 'Cases', contacts: 'Contacts' },
    hero: {
      name: 'Zhamilya Nurtazina',
      role: 'UX/UI designer',
      line: 'I design clear fintech and education products — from research to launch.',
      markWord: 'clear',
      ctaCases: 'View cases',
      ctaResume: 'Resume',
    },
    about: {
      title: 'About me',
      p: [
        'My name is Zhamilya, and I am a UX/UI designer with over five years of professional experience. I have experience in FinTech and EdTech fields.',
        'In my work, I think through every detail — from ideas and research to prototyping and visual design. I believe this approach helps create truly great and innovative products.',
      ],
      skillsTitle: 'Skills',
      skills: [
        'Website and mobile app design',
        'Design systems / UI kits',
        'Prototyping',
        'Testing',
        'CJM / User Flows / JTBD',
      ],
      toolsTitle: 'Tools',
      tools: ['Figma', 'Miro', 'Notion', 'Jira', 'Trello'],
    },
    resume: {
      title: 'Resume',
      text: 'Download my resume as a PDF.',
      button: 'Download PDF',
      file: '', // TODO: '/resume-en.pdf' после добавления файла в public/
      soon: 'PDF will be available soon.',
    },
    experience: {
      title: 'Experience',
      items: [
        { company: 'Freedom Broker', field: 'Investment company', role: 'UX/UI Designer', period: 'August 2024 – Present' },
        { company: 'Prodengi.kz', field: 'Financial marketplace', role: 'UX/UI Designer', period: 'July 2022 – 2024' },
        { company: 'Freelance', field: 'Mobile apps · Websites · Landings', role: 'UX/UI Designer', period: '2020 – 2022' },
      ],
      respTitle: 'Responsibilities',
      uxTitle: 'UX',
      ux: [
        'Research based on JTBD, CJM, Emotional Map',
        'Custom research',
        'Designing custom scenarios',
        'Investigation of user scenarios',
        'Conducting interviews',
        'Drawing up user flow, CJM, etc.',
        'Working with user feedback and analytical data',
      ],
      uiTitle: 'UI',
      ui: ['Designing mobile interfaces'],
      launch: 'Taking designs from prototype to launch and production deployment.',
    },
    casesSection: {
      title: 'Cases',
      intro:
        'A selection of digital products I’ve designed across fintech and education, including media platforms, personal accounts, corporate websites, and financial marketplaces.',
      open: 'Read case',
      back: 'All cases',
    },
    cases: [
      {
        slug: 'website-redesign',
        tag: 'Freedom Broker · Fintech',
        title: 'Website Redesign',
        subtitle:
          'Financial platform that brings together financial products, market insights, news, analytics, and educational content.',
        metric: 'Media hub',
        metricLabel: 'one entry point for 7 content formats',
        blocks: [
          {
            h: 'Overview',
            p: [
              'I redesigned the homepage and media platform to make the website easier to navigate and encourage users to explore more content.',
              'The existing experience made it difficult for users to understand the structure of the platform and navigate between different content types. As a result, content consumption was fragmented and users spent very little time on the website.',
            ],
          },
          {
            h: 'The challenge',
            p: ['The main issue was not the lack of content, but how it was structured and presented.'],
            list: [
              'Navigation was complex and unintuitive.',
              'Different types of media content were scattered across the website.',
              'Users had difficulty discovering related content and moving between articles.',
              'Content consumption was fragmented rather than continuous.',
              'Average session duration was around 2 seconds.',
            ],
            note: 'The goal: create a clearer content structure and navigation system that would help users quickly understand what the platform offers and naturally continue exploring.',
          },
          {
            h: 'My approach',
            p: [
              'I focused on restructuring the media experience around the user’s need to discover, consume and continue exploring content.',
              'Instead of separating content into disconnected sections, I created a unified Media hub where users can discover all major content formats in one place: News · Investment reviews · Analytics · Video podcasts · Podcasts · Magazine · Blog.',
            ],
          },
          {
            h: 'Key solutions',
            list: [
              'Unified Media platform — different content formats brought together into one media hub.',
              'Improved content navigation — users move from one piece of content to the next without returning to the main media page.',
              'Infinite content feed — a continuous consumption experience with fewer interruptions.',
              'Homepage redesign — a clearer hierarchy and more intuitive discovery of key products and content.',
            ],
          },
          {
            h: 'The result',
            p: [
              'The redesign transformed the website from a collection of separate content sections into a more connected content ecosystem. Users can quickly see what content is available, discover formats from one place, move between related articles and keep exploring without unnecessary navigation.',
            ],
          },
        ],
      },
      {
        slug: 'freedom-academy-2',
        tag: 'Freedom Academy · EdTech',
        title: 'Freedom Academy 2.0',
        subtitle: 'An end-to-end redesign of an educational platform, from UX analysis to final handoff and implementation.',
        metric: 'End-to-end',
        metricLabel: 'registration → course → tests → certificate',
        blocks: [
          {
            h: 'Overview',
            p: [
              'I worked on Freedom Academy end-to-end — from analyzing the existing platform and defining the user experience to designing new pages and handing the final designs over for development.',
              'The goal was to transform a rigid, outdated, and difficult-to-navigate learning platform into a modern and seamless educational experience with clear navigation and transparent progress tracking.',
            ],
          },
          {
            h: 'The challenge',
            p: [
              'Freedom Academy was built on a pre-existing, off-the-shelf platform with significant limitations. The interface felt outdated and rigid, while the user journey between different stages of learning was not seamless. Some pages required for a complete learning experience were not available in the existing solution.',
              'The challenge was to improve the experience without rebuilding the platform from scratch — balancing user needs with technical limitations and working closely with external contractors.',
            ],
          },
          {
            h: 'My role',
            list: [
              'UX analysis of the existing platform',
              'Information architecture and user flows',
              'Collaboration with external contractors',
              'Clarifying design and interaction requirements',
              'Final handoff to development',
            ],
            note: 'Learning journey: Registration → Course selection → Course → Tests → Certificate',
          },
          {
            h: 'Key solutions',
            list: [
              'Seamless learning experience — natural movement between courses, lessons and tests.',
              'Progress tracking — completion, current and assigned courses, completed courses and test results.',
              'Personal account — student plan, overall progress, AI Review, assigned, current and completed courses, test results.',
              'New platform pages — Login / Registration, course selection, course experience, tests, certificates, progress tracking, personal account.',
            ],
          },
          {
            h: 'Working within constraints',
            p: [
              'One of the most challenging parts was designing within an existing platform rather than from scratch. I worked directly with external contractors to define new pages and interactions that were not part of the original solution, gradually turning the limitations of a boxed product into a more cohesive experience.',
            ],
          },
          {
            h: 'Outcome',
            p: [
              'A transition from a rigid, outdated learning platform to a modern, connected educational experience: clear navigation, seamless transitions, course discovery, progress tracking, a personal learning dashboard, test results and certificates.',
            ],
          },
        ],
      },
      {
        slug: 'freedom-academy-1',
        tag: 'Freedom Academy · Research',
        title: 'Freedom Academy 1.0',
        subtitle: 'Research, information architecture, user flow and prototyping.',
        metric: 'Research',
        metricLabel: 'benchmarking, interviews, job stories',
        blocks: [
          {
            h: 'Background',
            p: [
              'The Academy design was originally created in 2019. While the platform was performing reasonably well, we identified an opportunity to redesign it as part of the ongoing evolution of our design system.',
              'The main goal was not only to bring the Academy in line with the new visual language, but also to improve the overall user experience, navigation, and learning journey.',
            ],
          },
          {
            h: 'Research',
            p: [
              'In a benchmarking, I compared our current product with competitors (Skillbox, Tinkoff, Udemy) and highlighted our pros and cons based on the context.',
            ],
          },
          {
            h: 'Interview',
            p: [
              'I interviewed people who have already bought courses and those who have not yet bought. Before the interview, I wrote a script with questions, as well as situations in which I wanted to know how the user would behave.',
            ],
          },
          {
            h: 'Job stories',
            p: [
              'I wrote job stories to understand what motivation users have when they use the product, and what their ultimate goal is.',
            ],
          },
          { h: 'Information architecture, user flow and prototyping' },
        ],
      },
      {
        slug: 'medtech-app',
        tag: 'MedTech · Mobile app',
        title: 'MedTech mobile app',
        subtitle: 'A companion app for a wearable pain therapy and neuromodulation device.',
        metric: '3D body map',
        metricLabel: 'pinpoint pain, control the device',
        blocks: [
          {
            h: 'About',
            p: [
              'An all-in-one companion app for a wearable pain therapy and neuromodulation device. The application pairs hardware with personalized physical therapy, combining electrostimulation, mobility exercises, 3D body targeting, and activity tracking. I was responsible for product strategy, onboarding flows, 3D interaction architecture, UI design, prototyping, and component library creation.',
            ],
          },
          {
            h: 'Problem',
            p: [
              'Users managing body pain at home face several hurdles: hardware devices can feel complex to operate, generic exercises fail to target specific pain points, and users struggle to stay consistent without clear progress visibility or medical guidance.',
            ],
          },
          {
            h: 'The approach',
            p: [
              'I conducted competitor analysis in health-tech and interviewed physical therapy patients to understand their key pain points. The goal was to build a cohesive ecosystem connecting the physical device to a tailored digital recovery plan. I mapped out a step-by-step onboarding experience, smooth Bluetooth pairing, and an intuitive 3D body mapping interaction that lowers the friction of pinpointing exact pain locations.',
            ],
          },
          {
            h: 'The result',
            list: [
              'Guided onboarding & setup — Bluetooth hardware pairing, Apple Health / Google Health Connect sync, goal selection, custom pain therapy plan (or ready-to-use expert programs).',
              'Smart therapy & hardware control — adjusted exercise routines with real-time intensity control for the electrostimulation pads inside the app.',
              '3D body mapping — an interactive 3D human model to pinpoint precise pain locations.',
              'Personalized schedule & analytics — a dashboard with daily/weekly/monthly metrics: steps, distance, calories, completed sessions, pain management progress.',
              'Content & profile ecosystem — blog, news feed, device setup instructions and a centralized profile.',
            ],
          },
        ],
      },
    ],
    contacts: {
      title: 'Contacts',
      text: 'Want to see more of my work? Message me on Telegram and I will send the full portfolio.',
      handle: '@itsawild',
      href: 'https://t.me/itsawild',
      more: 'Full portfolio on Figma available on request.',
    },
    footer: '© Zhamilya Nurtazina',
  },

  ru: {
    meta: {
      title: 'Жамиля Нуртазина — UX/UI дизайнер',
      description: 'UX/UI дизайнер, 5+ лет опыта в финтехе и EdTech. Кейсы, опыт и резюме.',
    },
    nav: { about: 'Обо мне', resume: 'Резюме', experience: 'Опыт', cases: 'Кейсы', contacts: 'Контакты' },
    hero: {
      name: 'Жамиля Нуртазина',
      role: 'UX/UI дизайнер',
      line: 'Проектирую понятные финтех- и образовательные продукты — от исследования до запуска.',
      markWord: 'понятные',
      ctaCases: 'Смотреть кейсы',
      ctaResume: 'Резюме',
    },
    about: {
      title: 'Обо мне',
      p: [
        'Меня зовут Жамиля, я UX/UI дизайнер с опытом более пяти лет. Работала в финтехе и EdTech.',
        'В работе продумываю каждую деталь — от идеи и исследования до прототипа и визуального дизайна. Верю, что такой подход помогает создавать по-настоящему сильные и новые продукты.',
      ],
      skillsTitle: 'Навыки',
      skills: [
        'Дизайн сайтов и мобильных приложений',
        'Дизайн-системы / UI-киты',
        'Прототипирование',
        'Тестирование',
        'CJM / User Flow / JTBD',
      ],
      toolsTitle: 'Инструменты',
      tools: ['Figma', 'Miro', 'Notion', 'Jira', 'Trello'],
    },
    resume: {
      title: 'Резюме',
      text: 'Скачайте моё резюме в PDF.',
      button: 'Скачать PDF',
      file: '', // TODO: '/resume-ru.pdf' после добавления файла в public/
      soon: 'PDF скоро появится.',
    },
    experience: {
      title: 'Опыт работы',
      items: [
        { company: 'Freedom Broker', field: 'Инвестиционная компания', role: 'UX/UI дизайнер', period: 'август 2024 — настоящее время' },
        { company: 'Prodengi.kz', field: 'Финансовый маркетплейс', role: 'UX/UI дизайнер', period: 'июль 2022 — 2024' },
        { company: 'Фриланс', field: 'Мобильные приложения · сайты · лендинги', role: 'UX/UI дизайнер', period: '2020 — 2022' },
      ],
      respTitle: 'Задачи',
      uxTitle: 'UX',
      ux: [
        'Исследования на основе JTBD, CJM, карты эмоций',
        'Кастомные исследования',
        'Проектирование пользовательских сценариев',
        'Изучение пользовательских сценариев',
        'Проведение интервью',
        'Составление user flow, CJM и др.',
        'Работа с обратной связью пользователей и аналитикой',
      ],
      uiTitle: 'UI',
      ui: ['Проектирование мобильных интерфейсов'],
      launch: 'Довожу дизайн от прототипа до запуска и выката в продакшн.',
    },
    casesSection: {
      title: 'Кейсы',
      intro:
        'Подборка цифровых продуктов, которые я проектировала в финтехе и образовании: медиаплатформы, личные кабинеты, корпоративные сайты и финансовые маркетплейсы.',
      open: 'Читать кейс',
      back: 'Все кейсы',
    },
    cases: [
      {
        slug: 'website-redesign',
        tag: 'Freedom Broker · Финтех',
        title: 'Редизайн сайта',
        subtitle:
          'Финансовая платформа, объединяющая финансовые продукты, аналитику рынка, новости и образовательный контент.',
        metric: 'Медиахаб',
        metricLabel: 'единая точка входа для 7 форматов контента',
        blocks: [
          {
            h: 'Обзор',
            p: [
              'Я переработала главную страницу и медиаплатформу, чтобы по сайту было проще ориентироваться и пользователи смотрели больше контента.',
              'Прежний опыт мешал понять структуру платформы и переходить между типами контента. В итоге контент потреблялся урывками, а время на сайте было минимальным.',
            ],
          },
          {
            h: 'Задача',
            p: ['Проблема была не в нехватке контента, а в том, как он структурирован и подан.'],
            list: [
              'Навигация сложная и неинтуитивная.',
              'Разные типы медиаконтента были разбросаны по сайту.',
              'Пользователям было трудно находить связанные материалы и переходить между статьями.',
              'Контент потреблялся фрагментарно, а не непрерывно.',
              'Средняя длительность сессии — около 2 секунд.',
            ],
            note: 'Цель: сделать структуру и навигацию контента понятнее, чтобы пользователь быстро понимал, что предлагает платформа, и естественно продолжал изучать её.',
          },
          {
            h: 'Подход',
            p: [
              'Я перестроила медиаопыт вокруг потребности пользователя находить, читать и продолжать исследовать контент.',
              'Вместо разрозненных разделов я создала единый Медиахаб, где собраны все основные форматы: новости · инвестобзоры · аналитика · видеоподкасты · подкасты · журнал · блог.',
            ],
          },
          {
            h: 'Ключевые решения',
            list: [
              'Единая медиаплатформа — разные форматы контента собраны в одном хабе.',
              'Улучшенная навигация по контенту — переход к следующему материалу без возврата на главную страницу медиа.',
              'Бесконечная лента — непрерывное потребление контента с меньшим числом разрывов.',
              'Редизайн главной — понятная иерархия и более простое открытие ключевых продуктов и контента.',
            ],
          },
          {
            h: 'Результат',
            p: [
              'Сайт превратился из набора отдельных разделов в связанную контентную экосистему. Пользователь быстро видит, какой контент есть, находит разные форматы в одном месте, переходит между связанными статьями и продолжает изучать платформу без лишней навигации.',
            ],
          },
        ],
      },
      {
        slug: 'freedom-academy-2',
        tag: 'Freedom Academy · EdTech',
        title: 'Freedom Academy 2.0',
        subtitle: 'Сквозной редизайн образовательной платформы: от UX-анализа до финальной передачи в разработку.',
        metric: 'Сквозной',
        metricLabel: 'регистрация → курс → тесты → сертификат',
        blocks: [
          {
            h: 'Обзор',
            p: [
              'Я вела Freedom Academy от начала до конца: анализ существующей платформы, проектирование пользовательского опыта, дизайн новых страниц и передача макетов в разработку.',
              'Цель — превратить жёсткую, устаревшую и неудобную платформу в современный и бесшовный образовательный опыт с понятной навигацией и прозрачным прогрессом.',
            ],
          },
          {
            h: 'Задача',
            p: [
              'Freedom Academy построена на готовой коробочной платформе с серьёзными ограничениями. Интерфейс выглядел устаревшим и негибким, переходы между этапами обучения не были бесшовными, а часть страниц, нужных для полного опыта, в решении отсутствовала.',
              'Нужно было улучшить опыт, не пересобирая платформу с нуля: сбалансировать потребности пользователей и технические ограничения и тесно работать с внешними подрядчиками.',
            ],
          },
          {
            h: 'Моя роль',
            list: [
              'UX-анализ существующей платформы',
              'Информационная архитектура и пользовательские сценарии',
              'Работа с внешними подрядчиками',
              'Уточнение требований к дизайну и взаимодействиям',
              'Финальная передача в разработку',
            ],
            note: 'Путь обучения: Регистрация → Выбор курса → Курс → Тесты → Сертификат',
          },
          {
            h: 'Ключевые решения',
            list: [
              'Бесшовный опыт обучения — естественные переходы между курсами, уроками и тестами.',
              'Отслеживание прогресса — завершённость, текущие и назначенные курсы, пройденные курсы и результаты тестов.',
              'Личный кабинет — план студента, общий прогресс, AI Review, назначенные, текущие и пройденные курсы, результаты тестов.',
              'Новые страницы платформы — вход / регистрация, выбор курса, прохождение курса, тесты, сертификаты, прогресс, личный кабинет.',
            ],
          },
          {
            h: 'Работа в рамках ограничений',
            p: [
              'Самое сложное — проектировать внутри существующей платформы, а не с нуля. Я напрямую работала с подрядчиками, определяя новые страницы и взаимодействия, которых не было в исходном решении, и шаг за шагом превращала ограничения коробки в более цельный продукт.',
            ],
          },
          {
            h: 'Итог',
            p: [
              'Переход от жёсткой устаревшей платформы к современному связанному образовательному опыту: понятная навигация, плавные переходы, выбор курсов, прогресс, личный кабинет, результаты тестов и сертификаты.',
            ],
          },
        ],
      },
      {
        slug: 'freedom-academy-1',
        tag: 'Freedom Academy · Исследование',
        title: 'Freedom Academy 1.0',
        subtitle: 'Исследование, информационная архитектура, user flow и прототипирование.',
        metric: 'Исследование',
        metricLabel: 'бенчмарк, интервью, job stories',
        blocks: [
          {
            h: 'Предыстория',
            p: [
              'Дизайн Академии был создан в 2019 году. Платформа работала неплохо, но мы увидели возможность переработать её в рамках развития дизайн-системы.',
              'Цель — не только привести Академию к новому визуальному языку, но и улучшить общий опыт, навигацию и путь обучения.',
            ],
          },
          {
            h: 'Исследование',
            p: [
              'В бенчмаркинге я сравнила наш продукт с конкурентами (Skillbox, Тинькофф, Udemy) и выделила сильные и слабые стороны с учётом контекста.',
            ],
          },
          {
            h: 'Интервью',
            p: [
              'Я провела интервью с теми, кто уже купил курсы, и с теми, кто ещё нет. Перед интервью подготовила сценарий вопросов и ситуаций, в которых хотела понять поведение пользователя.',
            ],
          },
          {
            h: 'Job stories',
            p: [
              'Я составила job stories, чтобы понять мотивацию пользователей и их конечную цель при работе с продуктом.',
            ],
          },
          { h: 'Информационная архитектура, user flow и прототипирование' },
        ],
      },
      {
        slug: 'medtech-app',
        tag: 'MedTech · Мобильное приложение',
        title: 'MedTech: мобильное приложение',
        subtitle: 'Приложение-компаньон для носимого устройства для терапии боли и нейромодуляции.',
        metric: '3D-карта тела',
        metricLabel: 'указать боль, управлять устройством',
        blocks: [
          {
            h: 'О проекте',
            p: [
              'Универсальное приложение-компаньон для носимого устройства для терапии боли и нейромодуляции. Оно соединяет устройство с персональной физической терапией: электростимуляция, упражнения на подвижность, 3D-выбор зоны на теле и отслеживание активности. Я отвечала за продуктовую стратегию, онбординг, архитектуру 3D-взаимодействия, UI-дизайн, прототипирование и библиотеку компонентов.',
            ],
          },
          {
            h: 'Проблема',
            p: [
              'У людей, которые справляются с болью дома, несколько препятствий: устройство кажется сложным в управлении, типовые упражнения не попадают в конкретные зоны боли, а без понятного прогресса и медицинского сопровождения трудно заниматься регулярно.',
            ],
          },
          {
            h: 'Подход',
            p: [
              'Я провела анализ конкурентов в health-tech и интервью с пациентами физиотерапии, чтобы понять ключевые боли. Цель — единая экосистема, соединяющая физическое устройство с персональным цифровым планом восстановления. Я спроектировала пошаговый онбординг, простое Bluetooth-подключение и понятное 3D-взаимодействие, которое снижает трение при выборе точной зоны боли.',
            ],
          },
          {
            h: 'Результат',
            list: [
              'Онбординг и настройка по шагам — Bluetooth-подключение, синхронизация с Apple Health / Google Health Connect, выбор целей, индивидуальный план терапии (или готовые программы экспертов).',
              'Умная терапия и управление устройством — адаптированные упражнения и регулировка интенсивности электродов в реальном времени прямо в приложении.',
              '3D-карта тела — интерактивная 3D-модель для точного выбора зоны боли.',
              'Персональное расписание и аналитика — дашборд с метриками за день/неделю/месяц: шаги, дистанция, калории, завершённые сессии, прогресс в управлении болью.',
              'Контент и профиль — блог, лента новостей, инструкция по настройке устройства и единый профиль.',
            ],
          },
        ],
      },
    ],
    contacts: {
      title: 'Контакты',
      text: 'Хотите увидеть больше моих работ? Напишите мне в Telegram — пришлю полное портфолио.',
      handle: '@itsawild',
      href: 'https://t.me/itsawild',
      more: 'Полное портфолио в Figma — по запросу.',
    },
    footer: '© Жамиля Нуртазина',
  },
};
