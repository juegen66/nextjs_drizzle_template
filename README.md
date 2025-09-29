# Next.js + shadcn/ui + Drizzle ORM Starter Template

A modern full-stack Next.js application template with shadcn/ui components, Drizzle ORM, and PostgreSQL database integration.

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.4 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (built on Radix UI)
- **Database:** Drizzle ORM with PostgreSQL
- **Database Provider:** Neon (serverless PostgreSQL)

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager
- A Neon database account and database URL

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-project-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory with the following content:

   ```env
   # Database
   DATABASE_URL="your-neon-database-url-here"
   ```

   Get your database URL from [Neon Console](https://console.neon.tech/).

4. **Generate and run database migrations:**

   ```bash
   # Generate migration
   npx drizzle-kit generate

   # Push migration to database
   npx drizzle-kit push
   ```

## 🚀 Getting Started

1. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

2. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

3. **Start editing:**

   - Main page: `src/app/page.tsx`
   - API routes: `src/app/api/`
   - Database schema: `src/db/schema.ts`
   - UI components: `src/components/`

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── globals.css     # Global styles with Tailwind
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   └── ui/            # shadcn/ui components
│   ├── db/                # Database configuration
│   │   ├── drizzle.ts     # Database connection
│   │   └── schema.ts      # Database schema
│   └── lib/               # Utility functions
├── drizzle.config.ts      # Drizzle configuration
├── migrations/           # Database migrations
└── components.json       # shadcn/ui configuration
```

## 🗄️ Database Schema

The template includes a sample `todo` table. You can modify the schema in `src/db/schema.ts`:

```typescript
export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
```

## 🧩 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx drizzle-kit generate` - Generate database migrations
- `npx drizzle-kit push` - Push migrations to database

## 🎨 Customization

### Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

### Database Operations with Drizzle

```typescript
import { db } from '@/db/drizzle';
import { todo } from '@/db/schema';

// Insert a new todo
await db.insert(todo).values({
  text: 'Learn Next.js',
  done: false,
});

// Query todos
const todos = await db.select().from(todo);
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel:**
   - Import your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Other Platforms

This template can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- Render
- And many more...

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js
- [shadcn/ui Documentation](https://ui.shadcn.com/) - UI components
- [Drizzle ORM Documentation](https://orm.drizzle.team/) - Database ORM
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling
- [Neon Documentation](https://neon.tech/docs) - Database

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
