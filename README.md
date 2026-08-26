# Qian Hui — Portfolio

Production site for a Computer Science student who ships software systems and games.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content (this is the CMS)

All copy lives in `content/`. You should not need to restyle the site to add work.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Name, headline, email, GitHub, LinkedIn, resume path |
| `content/projects.ts` | Featured software + game case studies |
| `content/games.ts` | “Games I've Built” cards, play/WebGL URLs, screenshots |
| `content/skills.ts` | Skill groups (no ratings) |
| `content/experience.ts` | Internships / jobs. Leave empty to hide the section |
| `content/achievements.ts` | Hackathons, written as builds — not trophies |

### Add a project

1. Append an object to `projects` in `content/projects.ts` (copy an existing entry).
2. Put a cover image in `public/projects/<slug>/`.
3. Set `github`, `demo`, and `playUrl` when they exist (`null` shows a placeholder, not a fake link).

### Add a game

1. Append to `games` in `content/games.ts`.
2. If it should also have a full engineering write-up, add a matching slug in `projects.ts` with `kind: "game"`.
3. For Unity WebGL, set `webglUrl` to the hosted `index.html`.

### Resume

Place a PDF at `public/resume/Qian-Hui-Resume.pdf`, or change `resumePath` in `content/site.ts`.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4

## Design intent

Dark editorial layout, lime as a single accent, monospace labels, serif titles. Projects first. No skill bars, no invented metrics, no trophy wall.
