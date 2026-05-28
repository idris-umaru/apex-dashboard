# Apex Dashboard

Apex Dashboard is a polished personal finance dashboard built with React, Vite, and Tailwind CSS. It combines a modern authentication experience with a protected financial overview for balances, income, expenses, savings, budgets, transactions, and goals.

## Highlights

- Login and account creation screens with form validation
- Protected dashboard routing with session-based access
- Local demo account storage for quick frontend testing
- Responsive dashboard layout with sidebar navigation and mobile header menu
- Finance widgets for balance stats, cash flow, budgets, recent transactions, and saving goals
- Light and dark mode support
- Charting powered by Recharts
- Icons from Lucide React

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Zod
- Recharts
- Lucide React
- ESLint

## Project Structure

```text
apex-dashboard/
  src/
    components/
      auth/          Login and registration screens
      common/        Shared UI components
      dashboard/     Dashboard widgets and navigation UI
      layout/        Page layout components
    data/            Mock finance data and navigation config
    hooks/           Dashboard state hooks
    utils/           Formatting and class helpers
```

## Getting Started

Install dependencies and run the app from the `apex-dashboard` folder:

```bash
cd apex-dashboard
npm install
npm run dev
```

The app starts on the auth flow. Create an account from the register page, then sign in with the same email and password to access the dashboard.

## Authentication Notes

This project currently uses frontend-only demo authentication:

- Registered users are stored in `localStorage`.
- The active login session is stored in `sessionStorage`.
- Logout clears the session and returns the user to `/login`.
- This is suitable for UI prototyping, not production security.

A production version should replace this with a backend auth provider, hashed credentials, server-issued sessions or tokens, and protected API routes.

## Available Scripts

Run these commands from `apex-dashboard/`:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Environment Variables

Create a local `.env` file when environment-specific settings are needed:

```bash
copy ..\.env.example .env
```

Real `.env` files are ignored by Git, so secrets and local settings stay off GitHub.

## Roadmap

- Connect authentication to a real backend or auth provider
- Replace mock finance data with user-specific API data
- Add persistent dashboard preferences
- Expand dashboard sections into dedicated pages
- Add automated tests for auth validation and protected routing
