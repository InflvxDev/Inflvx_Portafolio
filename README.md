# InflvxDev Portfolio

A modern, responsive personal portfolio website built with **Astro** and **Tailwind CSS**, deployed on **Cloudflare Pages**.

## Overview

This is the professional portfolio of **Sebastian Ochoa Rangel (InflvxDev)**, Systems Engineer, Developer, and Data Analyst. The site showcases professional experience, completed projects with interactive image carousels, and contact information.

## Tech Stack

| Tool | Version |
|---|---|
| [Astro](https://astro.build) | 6.0.3 |
| [Tailwind CSS](https://tailwindcss.com) | 4.2.1 |
| [@astrojs/cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) | latest |
| TypeScript / JavaScript | — |
| pnpm | — |

## Features

- **Responsive Design** — Mobile-first layout with Tailwind CSS
- **Hero Section** — Animated introduction with avatar, title, and call-to-action
- **Navigation Bar** — Bento-style nav with smooth scroll to sections
- **Experience Section** — Professional timeline with technologies, tools, and achievements
- **Project Portfolio** — 8 projects displayed as cards with:
  - Image carousels with navigation controls
  - Technology tags
  - Links to live demo and repository (where available)
  - Full-screen modal gallery
- **Contact Section** — Email, GitHub, and LinkedIn with availability status
- **Scroll-to-top button**
- **Animations** — Fade-in on scroll via IntersectionObserver, respects `prefers-reduced-motion`

## Project Highlights

| Project | Description | Stack |
|---|---|---|
| **Hokoku** | Data management platform for OHI clinic (administrative and clinical areas) | Astro, React, Supabase, SQL Server |
| **Hokoku BloodShot** | Blood bank folio tracking and transfusion service inventory control | Astro, React, Supabase, SQL Server |
| **Kenwa** | Mobile app for work-time and rest tracking with employee stress monitoring | Flutter, Dart |
| **Chusen** | Real-time raffle web app — import participants from Excel and draw winners | Astro, React, TailwindCSS |
| **ASMUYCAVA App** | Mobile coffee traceability app for a women's coffee growers association | Flutter, Supabase, Dart |
| **Gneis AppWeb** | Hotel room and reservation management system | Angular, .NET, SQL Server |
| **Eotia Cake** | Bakery product management web application | Java, Spring Boot |
| **Selenium ChatBot** | WhatsApp automation script for medical appointment reminders | Python, Selenium |

## Project Structure

```
public/
    images/             General images
    projects/           Project preview images (.webp)
    components/         Reusable Astro components
        HeroNavBar.astro
        HeroSection.astro
        ExperienceSection.astro
        ProjectSection.astro
        ProjectCard.astro
        ProjectModal.astro
        ContactSection.astro
        Footer.astro
        ScrollToTopButton.astro
    data/               Static content
        experience.js   Experience timeline
        projects.js     Project portfolio
        technologies.js Tech stack SVG icons
        site.config.js  Centralised personal info
    layouts/
        Layout.astro
    pages/
        index.astro
    styles/
        global.css
    types/
        index.ts        Shared TypeScript interfaces
astro.config.mjs
wrangler.jsonc
eslint.config.js
tsconfig.json
package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Starts the local dev server at http://localhost:4321.

### Build

```bash
pnpm build
```

### Preview

```bash
pnpm preview
```

## Deployment

Configured for **Cloudflare Pages** via the `@astrojs/cloudflare` adapter. Connect the repository to a Cloudflare Pages project or use Wrangler directly.

```bash
pnpm run generate-types
```

## Linting and Formatting

```bash
pnpm lint      # ESLint
pnpm format    # Prettier
```

## Contact

- **Email**: sebastian8a002@hotmail.com
- **GitHub**: https://github.com/InflvxDev
- **LinkedIn**: https://www.linkedin.com/in/seochoar/