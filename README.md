CAZ — AI Writing Studio at caz-studio.vercel.app

Designed and built a complete UI from scratch — landing page, auth screens, dashboard, studio, history, pricing, overview
Dark mode with system preference detection and a toggle that persists across sessions
Three AI generation modes (Copy, Code, Story) powered by Claude Sonnet via Anthropic API
Secure server-side API route in Next.js so your API key is never exposed
Real user authentication via Supabase — sign up, sign in, persistent sessions
Credits system stored in a Postgres database, deducted on every generation
Generation history saved to Supabase and loaded back on every login
Deployed to production on Vercel with environment variables secured
