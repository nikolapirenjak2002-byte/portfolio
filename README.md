# Nikola — Freelance dizajner

Portfolio sajt napravljen uz Next.js App Router, TypeScript i Tailwind CSS v4.

## Lokalni razvoj

```bash
npm ci
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Provere

```bash
npm run lint
npm run build
```

Build pravi statički sajt u `out/`. Kontakt forma sastavlja email i otvara email
aplikaciju; promeni adresu `besavenow.official@gmail.com` u
`components/contact-form.tsx` i `app/kontakt/page.tsx` ako je potrebno.

## GitHub Pages

GitHub Actions workflow u `.github/workflows/deploy.yml` automatski gradi i
objavljuje sajt nakon svakog push-a na `main`. U GitHub repozitorijumu otvori
**Settings → Pages** i postavi **Build and deployment → Source** na **GitHub
Actions**. Projekat koristi odgovarajući `basePath` za projektne GitHub Pages
URL-ove.
