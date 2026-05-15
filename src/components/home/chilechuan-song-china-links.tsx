import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Music } from 'lucide-react';

/**
 * 谭维维《敕勒川》/《敕勒歌》现场版：仅跳转国内正版平台，不使用 YouTube 嵌入或外链。
 * QQ 单曲 id 来自公开播放页 songmid（节目现场版，标题多为「敕勒歌」）。
 */
const PLATFORM_LINKS: { label: string; href: string; hint: string }[] = [
  {
    label: 'QQ 音乐 · 单曲',
    href: 'https://y.qq.com/n/ryqq/songDetail/001aQQeE0W9bNt',
    hint: '《敕勒歌》Live（经典咏流传等现场，与「敕勒川」为同一舞台作品常见署名）',
  },
  {
    label: '网易云音乐 · 搜索',
    href: 'https://music.163.com/#/search/m/?s=%E8%B0%AD%E7%BB%B4%E7%BB%B4%20%E6%95%95%E5%8B%92%E5%B7%9D',
    hint: '站内搜索「谭维维 敕勒川」',
  },
  {
    label: '哔哩哔哩 · 搜索',
    href: 'https://search.bilibili.com/all?keyword=%E8%B0%AD%E7%BB%B4%E7%BB%B4%20%E6%95%95%E5%8B%92%E5%B7%9D',
    hint: '站内搜索节目或饭制稿件（请以版权方为准）',
  },
  {
    label: '咪咕音乐 · 搜索',
    href: 'https://music.migu.com/v3/music/search?keyword=%E8%B0%AD%E7%BB%B4%E7%BB%B4%20%E6%95%95%E5%8B%92%E5%B7%9D',
    hint: '站内搜索「谭维维 敕勒川」',
  },
];

export default function ChilechuanSongChinaLinks() {
  return (
    <section
      id="chilagun-song"
      aria-labelledby="chilagun-song-title"
      className="mb-16 page-section-reveal"
      style={{ animationDelay: '35ms' }}
    >
      <Card className="luxury-card tech-frame-ambient overflow-hidden luxury-hover relative">
        <CardContent className="relative z-10 space-y-4 pt-6 md:pt-8">
          <div className="flex items-start gap-3">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 text-primary">
              <Music className="h-5 w-5" aria-hidden={true} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 id="chilagun-song-title" className="text-lg font-semibold text-foreground md:text-xl">
                聆听 · 谭维维《敕勒川》
              </h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                本站<strong className="text-foreground/90">不嵌入、不链接 YouTube</strong>；请在下列国内正版或聚合平台打开收听。节目现场版在平台上常标为《敕勒歌》，与「敕勒川」为同一演绎的常见命名。
              </p>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {PLATFORM_LINKS.map((item) => (
              <li key={item.href} className="min-w-0">
                <Button variant="outline" asChild className="h-auto w-full flex-col items-stretch gap-1 rounded-xl border-primary/25 py-3 text-left outline-academic">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-full flex-col gap-1">
                    <span className="flex items-center justify-between gap-2 font-medium text-foreground">
                      {item.label}
                      <ChevronRight className="h-4 w-4 shrink-0 text-primary opacity-80" aria-hidden={true} />
                    </span>
                    <span className="text-xs font-normal text-muted-foreground leading-snug">{item.hint}</span>
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
