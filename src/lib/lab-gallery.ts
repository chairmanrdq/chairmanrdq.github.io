import { labImage } from '@/lib/media';
import { galleryContent } from '@/lib/content/load';

/** 实验室相册 — 编辑 content/gallery.json */
export const labGalleryImages = galleryContent.images.map((image) => ({
  src: labImage(image.file),
  alt: image.alt,
}));

/** 首页轮播数量由 gallery.json → homeCarouselCount 控制 */
export const homeGalleryImages = labGalleryImages.slice(0, galleryContent.homeCarouselCount);
