// Весь текст сайта: оригинал EN взят с jamilie.tilda.ws/portfolio, RU — перевод (проверить).
// TODO(контент): при желании — резюме (PDF) и реальные цифры результатов по кейсам.

export type Lang = 'ru' | 'en';
export const langs: Lang[] = ['ru', 'en'];

type Block = { h?: string; p?: string[]; list?: string[]; note?: string };
export type Case = {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  blocks: Block[];
};

type Content = {
  meta: { title: string; description: string };
  nav: { about: string; experience: string; cases: string; contacts: string };
  hero: { name: string; role: string; line: string; markWord: string; ctaCases: string; ctaContact: string };
  about: { title: string; p: string[]; skillsTitle: string; skills: string[]; toolsTitle: string; tools: string[] };
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
  contacts: { title: string; text: string; handle: string; href: string };
  footer: string;
};

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: 'Zhamilya Nurtazina — UX/UI designer',
      description: 'UX/UI designer with 5+ years in FinTech and EdTech. Cases and experience.',
    },
    nav: { about: 'About', experience: 'Experience', cases: 'Cases', contacts: 'Contacts' },
    hero: {
      name: 'Zhamilya Nurtazina',
      role: 'UX/UI designer',
      line: 'I design clear fintech and education products — from research to launch.',
      markWord: 'clear',
      ctaCases: 'View cases',
      ctaContact: 'Contact me',
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
      {
        slug: 'flower-delivery-research',
        tag: 'UX research · Desk research · 2026',
        title: 'Flower delivery in Kazakhstan',
        subtitle: 'Research for a mobile app design: the market, user pains, competitors, proto-personas, a customer journey map and an interview plan.',
        blocks: [
          {
            h: 'Overview',
            p: [
              'Before designing a mobile app for flower delivery, I studied the market in Kazakhstan (Almaty and Astana): who orders flowers and when, where things go wrong, and what competitors offer. The method was desk research across 12 open sources; the next step is interviews and a survey.',
            ],
            note: 'Status: hypotheses to be verified. Interviews and the survey have not been conducted yet; the proto-personas are based on open data.',
          },
          {
            h: 'Market context',
            p: ['Flowers are bought online, for an occasion, and at the peak.'],
            list: [
              '80–90% of deals happen through online channels.',
              'Up to 30% of florists’ annual revenue falls on March 8; orders grow 10–30 times around the holiday, and 70% of them are tulips.',
              '70% of buyers are women, who give flowers to colleagues, relatives and teachers. Men (30%) mostly buy for romantic occasions.',
              'The average check on Flowwow before March 8, 2026 was 25,107 ₸, 13% lower while prices rose about 40%. Single-flower bouquets sell 3 times better than mixed ones.',
              '70% of imported flowers go to Almaty and Astana; imports in 2024 were $93.6 million (+52.8%).',
            ],
            note: 'The key question: how do we help someone confidently send a bouquet for an occasion — on time, within budget, and without the “it looked different in the photo” surprise?',
          },
          {
            h: 'User pains',
            p: ['The main pain is uncertainty after payment: the person pays in advance, but it is the recipient who sees the result. The pains are confirmed by open sources; their scale in Kazakhstan still has to be verified in interviews.'],
            list: [
              'The bouquet does not match the photo — flowers replaced without consent, fewer stems, a different rose length.',
              'Quality drops at the peak — temporary florists are hired for March 8.',
              'Late or failed delivery — courier failures, frozen flowers; a bouquet arriving after 20:00 is no longer needed.',
              'The recipient is not home — repeated courier trips because nobody agreed the time with the recipient.',
              'Privacy risk — in 2024 a Flowwow bug showed the sender of an anonymous bouquet the recipient’s real address.',
              'Peak-day prices — the closer to the holiday, the more expensive; early pre-orders are noticeably cheaper.',
            ],
          },
          {
            h: 'Competitors',
            p: ['Strong marketplaces and a lot of manual orders. The gap is a well-thought-out occasion gifting flow with local payment.'],
            list: [
              'Flowwow (marketplace) — a photo of the bouquet before sending, tracking, chat with the seller, “clarify the address with the recipient”. Gap: quality depends on the seller, and there was an anonymity incident.',
              'Cvety.kz (local marketplace) — brand awareness and a wide partner catalog. Gap: complaints about replacements without consent and about contacting the recipient.',
              'Instagram florists (manual orders) — author bouquets and personal contact. Gap: orders by DM or phone, delivery by a taxi courier, no tracking.',
              'Kloombis (Russian reference) — an occasions calendar, a reminder 3 days ahead, a photo or video report. Gap: not available in Kazakhstan.',
            ],
            note: 'Kaspi has over 11 million monthly active users — more than half of the population. Paying with Kaspi in one tap is a baseline expectation, not a bonus.',
          },
          {
            h: 'Proto-personas',
            p: ['Three gifting scenarios — hypotheses based on desk research, to be refined after the interviews.'],
            list: [
              'Aigerim, 32, Almaty — “the caring organiser”. Buys flowers for her mother, colleagues and her child’s teacher. Goal: forget nothing and stay within budget. Fear: overpaying at the peak and getting something different from the photo. What helps: an occasions calendar, early pre-order, a price filter, several addresses in one order.',
              'Daniyar, 27, Astana — “last minute”. Gives flowers to his girlfriend and mother and often remembers on the day itself. Goal: quickly choose a safe option and pay in a couple of taps. Fear: the bouquet is late or disappoints the recipient. What helps: an exact delivery time, collections by occasion, Kaspi payment, a photo before sending.',
              'Madina, 24, Shymkent → Almaty — “congratulating from a distance”. Lives in a different city from her family and friends. Goal: delight loved ones and see their reaction. Fear: does not know the exact address and wants it to be a surprise. What helps: “Clarify the address with the recipient”, anonymity, a photo of the handover.',
            ],
          },
          {
            h: 'Customer journey: ordering a bouquet for March 8',
            p: ['I mapped Aigerim’s journey in seven stages: trigger, choice, checkout, payment, waiting, handover and after. The emotions go from anxiety and doubt to irritation at checkout and payment, then back to anxiety while waiting and relief at the handover.'],
            list: [
              'Trigger: a late order is pricier and has less choice → a reminder 7 days ahead with a pre-order.',
              'Choice: studio photos and an unclear size → real photos from reviews, size in cm, a budget filter.',
              'Checkout: one order = one address → saved recipients and a multi-address order.',
              'Payment: extra steps, a transfer to the florist with no guarantees → Kaspi Pay in one tap.',
              'Waiting: no status, flowers replaced without asking → a photo before sending, approval of replacements, tracking.',
              'Handover: the recipient is not home → agreeing the time with the recipient, a photo of the handover.',
              'After: nothing is saved → the occasion date in a calendar, repeat in one tap.',
            ],
          },
          {
            h: 'Design hypotheses',
            p: ['Remove uncertainty at every step after payment. For each hypothesis I noted which pain it answers and how to test it.'],
            list: [
              'A photo of the finished bouquet and agreeing replacements before sending will raise trust. Test: a survey (importance 1–5), interviews about replacement stories.',
              'An occasions calendar with a reminder 7 days ahead will move some orders to early pre-orders. Test: a survey — how many days ahead people order.',
              'A budget filter and collections by occasion will shorten selection time. Test: interviews — how they chose their last bouquet.',
              '“Clarify the address and time with the recipient” with anonymity protection will reduce failed deliveries. Test: interviews with senders and recipients.',
              'One-tap Kaspi payment will increase payment conversion. Test: a survey on payment method, a usability test of the prototype.',
            ],
          },
          {
            h: 'Research plan',
            p: ['The next step is to test the hypotheses with people.'],
            list: [
              'Qualitative: 8–10 in-depth interviews with Almaty and Astana residents aged 20–45 who ordered flowers with delivery in the last 6 months (about 6 women and 4 men, matching the 70/30 market split, plus 1–2 recipients). 30–40 minutes online in Russian or Kazakh; participants are asked to show their last order or chat. Recruiting: acquaintances, Telegram chats, Instagram stories.',
              'Quantitative: a survey of 80–150 people with 10–12 questions (occasion, channel, budget, how many days ahead they ordered, payment, which problems occurred, importance of features from 1 to 5). Result: the top 3 pains and top 3 features, from which the MVP and the first screens will grow.',
              'The 30–40 minute interview guide: warm-up (5 minutes), the last order step by step (15), a bad experience (7), holidays (5), wrap-up (3).',
            ],
            note: 'The rule: ask about past experience, not the future (“Would you use…?”). Follow up with “why?” and “show me how”.',
          },
          {
            h: 'Outcome and next steps',
            p: [
              'The desk research showed that the main problem of flower services is not choice but uncertainty after payment, and produced five design hypotheses. The next stage is interviews and a survey, followed by the MVP and the first app screens.',
            ],
          },
        ],
      },
    ],
    contacts: {
      title: 'Contacts',
      text: 'Get in touch with me on Telegram.',
      handle: '@itsawild',
      href: 'https://t.me/itsawild',
    },
    footer: '© Zhamilya Nurtazina',
  },

  ru: {
    meta: {
      title: 'Жамиля Нуртазина — UX/UI дизайнер',
      description: 'UX/UI дизайнер, 5+ лет опыта в финтехе и EdTech. Кейсы и опыт.',
    },
    nav: { about: 'Обо мне', experience: 'Опыт', cases: 'Кейсы', contacts: 'Контакты' },
    hero: {
      name: 'Жамиля Нуртазина',
      role: 'UX/UI дизайнер',
      line: 'Проектирую понятные финтех- и образовательные продукты — от исследования до запуска.',
      markWord: 'понятные',
      ctaCases: 'Смотреть кейсы',
      ctaContact: 'Связаться',
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
      {
        slug: 'flower-delivery-research',
        tag: 'UX research · Desk research · 2026',
        title: 'Доставка цветов в Казахстане',
        subtitle: 'Исследование для дизайна мобильного приложения: рынок, боли пользователей, конкуренты, прото-персоны, CJM и план интервью.',
        blocks: [
          {
            h: 'Обзор',
            p: [
              'Перед проектированием мобильного приложения для доставки цветов я изучила рынок Казахстана (Алматы и Астана): кто и когда заказывает цветы, где возникают проблемы, что предлагают конкуренты. Метод — desk research по 12 открытым источникам; следующий шаг — интервью и опрос.',
            ],
            note: 'Статус: гипотезы к проверке. Интервью и опрос ещё не проводились, прото-персоны построены на открытых данных.',
          },
          {
            h: 'Контекст рынка',
            p: ['Цветы покупают онлайн, по поводу и в пике.'],
            list: [
              '80–90% сделок проходят через онлайн-каналы.',
              'До 30% годовой выручки флористов приходится на 8 Марта; рост заказов к празднику в 10–30 раз, 70% из них — тюльпаны.',
              '70% покупателей — женщины: дарят коллегам, родным, учителям. Мужчины (30%) — в основном к романтическим поводам.',
              'Средний чек на Flowwow к 8 Марта 2026 — 25 107 ₸, на 13% ниже при росте цен около 40%. Монобукеты продаются в 3 раза лучше сборных.',
              '70% импортных цветов уходит в Алматы и Астану; импорт в 2024 году — $93,6 млн (+52,8%).',
            ],
            note: 'Главный вопрос: как помочь человеку уверенно отправить букет по поводу — вовремя, в рамках бюджета и без сюрприза «на фото было другое»?',
          },
          {
            h: 'Боли пользователей',
            p: ['Главная боль — неопределённость после оплаты: человек платит заранее, а результат видит не он, а получатель. Боли подтверждены открытыми источниками, их масштаб для Казахстана предстоит проверить в интервью.'],
            list: [
              'Букет не как на фото — замена цветов без согласия, меньше стеблей, другая длина роз.',
              'Качество падает в пик — на 8 Марта нанимают временных флористов.',
              'Опоздание и сорванная доставка — сбои курьерских служб, замёрзшие цветы; букет после 20:00 уже «не нужен».',
              'Получатель не на месте — повторные выезды курьера, потому что с получателем никто не согласовал время.',
              'Риск для приватности — в 2024 году баг Flowwow показал отправителю анонимного букета реальный адрес получательницы.',
              'Цена в пиковые дни — чем ближе к празднику, тем дороже; ранний предзаказ заметно дешевле.',
            ],
          },
          {
            h: 'Конкуренты',
            p: ['Сильные маркетплейсы и много ручных заказов. Пробел — продуманный сценарий подарка по поводу с местной оплатой.'],
            list: [
              'Flowwow (маркетплейс) — фото букета перед отправкой, трекинг, чат с продавцом, «уточнить адрес у получателя». Пробел: качество зависит от продавца, был инцидент с анонимностью.',
              'Cvety.kz (местный маркетплейс) — узнаваемость и широкий каталог партнёров. Пробел: жалобы на замены без согласия и связь с получателем.',
              'Instagram-флористы (ручные заказы) — авторские букеты, личное общение. Пробел: заказ в директе или по телефону, доставка Яндекс-курьером, нет трекинга.',
              'Kloombis (референс, РФ) — календарь поводов, напоминание за 3 дня, фото- и видеоотчёт. Пробел: нет в Казахстане.',
            ],
            note: 'У Kaspi больше 11 млн активных пользователей в месяц — больше половины населения. Оплата через Kaspi в один тап — базовое ожидание, а не бонус.',
          },
          {
            h: 'Прото-персоны',
            p: ['Три сценария подарка — гипотезы на основе desk research, которые уточним после интервью.'],
            list: [
              'Айгерим, 32, Алматы — «заботливая организаторша». Покупает цветы маме, коллегам, учителю ребёнка. Цель: ничего не забыть и уложиться в бюджет. Страх: переплатить в пик и получить не то, что на фото. Поможет: календарь поводов, ранний предзаказ, фильтр по цене, несколько адресов в одном заказе.',
              'Данияр, 27, Астана — «в последний момент». Дарит цветы девушке и маме, часто вспоминает в день повода. Цель: быстро выбрать безопасный вариант и оплатить в пару тапов. Страх: букет опоздает или разочарует получательницу. Поможет: точное время доставки, подборки «по поводу», оплата Kaspi, фото перед отправкой.',
              'Мадина, 24, Шымкент → Алматы — «поздравляет на расстоянии». Живёт в другом городе, чем семья и друзья. Цель: порадовать близких и увидеть их реакцию. Страх: не знает точного адреса, хочет сюрприз. Поможет: «Уточнить адрес у получателя», анонимность, фото вручения.',
            ],
          },
          {
            h: 'Customer journey: заказ букета к 8 Марта',
            p: ['Я разобрала путь Айгерим на семь этапов: триггер, выбор, оформление, оплата, ожидание, вручение, после. Эмоции по пути идут от тревоги и сомнения к раздражению на оформлении и оплате, затем снова к тревоге в ожидании и облегчению при вручении.'],
            list: [
              'Триггер: поздний заказ — дороже и меньше выбор → напоминание за 7 дней с предзаказом.',
              'Выбор: студийные фото и непонятный размер → реальные фото из отзывов, размер в см, фильтр по бюджету.',
              'Оформление: один заказ — один адрес → сохранённые получатели и мультиадресный заказ.',
              'Оплата: лишние шаги, перевод флористу без гарантий → Kaspi Pay в один тап.',
              'Ожидание: нет статуса, замена цветов без спроса → фото перед отправкой, согласование замены, трекинг.',
              'Вручение: получателя нет дома → согласование времени с получателем, фото вручения.',
              'После: ничего не сохраняется → дата повода в календаре, повтор в один тап.',
            ],
          },
          {
            h: 'Гипотезы для дизайна',
            p: ['Снять неопределённость на каждом шаге после оплаты. Для каждой гипотезы указано, какую боль она закрывает и как её проверить.'],
            list: [
              'Фото готового букета и согласование замены до отправки повысят доверие. Проверка: опрос (важность 1–5), интервью с историями замен.',
              'Календарь поводов с напоминанием за 7 дней переведёт часть заказов в ранний предзаказ. Проверка: опрос — за сколько дней заказывают.',
              'Фильтр по бюджету и подборки «по поводу» сократят время выбора. Проверка: интервью — как выбирали последний букет.',
              '«Уточнить адрес и время у получателя» с защитой анонимности снизит число сорванных доставок. Проверка: интервью с отправителями и получателями.',
              'Оплата Kaspi в один тап увеличит конверсию в оплату. Проверка: опрос про способ оплаты, юзабилити-тест прототипа.',
            ],
          },
          {
            h: 'План исследования',
            p: ['Следующий шаг — проверить гипотезы на людях.'],
            list: [
              'Качественно: 8–10 глубинных интервью с жителями Алматы и Астаны 20–45 лет, заказывавшими цветы с доставкой за последние 6 месяцев (около 6 женщин и 4 мужчин, как 70/30 на рынке, плюс 1–2 получателя). 30–40 минут онлайн на русском или казахском; просим показать последний заказ или переписку. Рекрутинг: знакомые, Telegram-чаты, сторис в Instagram.',
              'Количественно: опрос на 80–150 человек, 10–12 вопросов (повод, канал, бюджет, за сколько дней заказывали, оплата, какие проблемы случались, важность функций от 1 до 5). Результат: топ-3 боли и топ-3 функции, из которых вырастут MVP и первые экраны.',
              'Гайд интервью на 30–40 минут: разминка (5 минут), последний заказ по шагам (15), неудачный опыт (7), праздники (5), завершение (3).',
            ],
            note: 'Правило: спрашиваем о прошлом опыте, а не о будущем («Вы бы пользовались…?»). Уточняем «почему?» и «покажите, как?».',
          },
          {
            h: 'Итог и следующие шаги',
            p: [
              'Desk research показал, что главная проблема цветочных сервисов — не выбор, а неопределённость после оплаты, и сформулировал пять гипотез для дизайна. Следующий этап — интервью и опрос, затем MVP и первые экраны приложения.',
            ],
          },
        ],
      },
    ],
    contacts: {
      title: 'Контакты',
      text: 'Свяжитесь со мной в Telegram.',
      handle: '@itsawild',
      href: 'https://t.me/itsawild',
    },
    footer: '© Жамиля Нуртазина',
  },
};
