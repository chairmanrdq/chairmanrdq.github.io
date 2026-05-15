/**
 * 敕勒川意象 + 传统蒙文（内蒙古自治区官方名称常见写法），与学术首页并存、不替代正文。
 * 蒙文需 Noto Sans Mongolian / 系统蒙古文字体方可理想连写；见 layout 中的 --font-mongolian。
 */
export default function ChilechuanCulturePanel() {
  /** 维基百科等常见转写：Öbür mongγol-un öbertegen zasaqu orun（内蒙古自治区） */
  const innerMongoliaMongolian =
    'ᠥᠪᠥᠷ ᠮᠣᠩᠭᠤᠯ ᠤᠨ ᠥᠪᠡᠷᠲᠡᠭᠡᠨ ᠵᠠᠰᠠᠬᠤ ᠣᠷᠤᠨ';

  return (
    <section
      id="chilagun-culture"
      aria-labelledby="chilagun-culture-title"
      className="mb-16 page-section-reveal"
      style={{ animationDelay: '40ms' }}
    >
      <div className="luxury-card tech-frame-ambient overflow-hidden luxury-hover relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.07] pointer-events-none" />
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-primary/75 mb-2">
                Inner Mongolia · Cultural note
              </p>
              <h2
                id="chilagun-culture-title"
                className="text-xl md:text-2xl font-semibold text-foreground mb-1"
              >
                敕勒川与阴山意象
              </h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                北朝民歌《敕勒歌》咏阴山敕勒川一带草原，与今日内蒙古的山川人文遥相呼应。
              </p>
              <blockquote className="border-l-2 border-primary/35 pl-4 space-y-1.5 text-foreground/85 leading-relaxed">
                <p className="text-base md:text-lg tracking-wide">敕勒川，阴山下。</p>
                <p className="text-base md:text-lg tracking-wide">天似穹庐，笼盖四野。</p>
                <p className="text-base md:text-lg tracking-wide">天苍苍，野茫茫，风吹草低见牛羊。</p>
              </blockquote>
              <p className="mt-3 text-xs text-muted-foreground">
                出处见《乐府诗集》所载北齐敕勒族民歌，历代传诵。
              </p>
            </div>

            <div className="flex shrink-0 flex-col justify-between gap-4 rounded-xl border border-border/80 bg-muted/40 px-4 py-5 md:px-5 md:min-w-[10.5rem]">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">传统蒙古文</p>
                <p
                  lang="mn-Mong"
                  className="mongolian-script-display text-lg md:text-xl leading-loose text-primary/95 break-words"
                  translate="no"
                >
                  {innerMongoliaMongolian}
                </p>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug border-t border-border/60 pt-3">
                上列为「内蒙古自治区」常见传统蒙古文表述（公开资料常见写法）；实际连写形态依字体与渲染引擎可能略有差异。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
