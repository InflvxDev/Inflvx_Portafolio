# InflvxDev Portfolio

A modern, responsive personal portfolio website built with **Astro** and **Tailwind CSS**. Showcasing professional experience, projects, and contact information with an elegant design and smooth animations.

## Overview

This is a professional portfolio for **Sebastian Ochoa Rangel (InflvxDev)**, a Systems Engineer, Developer, and Data Analyst. The portfolio features a modern interface displaying professional experience, completed projects with image carousels, and contact capabilities.

## Tech Stack

- **Framework**: [Astro](https://astro.build) 5.18.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.2.1 with Vite integration
- **Language**: TypeScript / JavaScript
- **Package Manager**: pnpm

## Features

- **Responsive Design**: Mobile-first approach with desktop optimization using Tailwind CSS
- **Hero Section**: Animated introduction with avatar, title, subtitle, and call-to-action button
- **Navigation Bar**: Bento-style nav with smooth scroll to sections
- **Experience Section**: Professional experience timeline with technologies and key achievements
- **Project Portfolio**: 7 projects displayed as cards with:
  - Image carousels with navigation controls
  - Project descriptions and technology tags
  - Links to demo, web, and repositories where available
  - Modal view with full image gallery
- **Contact Section**: Email, GitHub and LinkedIn links with availability status
- **Scroll-to-top button**: Smooth return to top
- **Animations**: 
  - Fade-in effects triggered on scroll via IntersectionObserver
  - Hover and interactive transitions
  - Respects `prefers-reduced-motion`

## Project Highlights

The portfolio showcases diverse projects including:

- **OHI BloodShoot & HOKOKU**: Healthcare management platforms (Astro, React, Supabase, SQL Server)
- **Selenium ChatBot**: WhatsApp automation for medical appointment reminders (Python, Selenium)
- **ASMUYCAVA App**: Mobile coffee traceability app (Flutter, Supabase, Dart)
- **Gneis AppWeb**: Hotel room management system (Angular, .NET, Supabase)
- **Eotia Cake**: Bakery product management app (Java, Spring Boot)
- **Minecraft Datapacks**: Three custom datapacks with mob variants and gameplay modifications

## Project Structure

```
├── public/                 # Static assets
│   ├── images/            # General images
│   └── projects/          # Project preview images
├── src/
│   ├── assets/            # Optimized local assets (avatar)
│   ├── components/        # Reusable Astro components
│   │   ├── HeroNavBar.astro
│   │   ├── HeroSection.astro
│   │   ├── ExperienceSection.astro
│   │   ├── ProjectSection.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectModal.astro
│   │   ├── ContactSection.astro
│   │   ├── Footer.astro
│   │   └── ScrollToTopButton.astro
│   ├── data/              # Static content data
│   │   ├── experience.js  # Experience timeline data
│   │   ├── projects.js    # Project portfolio data
│   │   ├── technologies.js# Tech stack SVG icons
│   │   └── site.config.js # Centralised personal info
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Page entry points
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── types/
│       └── index.ts       # Shared TypeScript interfaces
├── astro.config.mjs
├── eslint.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
pnpm install
```

### Development

Start the local development server at `http://localhost:4321`:

```bash
pnpm run dev
```

### Build

Create a production build:

```bash
pnpm run build
```

### Preview

Preview the production build locally:

```bash
pnpm run preview
```

### Astro CLI

Run additional Astro commands:

```bash
pnpm run astro
```

For Astro CLI help:

```bash
pnpm run astro -- --help
```

## Customization

### Update Experience Data

Edit `src/data/experience.js` to add or modify professional experience entries. Each entry includes:
- Company name and position
- Period (start/end dates)
- Description
- Technologies used
- Key achievements

### Update Projects Data

Edit `src/data/projects.js` to add or modify portfolio projects. Each project includes:
- Title and description
- Technology tags
- Image carousel images
- Optional repository link

### Update Site Info

Edit `src/data/site.config.js` to update your name, email, GitHub, LinkedIn, and navigation links from a single file.

- Global styles: `src/styles/global.css` (CSS variables + `@theme` for Tailwind 4)

## License

This project is the personal portfolio of Sebastian Ochoa Rangel (InflvxDev).

## Contact

For inquiries or collaboration opportunities, use the contact section on the portfolio website.
