# Deron & Eol Law Practice

Marketing website for **Deron & Eol Law Practice**, a full-service law firm in Ibadan, Nigeria. The site presents the firm’s counsel, practice areas, and contact details with a distinctive editorial design.

**Counsel of Distinction** — Corporate & Commercial, Real Estate, Governance, Risk & Compliance, Public Policy, and Litigation.

## Features

- Home, About, Practice, Team, and Contact views with hash-based navigation (`#home`, `#about`, `#practice`, `#team`, `#contact`)
- Hero carousel covering each practice area
- Founder profile for Ikeoluwa Adare, Principal Counsel
- Enquiry form that opens a pre-filled email to the firm
- Optional server-side contact API (Gmail SMTP via Nodemailer)
- SEO metadata, Open Graph tags, and `robots.txt`

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui, Framer Motion |
| Language | TypeScript |
| State | Zustand |
| Optional data | Prisma + SQLite |
| Runtime | [Bun](https://bun.sh/) (also works with Node.js / npm) |

## Getting started

### Prerequisites

- [Bun](https://bun.sh/) 1.x, or Node.js 20+
- Git

### Install and run

```bash
bun install
bun run dev
```

The app is available at [http://localhost:3000](http://localhost:3000).

With npm:

```bash
npm install
npm run dev
```

### Scripts

| Command | Purpose |
| --- | --- |
| `bun run dev` | Development server on port 3000 |
| `bun run build` | Production build (standalone output) |
| `bun run start` | Serve the standalone production build |
| `bun run lint` | ESLint |

## Configuration

Copy environment values into a `.env` file at the project root (this file is gitignored).

```env
# Used by Prisma if you enable the database
DATABASE_URL="file:./prisma/db/custom.db"

# Optional: power POST /api/contact with Gmail SMTP
SMTP_USER="your-gmail-address"
SMTP_PASS="your-app-password"
```

The public contact form currently uses `mailto:` so visitors can send an enquiry without SMTP. To send mail from the server instead, POST to `/api/contact` with `name`, `email`, `phone`, `practice`, and `message`, and set `SMTP_USER` and `SMTP_PASS`.

Firm copy, practice areas, contact details, and hero slides live in [`src/lib/content.ts`](src/lib/content.ts). Images live in [`public/assets/`](public/assets/).

## Project structure

```
src/
  app/                  # Next.js layout, page, and API routes
  components/site/      # Navbar, footer, preloader, page sections
  components/ui/        # shadcn/ui primitives
  lib/content.ts        # Firm content and practice areas
  lib/site-store.ts     # Client navigation state
public/assets/          # Logos, portraits, and hero photography
prisma/                 # Schema and SQLite database (optional)
```

## Pages

| Hash | Content |
| --- | --- |
| `#home` | Hero carousel, snapshot of the firm, practice highlights |
| `#about` | History, values, and positioning |
| `#practice` | Five practice areas and services |
| `#team` | Founder and principal counsel |
| `#contact` | Address, phone, email, and enquiry form |

Office: 10 Awoyelu Close, Ashi, Ibadan, Nigeria  
Email: deroneol22@gmail.com

## Licence

Private project for Deron & Eol Law Practice. All rights reserved.
