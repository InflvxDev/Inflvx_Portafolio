---
applyTo: '**'
---

# User Memory

## Project Context
- Current project type: Portfolio website
- Tech stack: Astro, Tailwind CSS, TypeScript
- Architecture: Component-based with Astro components
- Key requirements: Bento grid layout, responsive design, asymmetric boxes

## User Preferences
- Color scheme (from global.css):
  - Background: #f9f9f9
  - Foreground: #003365
  - Primary: #06b6d4
  - Secondary: #9b4d31
- Wants to reduce gradients (current code has too many)
- Prefers clean, modular design
- Mobile-first responsive approach

## Current Task Progress
- [x] Read all components and pages
- [x] Research Bento grid CSS patterns
- [x] Implement new Bento grid design for index page
- [x] Update HeroSection with Bento grid layout
- [x] Update ExperienceSection with Bento boxes
- [x] Update ProjectSection with asymmetric grid
- [x] Update ContactSection with Bento style
- [x] Update global.css with new utilities
- [x] Test responsive behavior

## Completed Changes Summary
1. **global.css**: Added Bento grid utilities (.bento-grid, .bento-box, .bento-accent, .bento-highlight) and animation utilities
2. **Layout.astro**: Cleaned up footer - removed excessive gradients, simplified design
3. **index.astro**: Added max-width container with proper padding
4. **HeroSection.astro**: Complete redesign with Bento grid boxes for avatar, name, role, CTA, tech stack, and social links
5. **HeroNavBar.astro**: Simplified navigation as a clean Bento box
6. **ExperienceSection.astro**: Modular Bento boxes for company info, period, achievements, and technologies
7. **ProjectSection.astro**: Asymmetric grid with varying box sizes for visual interest
8. **ProjectCard.astro**: Clean card design that adapts to different grid sizes
9. **ContactSection.astro**: Bento grid with contact options, availability status, and location

## Design Decisions
- Use CSS Grid with grid-template-areas for Bento layout
- Desktop: Asymmetric mosaic with different sized boxes
- Mobile: Single column stack
- Reduce gradients to subtle accents only
- Keep borders and shadows minimal
- Use rounded corners consistently

## Context7 Research Findings
- CSS Grid: grid-template-columns with fr units for flexible layouts
- grid-column/grid-row with span for asymmetric boxes
- gap property for consistent spacing
- auto-fit/auto-fill with minmax for responsive grids

## Notes
- Owner: InflvxDev (Sebastian Ochoa Rangel)
- Repository: Inflvx_Portafolio
- Branch: main
