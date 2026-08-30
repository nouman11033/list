# Kingdom 2362 lists

- [Prime roster](./index.html) — static snapshot
- [SVR → TFU move tracker](./move-tracker.html) — live Kingshot check

## Host the tracker (needs API)

GitHub Pages can serve the HTML, but **live tracking needs a backend**.

### Vercel (recommended)

1. Import this repo in [Vercel](https://vercel.com).
2. Add env var `KINGSHOT_API_KEY` (your `kss_…` key).
3. Deploy.
4. Open `/move-tracker.html` on the Vercel URL.

### Local merge app

In `merger-static`, set `KINGSHOT_API_KEY` in `.env.local`, run `npm run dev`, open:
http://localhost:3000/move-tracker.html
