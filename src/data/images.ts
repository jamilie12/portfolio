// Картинки кейсов: public/images/cases/<slug>/. cover — главная картинка (карточка и шапка кейса),
// groups — подборки на странице кейса в указанном порядке. Чтобы перекинуть картинку в другую подборку,
// поменяйте её номер здесь.
const base = '/images/cases';
const p = (slug: string, files: string[]) => files.map((f) => `${base}/${slug}/${f}`);

export type GroupKey = 'before' | 'after' | 'screens' | 'research';
export const groupTitles: Record<GroupKey, { ru: string; en: string }> = {
  before: { ru: 'До', en: 'Before' },
  after: { ru: 'После', en: 'After' },
  screens: { ru: 'Экраны', en: 'Screens' },
  research: { ru: 'Исследования', en: 'Research' },
};

export const caseImages: Record<
  string,
  { cover: string; groups: { key: GroupKey; images: string[] }[]; alt: { ru: string; en: string } }
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
      { key: 'before', images: p('freedom-academy-2', ['02.jpg', '06.jpg']) },
      { key: 'after', images: p('freedom-academy-2', ['03.jpg', '04.jpg', '05.jpg', '07.jpg', '08.jpg']) },
    ],
    alt: { ru: 'Экраны Freedom Academy 2.0', en: 'Freedom Academy 2.0 screens' },
  },
  'freedom-academy-1': {
    cover: `${base}/freedom-academy-1/cover.jpg`,
    groups: [{ key: 'research', images: p('freedom-academy-1', ['01.png', '02.png', '03.png']) }],
    alt: { ru: 'Исследование Freedom Academy 1.0', en: 'Freedom Academy 1.0 research' },
  },
  'medtech-app': {
    cover: `${base}/medtech-app/01.jpg`,
    groups: [{ key: 'screens', images: p('medtech-app', ['02.jpg', '03.jpg']) }],
    alt: { ru: 'Экраны MedTech-приложения', en: 'MedTech app screens' },
  },
};
