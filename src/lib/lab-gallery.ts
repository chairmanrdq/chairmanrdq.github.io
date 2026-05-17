import { labImage } from '@/lib/media';

export type LabGallerySlide = {
  src: string;
  alt: string;
  caption?: string;
};

/** 竞赛/团队优先，便于首屏吸睛 */
export const labGalleryImages: LabGallerySlide[] = [
  {
    src: labImage('wtb.jpg'),
    alt: 'Award ceremony for lab teams at Jiutian·Wutong Cup',
    caption: 'Jiutian·Wutong Cup — national finals award ceremony',
  },
  {
    src: labImage('26wt.jpg'),
    alt: 'Lab teams at the Jiutian·Wutong Cup competition',
    caption: 'Intelligent Computing Pioneer Team & Neida Meow Meow Team',
  },
  {
    src: labImage('mmhy.jpg'),
    alt: 'Group meeting of the computing power networks research lab',
    caption: 'Lab group meeting — computing power networks',
  },
  {
    src: labImage('202508.jpg'),
    alt: 'Research presentation at Inner Mongolia University',
    caption: 'Campus research presentation',
  },
  {
    src: labImage('202509.jpg'),
    alt: 'Students collaborating on a computing systems project',
    caption: 'Student collaboration on systems projects',
  },
  {
    src: labImage('202510.jpg'),
    alt: 'Lab outreach with undergraduate researchers',
    caption: 'Undergraduate research outreach',
  },
  {
    src: labImage('heb.jpg'),
    alt: 'Campus building at Inner Mongolia University',
    caption: 'Inner Mongolia University',
  },
  {
    src: labImage('202502.jpg'),
    alt: 'Research discussion in the lab',
    caption: 'Research discussion session',
  },
];
