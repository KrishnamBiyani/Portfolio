# Krishnam Biyani — Portfolio

Personal portfolio built with React, Vite and Tailwind CSS, deployed as a single
Vercel project (static site + one serverless function).

## Stack

- React 19 + Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite`, theme tokens in `src/index.css`)
- Vercel Analytics
- Vercel AI SDK (`ai`) with the Groq provider (`@ai-sdk/groq`) for the "Ask about me" chatbot
- Geist Sans, self-hosted (`public/fonts/geist-latin.woff2`)

## Content

All portfolio content lives in `src/data/portfolio.js` — profile, links,
experience, projects and skills. The UI and the chatbot's context are both built
from that file, so facts are only written once.

## Chatbot

`api/chat.js` is a Vercel Edge function. It builds a system prompt from
`buildAIContext()` and streams the answer back as plain text. The model id and
its settings are constants at the top of that file.

The provider is Groq (`llama-3.3-70b-versatile`), chosen after benchmarking
against `google/gemma-4-26b-a4b-it:free` on OpenRouter: same prompt and
questions, median time-to-first-token 464ms vs 3473ms, with identical refusal
accuracy. If Groq is ever unavailable, an OpenAI-compatible provider can be
swapped in by changing the four provider lines in `api/chat.js`; OpenRouter
worked with `@openrouter/ai-sdk-provider` but is no longer a dependency. The model is only
called when a visitor sends a message, and the chat UI is code-split so it is
not downloaded on initial page load.

Set the API key as a server-side environment variable (never `VITE_`-prefixed):

```
GROQ_API_KEY=gsk_...
```

Add it in Vercel → Project → Settings → Environment Variables, and locally in a
`.env` file (see `.env.example`).

### Rate limiting

`POST /api/chat` is protected in two layers. GET and static requests are not
affected.

1. **In code** (`lib/rate-limit.js`): a per-instance sliding window keyed by
   client IP, 10 requests per minute and 40 per hour. It runs before parsing or
   any provider call and returns `429` with a `Retry-After` header. Because
   serverless instances are ephemeral and can run in parallel, this layer is a
   guard, not a guarantee.
2. **Required before going public — Vercel WAF rule** (the cross-instance
   guarantee, included on Hobby): Project → **Firewall** → **Configure** →
   **New Rule**. Condition: *Request Path* equals `/api/chat`. Action: **Rate
   Limit**, fixed window, key **IP**, e.g. **20 requests / 60s**, then
   **Deny**. Publish the rule. This blocks at the edge before the function
   runs, so abusive traffic costs nothing.

Keep the WAF limit looser than the in-code limit so the application layer
absorbs normal bursts and the edge only catches genuine abuse.

## Development

```bash
npm install
npm run dev      # UI only — /api/chat is not served by Vite
vercel dev       # UI + serverless function
npm run lint
npm run build
```

## Contact

- GitHub: https://github.com/KrishnamBiyani
- LinkedIn: https://www.linkedin.com/in/krishnam-biyani-707070278/
- Email: krishnambiyani5@gmail.com
