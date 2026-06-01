# 网站内容维护指南

日常更新**只需编辑本目录下的 JSON**，无需改 `src/app/**/page.tsx` 或 `src/lib/*-data.ts` 里的数组。

## 内容文件一览

| 文件 | 对应页面 | 说明 |
|------|----------|------|
| `publications.json` | Publications、首页精选论文 | `publications` |
| `news.json` | News、首页 Latest News、RSS | `articles` + `labQuickLinks` |
| `projects.json` | Projects | `projects` |
| `courses.json` | Courses | `courses` |
| `team.json` | Team | 研究生 / 本科生 / 校友 |
| `gallery.json` | 首页轮播 | `images` + `homeCarouselCount` |
| `research.json` | Research | `themes` + `selectedContributionBullets` |
| `resources.json` | Resources | 四类资源链接数组 |

**仍用代码或环境变量维护：**

| 内容 | 位置 |
|------|------|
| 站点 URL、邮箱、PI 职位、头像路径 | `.env.local` + `src/lib/site-config.ts` |
| 招生邮件模板一句式说明 | `src/lib/recruitment.ts`（可后续迁入 JSON） |

## 更新流程

```bash
# 1. 编辑 JSON
# 2. 校验（构建前会自动执行）
npm run validate:content

# 3. 本地预览
npm run dev

# 4. 部署
npm run build
```

校验失败会指出字段错误或重复 `id`；若 `public/images/` 缺图会**警告**（不阻断构建）。

## team.json

四个数组：`graduateStudents`、`undergraduateResearchers`、`alumni`、`undergraduateAlumni`。

```json
{
  "id": 2,
  "name": "姓名（中英文）",
  "role": "Masters Student",
  "avatar": "zzb.jpg",
  "researchInterests": ["方向1", "方向2"],
  "bio": "简介段落"
}
```

- `avatar`：只写文件名，图片放在 `public/images/`（或运行 `npm run sync:images`）
- 全站 `id` 数字不可重复
- 校友用 `currentPosition`、`researchFocus`，无 `researchInterests` / `bio`

从旧 `team-data.ts` 重新生成 JSON（可选）：

```bash
node scripts/migrate-team-to-json.mjs
```

## gallery.json

```json
{
  "homeCarouselCount": 5,
  "images": [
    { "file": "26wt.jpg", "alt": "English description for accessibility" }
  ]
}
```

`homeCarouselCount` 控制首页轮播张数（≤ `images` 长度）。

## research.json

- `themes`：研究方向卡片
- `selectedContributionBullets`：Publications 页上方贡献要点

首页研究摘要仍来自 `site-config.ts` 的 `researchSummary`。

## resources.json

四个键：`labSoftware`、`writingToolkit`、`labSlides`、`curatedVenues`。

`icon` 可选：`github` | `jupyter` | `overleaf` | `zotero` | `presentation` | `book` | `network`  
`id` 为 `lab-github` 时，构建后会自动使用 `.env` 中的 GitHub 主页地址。

## publications / news / projects / courses

见各文件内现有条目格式。新闻 `date` 必须为 `YYYY-MM-DD`。论文 `type` 见 `publications.json` 内示例。

## 常见错误

- JSON 逗号、引号错误 → 用编辑器格式化
- 重复 `id` → 校验失败
- 头像文件缺失 → 警告；部署前请 `sync:images`
