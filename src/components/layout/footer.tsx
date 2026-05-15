import React from 'react';
import { cn } from '@/lib/utils';

// Replace with actual scholar name
const SCHOLAR_NAME = "Dr. RuiDong Qi（祁瑞东）";

/** 草甸线描（无语义） */
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

/**
 * 地平线装饰：扁平剪影风（云线、风机、光伏、数据中心、蒙古包），非卡通造型。
 */
function PrairieHorizonDecor({ className }: { className?: string }) {
  return (
    <svg
      className={cn('text-emerald-950/68 dark:text-emerald-100/52', className)}
      viewBox="0 0 440 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* 云线 */}
      <g stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" opacity="0.42">
        <path d="M6 22c10-12 26-14 36-4 6-10 20-12 30-2 8-8 22-8 30 2 6-8 16-8 24 0" />
        <path d="M128 16c8-10 22-12 30-4 10-10 26-8 34 4 6-6 14-6 20 0" />
        <path d="M268 18c12-12 28-14 40-2 8-8 18-10 26-2 10-8 24-6 32 4" />
        <path d="M58 10c6-6 14-7 20-2" opacity="0.75" />
        <path d="M328 12c8-7 18-8 26-2" opacity="0.7" />
      </g>

      {/* 气流 */}
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.32">
        <path d="M22 36q14-6 26 0M26 42q12-4 22 2" />
        <path d="M372 38q-14-6-26 0M368 44q-12-4-22 2" />
      </g>

      {/* 风机 */}
      <g stroke="currentColor" strokeLinecap="round" fill="currentColor">
        <g transform="translate(4, 8)" opacity="0.58">
          <line x1="16" y1="74" x2="16" y2="28" strokeWidth="2" />
          <circle cx="16" cy="26" r="2.6" />
          <path
            d="M16 26V11M16 26l11 9M16 26L5 35"
            strokeWidth="1.35"
            fill="none"
          />
        </g>
        <g transform="translate(386, 10)" opacity="0.52">
          <line x1="14" y1="72" x2="14" y2="30" strokeWidth="1.85" />
          <circle cx="14" cy="28" r="2.4" />
          <path d="M14 28V13M14 28l10 8M14 28L4 36" strokeWidth="1.25" fill="none" />
        </g>
      </g>

      {/* 光伏：倾斜面 + 栅格 */}
      <g transform="translate(36, 46)" stroke="currentColor" fill="currentColor">
        <path
          d="M0 30L26 16h42L42 30v12L0 42z"
          fillOpacity="0.18"
          strokeWidth="1"
        />
        <line x1="8" y1="34" x2="30" y2="22" strokeWidth="0.75" opacity="0.45" />
        <line x1="20" y1="38" x2="44" y2="24" strokeWidth="0.75" opacity="0.45" />
        <line x1="4" y1="38" x2="4" y2="42" strokeWidth="0.75" opacity="0.38" />
        <line x1="22" y1="28" x2="22" y2="40" strokeWidth="0.75" opacity="0.38" />
        <line x1="40" y1="22" x2="40" y2="36" strokeWidth="0.75" opacity="0.38" />
      </g>

      {/* 数据中心：直角体量 + 檐口 + 横线 + 门 */}
      <g transform="translate(152, 32)" stroke="currentColor" fill="currentColor">
        <rect x="0" y="14" width="70" height="38" rx="1" fillOpacity="0.44" strokeWidth="1" />
        <rect x="0" y="8" width="70" height="8" rx="0.5" fillOpacity="0.38" strokeWidth="0.9" />
        <rect x="26" y="2" width="18" height="8" rx="0.5" fillOpacity="0.34" strokeWidth="0.85" />
        <line x1="6" y1="26" x2="64" y2="26" strokeWidth="0.9" opacity="0.35" />
        <line x1="6" y1="34" x2="64" y2="34" strokeWidth="0.9" opacity="0.35" />
        <line x1="6" y1="42" x2="64" y2="42" strokeWidth="0.9" opacity="0.35" />
        <rect x="28" y="44" width="14" height="8" rx="0.5" fillOpacity="0.55" strokeWidth="0.9" />
      </g>

      {/* 蒙古包：几何剪影 */}
      <g fill="currentColor">
        <g transform="translate(98, 30) scale(0.54)" opacity="0.62">
          <path d="M14 52V36h44v16H14z" opacity="0.5" />
          <path d="M14 36Q36 8 58 36z" opacity="0.68" />
          <circle cx="36" cy="18" r="3" opacity="0.45" />
          <path d="M26 52V40q10-4 20 0v12H26z" opacity="0.82" />
        </g>
        <g transform="translate(228, 20) scale(0.72)" opacity="0.6">
          <path d="M14 52V36h44v16H14z" opacity="0.48" />
          <path d="M14 36Q36 8 58 36z" opacity="0.66" />
          <circle cx="36" cy="18" r="3.1" opacity="0.42" />
          <path d="M26 52V40q10-4 20 0v12H26z" opacity="0.86" />
        </g>
        <g transform="translate(308, 32) scale(0.5)" opacity="0.58">
          <path d="M14 52V36h44v16H14z" opacity="0.46" />
          <path d="M14 36Q36 8 58 36z" opacity="0.64" />
          <circle cx="36" cy="18" r="3" opacity="0.4" />
          <path d="M26 52V40q10-4 20 0v12H26z" opacity="0.8" />
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
        <PrairieHorizonDecor className="h-[4.5rem] w-full max-w-2xl sm:h-[5rem]" />
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
