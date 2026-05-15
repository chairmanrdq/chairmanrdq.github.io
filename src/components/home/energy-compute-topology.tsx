/**
 * Graphical abstract–style vector: national-scale core (wireframe “peaks”)
 * linked to green edge nodes over pure white. Flat line art only.
 */
export default function EnergyComputeTopology({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="绿能与算力网络拓扑示意：上半部为电蓝色线框数据中心群，下半部为翠绿色边缘节点网格，虚线表示数据与算力调度链路。"
    >
      <title>绿能与算力网络拓扑示意</title>
      <rect width="1600" height="900" fill="#FFFFFF" />

      {/* 午夜蓝：外框与分区轴线 */}
      <g stroke="#0A1526" strokeWidth="1.25" fill="none">
        <rect x="48" y="40" width="1504" height="820" rx="4" />
        <line x1="48" y1="452" x2="1552" y2="452" strokeDasharray="6 5" opacity="0.85" />
        <text x="72" y="72" fill="#0A1526" stroke="none" fontSize="22" fontFamily="system-ui, sans-serif" fontWeight="600">
          Core ↔ Edge scheduling
        </text>
        <text x="72" y="420" fill="#0A1526" stroke="none" fontSize="15" fontFamily="system-ui, sans-serif">
          National / regional compute fabric
        </text>
        <text x="72" y="880" fill="#0A1526" stroke="none" fontSize="15" fontFamily="system-ui, sans-serif">
          Renewable-aware edge mesh
        </text>
      </g>

      {/* 电蓝：上半 — 低多边形线框 “山脉 / 数据中心簇” */}
      <g stroke="#1D4ED8" strokeWidth="2" fill="none" strokeLinejoin="miter">
        <polygon points="200,420 380,180 520,400 340,420" />
        <polygon points="380,180 620,120 720,380 520,400" />
        <polygon points="620,120 900,200 880,420 720,380" />
        <polygon points="900,200 1180,140 1240,400 880,420" />
        <polygon points="1180,140 1420,260 1380,430 1240,400" />
        <line x1="340" y1="420" x2="520" y2="400" />
        <line x1="520" y1="400" x2="720" y2="380" />
        <line x1="720" y1="380" x2="880" y2="420" />
        <line x1="520" y1="400" x2="620" y2="120" />
        <line x1="900" y1="200" x2="1180" y2="140" />
      </g>

      {/* 翠绿：下半 — 平坦几何草地 / 边缘网格 */}
      <g stroke="#00C177" strokeWidth="1.75" fill="none">
        <polygon points="120,880 280,620 440,860 260,900" />
        <polygon points="280,620 520,560 640,840 440,860" />
        <polygon points="520,560 820,600 780,880 640,840" />
        <polygon points="820,600 1120,540 1180,860 780,880" />
        <polygon points="1120,540 1480,600 1520,880 1180,860" />
        <line x1="120" y1="760" x2="1520" y2="700" />
        <line x1="180" y1="880" x2="360" y2="640" />
        <line x1="360" y1="640" x2="600" y2="600" />
        <line x1="600" y1="600" x2="920" y2="620" />
        <line x1="920" y1="620" x2="1240" y2="580" />
        <line x1="1240" y1="580" x2="1520" y2="640" />
      </g>

      {/* 翠绿节点（实心圆点表示边缘算力 / 绿能接入） */}
      <g fill="#00C177" stroke="#00C177" strokeWidth="1">
        <circle cx="260" cy="780" r="10" />
        <circle cx="400" cy="700" r="10" />
        <circle cx="580" cy="680" r="10" />
        <circle cx="760" cy="720" r="10" />
        <circle cx="980" cy="660" r="10" />
        <circle cx="1200" cy="700" r="10" />
        <circle cx="1380" cy="740" r="10" />
      </g>

      {/* 电蓝虚线：边缘节点 — 核心峰顶（数据 / 算力管线） */}
      <g stroke="#1D4ED8" strokeWidth="1.5" fill="none" strokeDasharray="8 7">
        <line x1="260" y1="780" x2="380" y2="180" />
        <line x1="400" y1="700" x2="620" y2="120" />
        <line x1="580" y1="680" x2="900" y2="200" />
        <line x1="760" y1="720" x2="1180" y2="140" />
        <line x1="980" y1="660" x2="1240" y2="400" />
        <line x1="1200" y1="700" x2="720" y2="380" />
        <line x1="1380" y1="740" x2="1380" y2="430" />
      </g>

      {/* 电蓝：逻辑骨干折线（算力感知调度示意） */}
      <g stroke="#1D4ED8" strokeWidth="2.25" fill="none" strokeLinecap="square" strokeLinejoin="miter">
        <polyline points="160,440 420,320 700,360 1040,300 1320,380 1480,340" />
        <polyline points="420,320 420,180" strokeDasharray="5 5" />
        <polyline points="1040,300 1040,200" strokeDasharray="5 5" />
      </g>
    </svg>
  );
}
