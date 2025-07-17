# alx-project-0x01 - Advanced Next.js Structuring
## Daily Contents App
Welcome to **Daily Contents**, a simple yet scalable Next.js application that displays posts and users. It allows adding new entries through modal forms, and features reusable components for cleaner development.

## Project Structure Overview

├── components
│   ├── common
│   │   ├── Button.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   ├── UserCard.tsx
│   │   └── UserModal.tsx
│   └── layout
│       ├── Header.tsx
│       └── Footer.tsx
├── interfaces
│   └── index.ts
├── pages
│   ├── index.tsx
│   ├── posts
│   │   └── index.tsx
│   └── users
│       └── index.tsx
├── public
│   └── (static assets: images, favicon, etc.)
├── styles
│   └── (global styles or Tailwind config if used)


## Scaffolding
```bash
npx create-next-app@latest alx-project-0x01 --typescript
```

Run the development server:

```bash
npm run dev -- -p 3000
```

- Display posts and user cards from external API
- Add new posts and users using modal forms
- Reusable `Button` component with configurable sizes and shapes
- Modular layout with `Header` and `Footer`
- Built using TypeScript, TailwindCSS, and Next.js


## Type definitions
Located in interfaces/index.ts
**Features**
- Next.js 15+ with Turbopack
- TypeScript for safety and clarity
- Tailwind CSS for rapid UI design
- Modular and reusable component architectur


# Github Repository
https://github.com/hananmyy/alx-project-0x01-setup.git