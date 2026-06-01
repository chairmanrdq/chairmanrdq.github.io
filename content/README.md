# 网站内容维护（PR-2）

日常更新**只需编辑本目录下的 JSON**，无需改 `src/app/**/page.tsx`。

## 文件说明

| 文件 | 对应页面 | 说明 |
|------|----------|------|
| `publications.json` | Publications、首页精选论文 | `publications` 数组 |
| `news.json` | News、首页 Latest News、RSS | `articles` + `labQuickLinks` |
| `projects.json` | Projects | `projects` 数组 |
| `courses.json` | Courses | `courses` 数组 |

**不在此目录维护的内容**（仍用代码或环境变量）：

- 站点 URL、邮箱、PI 职位 → `.env.local` + `src/lib/site-config.ts`
- 团队成员与照片 → `src/lib/team-data.ts`（PR-3 将迁入 `content/team.json`）
- 研究方向长文 → `src/lib/research-content.ts`

## 更新流程

```bash
# 1. 编辑 JSON（例如 content/publications.json）
# 2. 本地校验
npm run validate:content

# 3. 预览
npm run dev

# 4. 部署（push 后 CI 会自动 validate → build）
npm run build
```

校验失败时，终端会提示哪个字段不符合要求（日期格式、重复 id 等）。

## 字段速查

### publications.json

```json
{
  "publications": [
    {
      "id": "p4",
      "title": "...",
      "authors": "...",
      "venue": "...",
      "year": 2025,
      "type": "Conference Paper",
      "doi": "10.xxxx/...",
      "abstract": "可选",
      "keywords": ["可选"],
      "arxivUrl": "https://arxiv.org/abs/xxxx",
      "bibtex": "可选，换行用 \\n"
    }
  ]
}
```

`type` 可选：`Conference Paper` | `Journal Article` | `Book` | `Preprint` | `Book Chapter` | `Workshop Paper`  
填写 `arxivUrl` 后，会出现在 Publications 页的 **arXiv** 标签。

### news.json

- `articles`：新闻正文，`date` 必须为 `YYYY-MM-DD`
- `labQuickLinks`：首页「Explore the Lab」三张卡片（非新闻）

### projects.json

`status`：`Ongoing` 或 `Completed`

### courses.json

- `syllabusUrl` / `coursePageUrl`：留空 `""` 则页面不显示按钮；填完整 URL 后显示
- `resources`：`[{ "name": "Slides", "url": "https://..." }]`

## 常见错误

- **重复 id**：同一文件内两条记录 `id` 相同 → 校验失败
- **日期格式**：新闻 `date` 必须是 `2025-10-24` 这种格式
- **JSON 语法**：注意逗号、引号；可用 VS Code 格式化 JSON
