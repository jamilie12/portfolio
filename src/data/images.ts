// Картинки кейсов: public/images/cases/<slug>/. cover — главная картинка (карточка и шапка кейса),
// groups — подборки на странице кейса в указанном порядке. Чтобы перекинуть картинку в другую подборку,
// поменяйте её номер здесь.
const base = '/images/cases';
const p = (slug: string, files: string[]) => files.map((f) => `${base}/${slug}/${f}`);

export type GroupKey = 'before' | 'after' | 'screens' | 'research' | 'wireframes';
export const groupTitles: Record<GroupKey, { ru: string; en: string }> = {
  before: { ru: 'До', en: 'Before' },
  after: { ru: 'После', en: 'After' },
  screens: { ru: 'Экраны', en: 'Screens' },
  research: { ru: 'Исследования', en: 'Research' },
  wireframes: { ru: 'Low fidelity wireframe', en: 'Low fidelity wireframe' },
};

export const videoTitle = { ru: 'Видео', en: 'Video' };

export const caseImages: Record<
  string,
  { cover: string; video?: string; videoTitle?: { ru: string; en: string }; embed?: { src: string; title: { ru: string; en: string } }; groups: { key: GroupKey; images: string[] }[]; alt: { ru: string; en: string } }
> = {
  'website-redesign': {
    cover: `${base}/website-redesign/01.jpg`,
    // FigJam-борд с бенчмарком. Чтобы окно показывалось посетителям, в Figma: Share → «Anyone with the link can view».
    embed: {
      src: 'https://embed.figma.com/board/vLSy1KnwFp314QFiaGaJxY/benchmark---media?node-id=0-1&embed-host=share',
      title: { ru: 'Бенчмаркинг', en: 'Benchmarking' },
    },
    groups: [
      { key: 'before', images: p('website-redesign', ['02.jpg', '03.jpg']) },
      { key: 'after', images: p('website-redesign', ['04.jpg', '05.jpg', '06.jpg']) },
    ],
    alt: { ru: 'Редизайн сайта Freedom Broker', en: 'Freedom Broker website redesign' },
  },
  'freedom-academy-2': {
    cover: `${base}/freedom-academy-2/01.jpg`,
    groups: [
      { key: 'before', images: p('freedom-academy-2', ['02.jpg', '06.jpg']) },
      { key: 'after', images: p('freedom-academy-2', ['03.jpg', '04.jpg', '05.jpg', '07.jpg']) },
    ],
    alt: { ru: 'Экраны Freedom Academy 2.0', en: 'Freedom Academy 2.0 screens' },
  },
  'freedom-academy-1': {
    cover: `${base}/freedom-academy-1/cover.jpg`,
    video: '/videos/freedom-academy-1.mp4',
    videoTitle: { ru: 'Функционал личного кабинета', en: 'Personal account features' },
    // FigJam-борд с user flow. Чтобы окно показывалось посетителям, в Figma: Share → «Anyone with the link can view».
    embed: {
      src: 'https://embed.figma.com/board/C9WkpvNihDltMOmAaniJgW/Untitled?node-id=0-1&embed-host=share',
      title: { ru: 'User flow', en: 'User flow' },
    },
    groups: [
      { key: 'research', images: p('freedom-academy-1', ['01.png', '02.png', '03.png']) },
      { key: 'wireframes', images: p('freedom-academy-1', ['wireframes-lofi.png']) },
      { key: 'after', images: p('freedom-academy-1', ['after-01.jpg', 'after-02.jpg']) },
    ],
    alt: { ru: 'Исследование Freedom Academy 1.0', en: 'Freedom Academy 1.0 research' },
  },
  'medtech-app': {
    cover: `${base}/medtech-app/01.jpg`,
    groups: [{ key: 'screens', images: p('medtech-app', ['02.jpg', '03.jpg']) }],
    alt: { ru: 'Экраны MedTech-приложения', en: 'MedTech app screens' },
  },
  'flower-delivery-research': {
    cover: `${base}/flower-research/01.jpg`,
    groups: [{ key: 'research', images: p('flower-research', ['02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg']) }],
    alt: { ru: 'Исследование: доставка цветов в Казахстане', en: 'Research: flower delivery in Kazakhstan' },
  },
};
