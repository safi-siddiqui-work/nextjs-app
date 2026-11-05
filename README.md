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
