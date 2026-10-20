// Картинки кейсов: public/images/cases/<slug>/. cover — главная картинка (карточка и шапка кейса),
// groups — подборки на странице кейса в указанном порядке. Чтобы перекинуть картинку в другую подборку,
// поменяйте её номер здесь.
const base = '/images/cases';
const p = (slug: string, files: string[]) => files.map((f) => `${base}/${slug}/${f}`);

export type GroupKey = 'before' | 'after' | 'screens' | 'research' | 'wireframes' | 'userflow' | 'design';
export const groupTitles: Record<GroupKey, { ru: string; en: string }> = {
  before: { ru: 'До', en: 'Before' },
  after: { ru: 'После', en: 'After' },
  screens: { ru: 'Экраны', en: 'Screens' },
  research: { ru: 'UX-research', en: 'UX-research' },
  wireframes: { ru: 'Low fidelity wireframe', en: 'Low fidelity wireframe' },
  userflow: { ru: 'User flow', en: 'User flow' },
  design: { ru: 'Дизайн', en: 'Design' },
};

export const videoTitle = { ru: 'Видео', en: 'Video' };

export const caseImages: Record<
  string,
  { cover: string; video?: string; videoGroup?: GroupKey; videoTitle?: { ru: string; en: string }; embed?: { src: string; title: { ru: string; en: string } }; groups: { key: GroupKey; images: string[] }[]; alt: { ru: string; en: string } }
> = {
  'website-redesign': {
    cover: `${base}/website-redesign/01.jpg`,
    groups: [
      { key: 'before', images: p('website-redesign', ['02.jpg', '03.jpg']) },
      { key: 'after', images: p('website-redesign', ['04.jpg', '05.jpg', '06.jpg']) },
    ],
    alt: { ru: 'Редизайн сайта Freedom Broker', en: 'Freedom Broker website redesign' },
  },
  'freedom-academy-2': {
    cover: `${base}/freedom-academy-2/01.jpg`,
    groups: [
      { key: 'userflow', images: p('freedom-academy-2', ['user-flow.png']) },
      { key: 'before', images: p('freedom-academy-2', ['02.jpg', '06.jpg']) },
      { key: 'after', images: p('freedom-academy-2', ['03.jpg', '04.jpg', '05.jpg', '07.jpg']) },
    ],
    alt: { ru: 'Экраны Freedom Academy 2.0', en: 'Freedom Academy 2.0 screens' },
  },
  'freedom-academy-1': {
    cover: `${base}/freedom-academy-1/cover.jpg`,
    video: '/videos/freedom-academy-1.mp4',
    videoTitle: { ru: 'Функционал личного кабинета', en: 'Personal account features' },
    videoGroup: 'design',
    groups: [
      { key: 'research', images: [] },
      { key: 'wireframes', images: p('freedom-academy-1', ['wireframes-lofi.png']) },
      { key: 'design', images: p('freedom-academy-1', ['after-01.jpg', 'after-02.jpg', 'design-mobile.jpg']) },
    ],
    alt: { ru: 'Исследование Freedom Academy 1.0', en: 'Freedom Academy 1.0 research' },
  },
  'medtech-app': {
    cover: `${base}/medtech-app/01.jpg`,
    groups: [{ key: 'screens', images: p('medtech-app', ['02.jpg', '03.jpg']) }],
    alt: { ru: 'Экраны MedTech-приложения', en: 'MedTech app screens' },
  },
  prodengi: {
    cover: `${base}/prodengi/cover.jpg`,
    groups: [
      { key: 'userflow', images: p('prodengi', ['user-flow.png']) },
      { key: 'screens', images: p('prodengi', ['desktop.jpg', 'mobile.jpg']) },
    ],
    alt: { ru: 'Prodengi.kz: user flow', en: 'Prodengi.kz: user flow' },
  },
  'flower-delivery-research': {
    cover: `${base}/flower-research/01.jpg`,
    groups: [{ key: 'research', images: p('flower-research', ['02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg']) }],
    alt: { ru: 'Исследование: доставка цветов в Казахстане', en: 'Research: flower delivery in Kazakhstan' },
  },
};
