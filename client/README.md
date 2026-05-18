# Restaurant Reservations Demo — Client

React frontend for the Restaurant Reservations Demo App, built with Vite.

## Requirements

- **Node.js** >= 24.15.0
- **npm** >= 11.10.0

## Tech stack

| Package | Version |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build tool | Vite 8 |
| UI components | MUI v9 (`@mui/material`, `@mui/icons-material`, `@mui/x-date-pickers`) |
| Routing | React Router v7 |
| Styling | Emotion (`@emotion/react`, `@emotion/styled`) |

## Install

From the **project root** (not this folder):

```sh
npm install
```

## Environment variables

Copy `.env.sample` to `.env` and fill in your values:

```sh
cp .env.sample .env
```

| Variable | Description |
|---|---|
| `VITE_OAUTH_ACTIVE` | Set to `"true"` to enable OAuth |
| `VITE_CLIENT_ID` | Client ID from your Infobip Exchange app |
| `VITE_REDIRECT_URI` | URL where the app is hosted |
| `VITE_ACCOUNT_DOMAIN_API` | API Base URL provided by Infobip |
| `VITE_ACCOUNT_API_KEY` | API key (used when OAuth is disabled) |
| `VITE_CONVERSATIONS_INTEGRATION` | Set to `"true"` to enable Conversations integration |

> Variables must be prefixed with `VITE_` to be exposed to the browser. They are accessed via `import.meta.env.VITE_*`.

## Scripts

Run these from the **project root**:

| Command | Description |
|---|---|
| `npm run front:dev` | Start the frontend dev server at `http://localhost:5173` |
| `npm run back:dev` | Start the backend dev server at `http://localhost:3001` |
| `npm run start:dev` | Start both frontend and backend in parallel |
| `npm run start` | Build frontend for production and start the backend |

Or run directly from this folder:

| Command | Description |
|---|---|
| `npm start` | Start Vite dev server |
| `npm run build` | Type-check and build for production (output: `build/`) |
| `npm run preview` | Preview the production build locally |
