# SAFI

[Live Project](https://nextjs.org)

## Safi's world of applications

Full Stack SaaS & AI ML Engineer - Next.js NestJS

## Maintenance

```bash
pnpm update
pnpm approve-builds
pnpm build
```

## Prettier

```bash
pnpm add -D prettier prettier-plugin-organize-imports prettier-plugin-tailwindcss
```

- .prettierrc, .prettierignore

## Shadcn

```bash
pnpm dlx shadcn@latest init -b base -p vega
pnpm shadcn add
pnpm shadcn add "https://www.shadcn.io/r/particles.json?token=3a6fe6fb1dff8fafd8b482a75089f93aded769b93b6fee0f6e2df6a7b2f3ba63"

```

- components.json, lib, hooks, components
- Update components to isolate shadcn

## Icons

```bash
pnpm react-icons lucide-react
```

## Shadcn Dark Theme

```bash
pnpm add next-themes
```

- components/providers/theme-provider, lib/cookies/theme
- add "--font-sans: var(--font-inter);" into globals.css under theme ilnine
- add layout, footer, header with mode-toggle, html-section

## Vercel

```bash
pnpm add @vercel/speed-insights @vercel/analytics
```

## Constants

- /lib/constants 

## Images

- Update next.config.ts

