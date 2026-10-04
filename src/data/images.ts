// Картинки кейсов: public/images/cases/<slug>/. Первая — обложка, остальные — галерея.
const base = '/images/cases';
export const caseImages: Record<string, { cover: string; gallery: string[]; alt: { ru: string; en: string } }> = {
  'website-redesign': {
    cover: `${base}/website-redesign/01.jpg`,
    gallery: [2, 3, 4, 5, 6].map((n) => `${base}/website-redesign/0${n}.jpg`),
    alt: { ru: 'Редизайн сайта Freedom Broker', en: 'Freedom Broker website redesign' },
  },
  'freedom-academy-2': {
    cover: `${base}/freedom-academy-2/01.jpg`,
    gallery: [2, 3, 4, 5, 6, 7, 8].map((n) => `${base}/freedom-academy-2/0${n}.jpg`),
    alt: { ru: 'Экраны Freedom Academy 2.0', en: 'Freedom Academy 2.0 screens' },
  },
  'freedom-academy-1': {
    cover: `${base}/freedom-academy-1/01.png`,
    gallery: [2, 3].map((n) => `${base}/freedom-academy-1/0${n}.png`),
    alt: { ru: 'Исследование Freedom Academy 1.0', en: 'Freedom Academy 1.0 research' },
  },
  'medtech-app': {
    cover: `${base}/medtech-app/01.jpg`,
    gallery: [2, 3].map((n) => `${base}/medtech-app/0${n}.jpg`),
    alt: { ru: 'Экраны MedTech-приложения', en: 'MedTech app screens' },
  },
};
