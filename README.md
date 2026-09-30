# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Prep4Ever

## Waitlist storage

Waitlist sign-ups from the "Join Waitlist" form are saved to a Google Sheet through a Google Apps Script web app.

1. Create a Google Sheet, open **Extensions → Apps Script** and paste in [`waitlist/google-apps-script.gs`](waitlist/google-apps-script.gs).
2. **Deploy → New deployment → Web app**, with *Execute as: Me* and *Who has access: Anyone*. Copy the `/exec` URL.
3. Copy `.env.example` to `.env.local` and set `VITE_WAITLIST_URL` to that URL. Set the same variable in your hosting provider, then rebuild.

Entries appear in the **Waitlist** tab: joined-at time, email, source page and user agent. Duplicate emails are ignored.

## Pages

Routing uses React Router (`src/App.jsx`): `/` (home), `/terms`, `/privacy`, `/help` and `/faq`. Page components live in `src/pages/`.

Because these are client-side routes, the host must serve `index.html` for unknown paths (SPA fallback) so a direct visit to `/faq` doesn't 404. For example, on Netlify add a `_redirects` rule `/* /index.html 200`; on Vercel add a rewrite to `/index.html`.
