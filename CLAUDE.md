# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run lint   # Run ESLint
```

## Architecture

This is a personal portfolio site built with Next.js 16 App Router, React 19, Tailwind CSS 4, and Framer Motion.

### Key Files

- `app/config/site.ts` - Centralized site configuration (name, URLs, social links, SEO keywords). All metadata references this file.
- `app/layout.tsx` - Root layout with comprehensive SEO metadata (OpenGraph, Twitter Cards, robots, Google verification)
- `app/page.tsx` - Home page that composes all sections and includes JSON-LD structured data
- `app/sitemap.ts` - Dynamic sitemap generation using Next.js MetadataRoute
- `app/robots.ts` - Robots.txt generation using Next.js MetadataRoute
- `app/opengraph-image.tsx` - Dynamic OG image generation (edge runtime)

### Component Pattern

All UI components are in `app/components/`. Components using animations or interactivity (Framer Motion) have `"use client"` directive. The page is a server component that composes these client components.

### Styling

Uses Tailwind CSS 4 with custom CSS variables defined in `app/globals.css`:
- `--primary`, `--accent` for brand colors
- `--dark`, `--light`, `--gray` for neutrals
- Custom utilities: `.gradient-text`, `.geo-pattern`, `.section-divider`
