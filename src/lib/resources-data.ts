import { siteConfig } from '@/lib/site-config';
import { resourcesContent } from '@/lib/content/load';

export type ResourceIconKey =
  | 'github'
  | 'jupyter'
  | 'overleaf'
  | 'zotero'
  | 'presentation'
  | 'book'
  | 'network';

export interface ResourceLinkItem {
  id: string;
  name: string;
  url: string;
  category: string;
  description?: string;
  icon: ResourceIconKey;
}

function resolveResourceUrl(item: ResourceLinkItem): ResourceLinkItem {
  if (item.id === 'lab-github') {
    return { ...item, url: siteConfig.academic.githubProfile };
  }
  return item;
}

function mapResources(items: ResourceLinkItem[]): ResourceLinkItem[] {
  return items.map(resolveResourceUrl);
}

/** 资源链接 — 编辑 content/resources.json */
export const labSoftware = mapResources(resourcesContent.labSoftware as ResourceLinkItem[]);
export const writingToolkit = mapResources(resourcesContent.writingToolkit as ResourceLinkItem[]);
export const labSlides = mapResources(resourcesContent.labSlides as ResourceLinkItem[]);
export const curatedVenues = mapResources(resourcesContent.curatedVenues as ResourceLinkItem[]);
