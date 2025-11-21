# InflvxDev Portfolio

A modern, responsive personal portfolio website built with **Astro** and **Tailwind CSS**. Showcasing professional experience, projects, and contact information with an elegant design and smooth animations.

## Overview

This is a professional portfolio for **Sebastian Ochoa Rangel (InflvxDev)**, a Systems Engineer, Developer, and Data Analyst. The portfolio features a modern interface displaying professional experience, completed projects with image carousels, and contact capabilities.

## Tech Stack

- **Framework**: [Astro](https://astro.build) 5.16.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1.10 with Vite integration
- **Language**: JavaScript/HTML
- **Package Manager**: pnpm

## Features

- **Responsive Design**: Mobile-first approach with desktop optimization using Tailwind CSS
- **Hero Section**: Animated introduction with avatar, title, subtitle, and call-to-action button
- **Navigation Bar**: Fixed navigation with smooth animations, desktop links, and mobile hamburger menu
- **Experience Section**: Professional experience timeline with technologies and key achievements
- **Project Portfolio**: 9+ projects displayed as cards with:
  - Image carousels with navigation controls
  - Project descriptions and technology tags
  - Links to repositories where available
- **Contact Section**: Integration for contact inquiries
- **Animated Footer**: Gradient design with decorative elements
- **Easter Egg**: Minecraft-themed easter egg (fixed position element)
- **Dark Mode Support**: Tailwind CSS class-based dark mode configuration
- **Animations**: 
  - Fade-in effects on scroll
  - Hovering and interactive transitions
  - Animated decorative elements (pulsing, bouncing, shimmer effects)

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
│   ├── eastereggs/        # Easter egg resources
│   ├── images/            # Avatar and general images
│   └── projects/          # Project preview images
├── src/
│   ├── assets/            # Local assets
│   ├── components/        # Reusable components
│   │   ├── NavBar.astro   # Fixed navigation with mobile menu
│   │   └── ProjectCard.astro  # Project card with image carousel
│   ├── data/              # Static data
│   │   ├── experience.js  # Experience timeline data
│   │   └── projects.js    # Project portfolio data
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout with header and footer
│   ├── pages/             # Page components
│   │   ├── index.astro    # Main portfolio page
│   │   ├── HeroSection.astro
│   │   ├── ExperienceSection.astro
│   │   ├── ProjectSection.astro
│   │   └── ContactSection.astro
│   └── styles/            # Global styles
│       └── global.css
├── astro.config.mjs       # Astro configuration with Tailwind integration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
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

### Styling

- Global styles: `src/styles/global.css`
- Tailwind configuration: `tailwind.config.js`
- Dark mode is supported via CSS class (`darkMode: 'class'`)

## License

This project is the personal portfolio of Sebastian Ochoa Rangel (InflvxDev).

## Contact

For inquiries or collaboration opportunities, use the contact section on the portfolio website.
