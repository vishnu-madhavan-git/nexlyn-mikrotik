# AI Coding Agent Instructions for `nexlyn-mikrotik`

Welcome to the `nexlyn-mikrotik` codebase! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's structure and conventions.

## Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`. It uses the App Router (`app/` directory) for routing and includes:
- **Custom Fonts**: Optimized loading of [Geist](https://vercel.com/font) via `next/font`.
- **Modern CSS**: Styling is managed globally in `app/globals.css`.

## Key Files and Directories

- `app/`
  - `layout.tsx`: Defines the root layout for the application.
  - `page.tsx`: The main entry point for the homepage.
  - `globals.css`: Contains global styles for the application.
- `public/`: Static assets served at the root.
- `next.config.ts`: Configuration for Next.js.
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Lists dependencies and scripts.

## Developer Workflows

### Running the Development Server
Use one of the following commands to start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Editing Pages
- Modify `app/page.tsx` to update the homepage. Changes will auto-update in the browser.

### Deployment
- Deploy the app using [Vercel](https://vercel.com).

## Project-Specific Conventions

- **Routing**: This project uses the App Router (`app/` directory). Each folder represents a route, and `page.tsx` files define the route's content.
- **Styling**: Global styles are defined in `app/globals.css`. Avoid inline styles unless necessary.
- **Fonts**: Use `next/font` for font optimization.

## External Dependencies

- **Next.js**: Core framework for the project.
- **Vercel**: Deployment platform.

## Tips for AI Agents

- Follow the conventions outlined above to maintain consistency.
- When adding new routes, ensure they follow the folder-based routing structure.
- Use TypeScript for all new files and ensure type safety.
- Reference the [Next.js Documentation](https://nextjs.org/docs) for framework-specific features.

---

For any questions or clarifications, consult the `README.md` or the [Next.js Documentation](https://nextjs.org/docs).