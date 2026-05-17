import { labImage } from '@/lib/media';

/** 首页轮播图（描述性 alt，利于无障碍与 SEO） */
export const labGalleryImages = [
  {
    src: labImage('26wt.jpg'),
    alt: 'Lab members at the Jiutian·Wutong Cup competition event',
  },
  {
    src: labImage('wtb.jpg'),
    alt: 'Award ceremony for the Intelligent Computing Pioneer Team',
  },
  {
    src: labImage('mmhy.jpg'),
    alt: 'Group meeting of the computing power networks research lab',
  },
  {
    src: labImage('202508.jpg'),
    alt: 'Research presentation at Inner Mongolia University',
  },
  {
    src: labImage('202509.jpg'),
    alt: 'Students collaborating on a computing systems project',
  },
  {
    src: labImage('202510.jpg'),
    alt: 'Lab outreach activity with undergraduate researchers',
  },
  {
    src: labImage('heb.jpg'),
    alt: 'Campus building at Inner Mongolia University',
  },
  {
    src: labImage('202502.jpg'),
    alt: 'Research collaboration discussion in the lab',
  },
] as const;
