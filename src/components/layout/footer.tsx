import React from 'react';
import { cn } from '@/lib/utils';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. RuiDong Qi（祁瑞东）";

/** 卡通草甸：圆润草叶簇（无语义） */
function PrairieGrassDecor({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 128 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 24c2-10 5-16 9-20M16 24c1-7 3-12 6-16M22 24c1-5 2-9 4-12M38 24c3-9 7-15 12-19M44 24c2-6 4-10 7-13M52 24c1-4 2-7 4-9M66 24c4-10 9-16 15-19M72 24c2-5 4-9 7-12M80 24c1-3 2-6 4-8M94 24c3-9 7-14 12-17M100 24c2-4 3-7 5-10M108 24c1-3 2-5 3-7M118 24c2-8 5-13 9-17"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.62"
      />
    </svg>
  );
}

/**
 * 卡通化天际线：蓬松云、气流、Q 版风机 / 光伏 / 数据中心 / 蒙古包，
 * 配渐变与轻投影，偏品牌插画质感（无语义）。
 */
function PrairieHorizonDecor({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        'footer-toy-illustration',
        'text-teal-900 dark:text-teal-100',
        className
      )}
      viewBox="0 0 440 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="footerToy-skyCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="footerToy-metal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d9488" stopOpacity="0.55" />
          <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="footerToy-solarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#99f6e4" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#2dd4bf" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="footerToy-dcGlass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ccfbf1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#115e59" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="footerToy-yurtDome" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#34d399" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="footerToy-yurtWall" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#065f46" stopOpacity="0.88" />
        </linearGradient>
        <filter id="footerToy-softDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#0f172a" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* 地面轻影带 */}
      <ellipse cx="220" cy="94" rx="198" ry="5" fill="#134e4a" fillOpacity="0.08" className="dark:fill-black dark:opacity-40" />

      {/* 蓬松卡通云 */}
      <g filter="url(#footerToy-softDrop)">
        <path
          fill="url(#footerToy-skyCloud)"
          stroke="#bae6fd"
          strokeWidth="1.25"
          strokeLinejoin="round"
          className="dark:stroke-slate-500/50"
          d="M18 30c-8 0-14-6-12-14 2-9 12-12 18-6 3-10 16-12 22-3 6-9 18-6 22 4h-42c-6 0-10-5-8-11z"
        />
        <path
          fill="url(#footerToy-skyCloud)"
          stroke="#bae6fd"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="dark:stroke-slate-500/45"
          opacity={0.95}
          d="M128 24c-7 0-12-5-10-12 2-7 10-10 15-5 3-8 13-10 18-3 5-7 14-4 18h-33c-5 0-8-4-7-9z"
        />
        <path
          fill="url(#footerToy-skyCloud)"
          stroke="#bae6fd"
          strokeWidth="1.2"
          strokeLinejoin="round"
          className="dark:stroke-slate-500/45"
          opacity={0.92}
          d="M268 28c-8 0-14-6-12-13 2-8 11-11 17-6 4-9 15-8 20-2 5-8 16-5 20h-38c-6 0-10-5-8-11z"
        />
        <path
          fill="url(#footerToy-skyCloud)"
          stroke="#bae6fd"
          strokeWidth="1.1"
          strokeLinejoin="round"
          className="dark:stroke-slate-500/40"
          opacity={0.88}
          d="M328 18c-5 0-9-4-8-9 1-5 7-7 11-4 2-6 10-5 13-1 4-5 11-3 14h-22c-4 0-6-3-5-7z"
        />
      </g>

      {/* 卡通气流 */}
      <g
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        fill="none"
        opacity="0.38"
        className="dark:opacity-30"
      >
        <path d="M20 38c10-5 20-5 30 0M24 44c8-3 16-3 24 1" />
        <path d="M388 40c-10-5-20-5-30 0M384 46c-8-3-16-3-24 1" />
      </g>

      {/* Q 版风机（左） */}
      <g transform="translate(2,6)" filter="url(#footerToy-softDrop)">
        <ellipse cx="18" cy="78" rx="14" ry="3.5" fill="#134e4a" fillOpacity="0.12" />
        <rect x="12" y="34" width="12" height="44" rx="5" fill="url(#footerToy-metal)" stroke="#0f766e" strokeWidth="1.2" />
        <rect x="9" y="28" width="18" height="10" rx="4" fill="#115e59" stroke="#0d9488" strokeWidth="1" />
        <circle cx="18" cy="32" r="5" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1.2" />
        <path
          d="M18 32v-14M18 32l12 10M18 32L6 42"
          stroke="#f0fdfa"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M18 32v-14M18 32l12 10M18 32L6 42"
          stroke="#0f766e"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>

      {/* 卡通光伏板 */}
      <g transform="translate(34, 44)" filter="url(#footerToy-softDrop)">
        <ellipse cx="40" cy="52" rx="36" ry="4" fill="#134e4a" fillOpacity="0.1" />
        <path
          d="M4 50 L34 30 L84 30 L54 50 Z"
          fill="url(#footerToy-solarGlass)"
          stroke="#0f766e"
          strokeWidth="1.35"
          strokeLinejoin="round"
        />
        <path d="M14 46 L38 32" stroke="#f0fdfa" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M28 48 L52 34" stroke="#f0fdfa" strokeOpacity="0.28" strokeWidth="1" strokeLinecap="round" />
        <path d="M42 48 L66 34" stroke="#f0fdfa" strokeOpacity="0.22" strokeWidth="1" strokeLinecap="round" />
        <g fill="#0f766e" fillOpacity="0.35">
          <rect x="18" y="38" width="10" height="8" rx="2" transform="skewX(-18)" />
          <rect x="32" y="36" width="10" height="8" rx="2" transform="skewX(-18)" />
          <rect x="46" y="34" width="10" height="8" rx="2" transform="skewX(-18)" />
          <rect x="24" y="44" width="10" height="8" rx="2" transform="skewX(-18)" />
          <rect x="38" y="42" width="10" height="8" rx="2" transform="skewX(-18)" />
        </g>
      </g>

      {/* 卡通数据中心：圆角体量 + 玻璃条 + 屋顶机组 */}
      <g transform="translate(148, 26)" filter="url(#footerToy-softDrop)">
        <ellipse cx="38" cy="78" rx="40" ry="4" fill="#134e4a" fillOpacity="0.1" />
        <rect x="0" y="22" width="76" height="44" rx="8" fill="#115e59" stroke="#0f766e" strokeWidth="1.35" />
        <rect x="6" y="28" width="16" height="34" rx="4" fill="url(#footerToy-dcGlass)" stroke="#0d9488" strokeWidth="1" opacity="0.95" />
        <rect x="4" y="14" width="68" height="14" rx="6" fill="#0f766e" stroke="#14b8a6" strokeWidth="1" />
        <rect x="26" y="6" width="24" height="12" rx="4" fill="#134e4a" stroke="#5eead4" strokeWidth="0.9" />
        <rect x="8" y="8" width="14" height="8" rx="3" fill="#0d9488" stroke="#99f6e4" strokeWidth="0.75" opacity="0.9" />
        <rect x="54" y="8" width="14" height="8" rx="3" fill="#0d9488" stroke="#99f6e4" strokeWidth="0.75" opacity="0.9" />
        <line x1="26" y1="40" x2="70" y2="40" stroke="#5eead4" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="50" x2="70" y2="50" stroke="#5eead4" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="60" x2="70" y2="60" stroke="#5eead4" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="30" y="56" width="16" height="12" rx="4" fill="#042f2e" stroke="#14b8a6" strokeWidth="1" />
      </g>

      {/* Q 版蒙古包 ×3 */}
      <g filter="url(#footerToy-softDrop)">
        <g transform="translate(96, 32) scale(0.56)">
          <ellipse cx="36" cy="56" rx="34" ry="5" fill="#134e4a" fillOpacity="0.12" />
          <path
            d="M14 52V38h44v14H14z"
            fill="url(#footerToy-yurtWall)"
            stroke="#065f46"
            strokeWidth="1.2"
          />
          <path d="M14 38 Q36 10 58 38" fill="url(#footerToy-yurtDome)" stroke="#047857" strokeWidth="1.35" />
          <ellipse cx="36" cy="20" rx="5" ry="3.5" fill="#fefce8" stroke="#ca8a04" strokeWidth="0.9" />
          <path d="M26 52V42q10-5 20 0v10H26z" fill="#064e3b" stroke="#022c22" strokeWidth="1" />
          <path d="M18 44h36" stroke="#ecfdf5" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <g transform="translate(228, 18) scale(0.74)">
          <ellipse cx="36" cy="56" rx="34" ry="5" fill="#134e4a" fillOpacity="0.12" />
          <path
            d="M14 52V38h44v14H14z"
            fill="url(#footerToy-yurtWall)"
            stroke="#065f46"
            strokeWidth="1.2"
          />
          <path d="M14 38 Q36 10 58 38" fill="url(#footerToy-yurtDome)" stroke="#047857" strokeWidth="1.35" />
          <ellipse cx="36" cy="20" rx="5" ry="3.5" fill="#fefce8" stroke="#ca8a04" strokeWidth="0.9" />
          <path d="M26 52V42q10-5 20 0v10H26z" fill="#064e3b" stroke="#022c22" strokeWidth="1" />
          <path d="M18 44h36" stroke="#ecfdf5" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <g transform="translate(308, 30) scale(0.52)">
          <ellipse cx="36" cy="56" rx="34" ry="5" fill="#134e4a" fillOpacity="0.12" />
          <path
            d="M14 52V38h44v14H14z"
            fill="url(#footerToy-yurtWall)"
            stroke="#065f46"
            strokeWidth="1.2"
          />
          <path d="M14 38 Q36 10 58 38" fill="url(#footerToy-yurtDome)" stroke="#047857" strokeWidth="1.35" />
          <ellipse cx="36" cy="20" rx="5" ry="3.5" fill="#fefce8" stroke="#ca8a04" strokeWidth="0.9" />
          <path d="M26 52V42q10-5 20 0v10H26z" fill="#064e3b" stroke="#022c22" strokeWidth="1" />
          <path d="M18 44h36" stroke="#ecfdf5" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </g>

      {/* Q 版风机（右） */}
      <g transform="translate(378,8)" filter="url(#footerToy-softDrop)">
        <ellipse cx="16" cy="76" rx="13" ry="3.2" fill="#134e4a" fillOpacity="0.12" />
        <rect x="10" y="32" width="12" height="44" rx="5" fill="url(#footerToy-metal)" stroke="#0f766e" strokeWidth="1.2" />
        <rect x="7" y="26" width="18" height="10" rx="4" fill="#115e59" stroke="#0d9488" strokeWidth="1" />
        <circle cx="16" cy="30" r="4.8" fill="#ccfbf1" stroke="#0f766e" strokeWidth="1.1" />
        <path
          d="M16 30v-12M16 30l11 9M16 30L5 38"
          stroke="#f0fdfa"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M16 30v-12M16 30l11 9M16 30L5 38"
          stroke="#0f766e"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer-prairie border-t-0 py-10">
      <div className="site-footer-prairie-atmosphere" aria-hidden />
      <div className="relative z-[1] container mx-auto flex flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <PrairieHorizonDecor className="h-[5.25rem] w-full max-w-2xl sm:h-[5.75rem]" />
        <PrairieGrassDecor className="h-6 w-[8rem] text-emerald-800/65 dark:text-emerald-200/55" />
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
