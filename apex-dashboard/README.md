# Apex Dashboard App

This folder contains the React frontend for Apex Dashboard, a personal finance dashboard with login, account creation, protected routing, and finance overview widgets.

## Run Locally

```bash
npm install
npm run dev
```

Create an account on `/register`, then sign in on `/login` to open the protected dashboard.

## Scripts

```bash
npm run dev      # Start the Vite dev server
npm run build    # Create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build
```

## Key Features

- Login and registration pages
- Zod-powered form validation
- Protected `/dashboard` route
- Session-based logout flow
- Local demo user storage for frontend testing
- Responsive finance dashboard with charts, widgets, and dark mode

## Demo Auth

Authentication is currently frontend-only for prototyping. Users are saved in `localStorage`, and the active session is saved in `sessionStorage`. Do not use this approach for production credentials.

## Environment Variables

Copy the root example when local settings are needed:

```bash
copy ..\.env.example .env
```

Real `.env` files are ignored by Git.
