This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact Form Notification

The contact form stores each submission as one JSON line in `data/contact-submissions.jsonl` by default, then sends a notification email through Gmail SMTP.

Set these environment variables before using the form:

```bash
GMAIL_USER=your-account@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_NOTIFICATION_TO_EMAIL=notify@example.com
CONTACT_STORAGE_DIR=./data
```

If you deploy on Vercel, the project directory is not durable at runtime. Use a writable temporary path such as `/tmp/hojokin-concierge` for `CONTACT_STORAGE_DIR`, or replace the file storage layer with a database/blob store.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Git Deploy Flow

This project is deployed by pushing Git commits to GitHub. The current remote is:

```bash
git remote -v
origin  https://github.com/kumakichi123/hojokin-concierge.git (fetch)
origin  https://github.com/kumakichi123/hojokin-concierge.git (push)
```

The deploy target branch is `master`. Push to `origin/master` and the Vercel-linked deployment will run automatically.

Recommended flow:

```bash
git -C C:\Users\asabe\funding-agent\karte-web-next status --short --branch
npm run build
git add .
git commit -m "your message"
git push origin master
```

Notes:

- Run `npm run build` before pushing so broken chunks or runtime regressions are caught locally first.
- On this project, local verification is more stable with `next build` + `next start` than `next dev`.
- Do not commit temporary files such as `.start-3000.log`, `.start-3000.err.log`, or ad hoc debug HTML files.
- If chunk files start returning 500 or 404 locally, remove `.next`, rebuild, and restart the server before pushing.

Chunk mismatch recovery:

```bash
Remove-Item -LiteralPath .next -Recurse -Force
npm run build
npm run start -- --hostname 127.0.0.1 --port 3000
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
