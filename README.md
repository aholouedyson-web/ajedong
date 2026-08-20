# AJED — Site web (Next.js)

Site converti depuis un export Figma Make (React/Vite) vers **Next.js 16 (App Router)**.

## Stack
- Next.js 16 + TypeScript
- Tailwind CSS v4
- React 19

## Installation

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Structure

- `src/app/` — pages (App Router) : `/`, `/galerie`, `/a-propos`, `/contact`
- `src/components/` — Navbar, Footer
- `src/hooks/` — hook `useScrollAnimation` (animations au scroll)
- `public/images/logo-ajed.png` — logo officiel AJED

## Notes

- Les images de contenu (projets, galerie) proviennent d'Unsplash à titre d'exemple — à remplacer par vos propres photos.
- Les formulaires (don, bénévolat, sponsoring, contact) sont fonctionnels côté UI mais ne sont pas encore connectés à un backend / service d'envoi d'e-mails ou de paiement (FedaPay, Stripe, etc.).
