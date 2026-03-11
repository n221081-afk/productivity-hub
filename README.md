# Productivity Hub

Your all-in-one productivity dashboard for tasks, finance, and notes.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js, React, TailwindCSS |
| Backend | Next.js API routes |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth |
| Notifications | Firebase Cloud Messaging |
| Charts | Chart.js |

## Project Structure

```
src/
├── app/              # Next.js App Router (routes, layouts)
│   ├── api/          # API routes
│   ├── tasks/        # /tasks page
│   ├── finance/      # /finance page
│   ├── notes/        # /notes page
│   ├── layout.tsx
│   └── page.tsx
├── components/       # Reusable UI
│   ├── layout/       # Layout, Navbar
│   └── ui/           # Button, Card, Input
├── features/         # Feature modules
│   ├── tasks/
│   ├── finance/
│   └── notes/
├── api/              # API client utilities
├── lib/              # Prisma, shared logic
├── utils/            # Helpers (cn, etc.)
├── hooks/            # Custom React hooks
└── pages/            # Page-level components
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Setup environment**
   ```bash
   cp .env.example .env
   # Edit .env with your PostgreSQL URL and NextAuth secrets
   ```

3. **Initialize database**
   ```bash
   npx prisma migrate dev
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
