import React from 'react';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. RuiDong Qi（祁瑞东）";

/** 装饰用草甸草叶剪影（无语义，aria-hidden） */
function PrairieGrassDecor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 20c2-8 6-14 10-18M14 20c1-6 3-11 6-15M22 20c0-5 1-9 3-12M34 20c3-7 8-13 14-17M40 20c2-5 4-9 7-12M48 20c1-4 2-7 4-9M60 20c4-9 10-15 16-18M66 20c2-4 4-8 7-11M74 20c1-3 2-5 3-7M86 20c3-8 7-14 12-17M92 20c2-5 3-8 5-11M100 20c1-3 2-5 3-6M112 20c2-7 5-12 9-16M118 20c1-4 2-6 3-8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** 云线、风电、光伏、数据中心与蒙古包剪影（无语义，aria-hidden） */
function PrairieHorizonDecor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 440 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* 白云轮廓 */}
      <g
        className="text-sky-100/90 dark:text-slate-400/45"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={0.95}
      >
        <path d="M6 22c10-12 26-14 36-4 6-10 20-12 30-2 8-8 22-8 30 2 6-8 16-8 24 0" />
        <path d="M128 16c8-10 22-12 30-4 10-10 26-8 34 4 6-6 14-6 20 0" />
        <path d="M268 18c12-12 28-14 40-2 8-8 18-10 26-2 10-8 24-6 32 4" />
        <path d="M58 10c6-6 14-7 20-2" opacity={0.75} />
        <path d="M328 12c8-7 18-8 26-2" opacity={0.7} />
      </g>

      {/* 气流线（风力意象） */}
      <g
        className="text-emerald-800/35 dark:text-emerald-200/25"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity={0.85}
      >
        <path d="M22 34q14-6 26 0M26 40q12-4 22 2" />
        <path d="M372 36q-14-6-26 0M368 42q-12-4-22 2" />
      </g>

      {/* 远景：风力机剪影 */}
      <g className="text-emerald-950/55 dark:text-emerald-50/45" stroke="currentColor" fill="currentColor">
        <g transform="translate(4, 8)" opacity={0.62}>
          <line x1="16" y1="74" x2="16" y2="26" strokeWidth="2.2" />
          <circle cx="16" cy="24" r="2.8" />
          <path
            d="M16 24V10M16 24l11 9M16 24L5 33"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(386, 10)" opacity={0.55}>
          <line x1="14" y1="72" x2="14" y2="28" strokeWidth="2" />
          <circle cx="14" cy="26" r="2.5" />
          <path
            d="M14 26V12M14 26l10 8M14 26L4 34"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* 光伏阵列：倾斜板 + 栅格 */}
      <g className="text-emerald-950/60 dark:text-emerald-50/48" transform="translate(36, 46)">
        <path d="M0 30L26 16h42L42 30z" fill="currentColor" opacity={0.38} />
        <path
          d="M0 30L26 16h42L42 30v12L0 42z"
          fill="currentColor"
          fillOpacity={0.22}
          stroke="currentColor"
          strokeWidth="0.9"
          strokeOpacity={0.45}
        />
        <line x1="8" y1="34" x2="30" y2="22" stroke="currentColor" strokeWidth="0.75" opacity={0.45} />
        <line x1="20" y1="38" x2="44" y2="24" stroke="currentColor" strokeWidth="0.75" opacity={0.45} />
        <line x1="4" y1="38" x2="4" y2="42" stroke="currentColor" strokeWidth="0.75" opacity={0.4} />
        <line x1="22" y1="28" x2="22" y2="40" stroke="currentColor" strokeWidth="0.75" opacity={0.4} />
        <line x1="40" y1="22" x2="40" y2="36" stroke="currentColor" strokeWidth="0.75" opacity={0.4} />
      </g>

      {/* 数据中心：机楼 + 檐口 + 百叶/进风格栅 + 屋顶机组 */}
      <g className="text-emerald-950/58 dark:text-emerald-50/46" transform="translate(154, 32)">
        <rect x="0" y="14" width="70" height="38" rx="1" fill="currentColor" opacity={0.48} />
        <rect x="0" y="8" width="70" height="8" rx="1" fill="currentColor" opacity={0.42} />
        <rect x="24" y="2" width="22" height="8" rx="1" fill="currentColor" opacity={0.4} />
        <rect x="6" y="4" width="12" height="6" rx="0.5" fill="currentColor" opacity={0.35} />
        <line x1="6" y1="26" x2="64" y2="26" stroke="currentColor" strokeWidth="1.1" opacity={0.35} />
        <line x1="6" y1="34" x2="64" y2="34" stroke="currentColor" strokeWidth="1.1" opacity={0.35} />
        <line x1="6" y1="42" x2="64" y2="42" stroke="currentColor" strokeWidth="1.1" opacity={0.35} />
        <rect x="28" y="44" width="14" height="8" rx="0.5" fill="currentColor" opacity={0.55} />
      </g>

      {/* 蒙古包剪影 */}
      <g className="text-emerald-950/72 dark:text-emerald-50/58" fill="currentColor">
        <g transform="translate(100, 30) scale(0.52)">
          <path d="M14 52V36h44v16H14z" opacity={0.52} />
          <path d="M14 36Q36 8 58 36z" opacity={0.68} />
          <circle cx="36" cy="18" r="3.2" opacity={0.45} />
          <path d="M26 52V40q10-4 20 0v12H26z" opacity={0.86} />
        </g>
        <g transform="translate(232, 20) scale(0.72)">
          <path d="M14 52V36h44v16H14z" opacity={0.5} />
          <path d="M14 36Q36 8 58 36z" opacity={0.68} />
          <circle cx="36" cy="18" r="3.2" opacity={0.46} />
          <path d="M26 52V40q10-4 20 0v12H26z" opacity={0.9} />
        </g>
        <g transform="translate(312, 32) scale(0.5)">
          <path d="M14 52V36h44v16H14z" opacity={0.48} />
          <path d="M14 36Q36 8 58 36z" opacity={0.65} />
          <circle cx="36" cy="18" r="3.2" opacity={0.42} />
          <path d="M26 52V40q10-4 20 0v12H26z" opacity={0.84} />
        </g>
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer-prairie border-t-0 py-10">
      <div className="site-footer-prairie-atmosphere" aria-hidden />
      <div className="relative z-[1] container mx-auto flex flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <PrairieHorizonDecor className="h-[4.75rem] w-full max-w-2xl sm:h-[5.25rem]" />
        <PrairieGrassDecor className="h-5 w-[7.5rem] text-emerald-800/55 dark:text-emerald-200/45" />
        <p className="text-sm font-medium tracking-wide text-emerald-950/90 dark:text-emerald-50/95">
          &copy; {new Date().getFullYear()} {SCHOLAR_NAME}. All rights reserved.
        </p>
        {/* Optional: Add more links or information here */}
        {/*
        <p className="text-xs mt-2 opacity-90">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
          <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </p>
        */}
      </div>
    </footer>
  );
}
