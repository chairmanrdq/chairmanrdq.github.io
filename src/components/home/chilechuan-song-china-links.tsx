import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Music } from 'lucide-react';

/** 经典咏流传第二季纯享版《敕勒歌》谭维维 — 用户指定稿件 */
const BILIBILI_BVID = 'BV1vC4y1W7EA';
const BILIBILI_PAGE_URL = `https://www.bilibili.com/video/${BILIBILI_BVID}/`;
const BILIBILI_EMBED_URL = `https://player.bilibili.com/player.html?bvid=${BILIBILI_BVID}&page=1&high_quality=1&danmaku=0`;

/**
 * 谭维维《敕勒歌》现场（经典咏流传）：嵌入哔哩哔哩官方播放器；另附国内音乐平台外链，不使用 YouTube。
 */
const PLATFORM_LINKS: { label: string; href: string; hint: string }[] = [
  {
    label: 'QQ 音乐 · 单曲',
    href: 'https://y.qq.com/n/ryqq/songDetail/001aQQeE0W9bNt',
    hint: '《敕勒歌》Live（节目现场版，与「敕勒川」为同一演绎的常见署名）',
  },
  {
    label: '网易云音乐 · 搜索',
    href: 'https://music.163.com/#/search/m/?s=%E8%B0%AD%E7%BB%B4%E7%BB%B4%20%E6%95%95%E5%8B%92%E5%B7%9D',
    hint: '站内搜索「谭维维 敕勒川」',
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
                聆听 · 谭维维《敕勒歌》（经典咏流传）
              </h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                下方为<strong className="text-foreground/90">哔哩哔哩站内播放器</strong>（《经典咏流传第二季纯享版》·《敕勒歌》谭维维）。本站<strong className="text-foreground/90">不使用 YouTube</strong>；亦可至 QQ 音乐、网易云、咪咕等平台收听。
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="overflow-hidden rounded-xl border border-border/80 bg-muted/30 shadow-inner">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={BILIBILI_EMBED_URL}
                  title="[经典咏流传第二季纯享版]《敕勒歌》演唱：谭维维"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground">
              稿件页：{' '}
              <a
                href={BILIBILI_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                bilibili.com/video/{BILIBILI_BVID}
              </a>
            </p>
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
