# Terravision - Construction & Engineering Website

## Overview

Terravision is a modern, production-ready website for a construction and engineering company specializing in Fit-Out Services, Renovation Works, MEP (Mechanical, Electrical & Plumbing), Civil Works, and Painting. The application is built as a full-stack web application with a React frontend and Express backend, designed with premium architecture and construction firm aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React with TypeScript (TSX/JSX)
- Wouter for client-side routing
- TanStack Query for server state management
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design system

**Design System:**
- Color Palette: Terracotta (#A64B2A) primary, Charcoal (#1F1F1F) secondary, White, Muted Green (#5C6F60)
- Typography: Poppins and Playfair Display fonts for modern architectural feel
- Spacing: Tailwind utility-based spacing system (4px increments)
- Component Library: Pre-built UI components following "New York" shadcn style variant

**Page Structure:**
- Home: Hero section with services overview, featured projects, testimonials
- About: Company information, values, team
- Services: Detailed service offerings with features and benefits
- Projects: Portfolio with filtering by category, project details modal
- Execution: Timeline-based process visualization
- Contact: Contact form with validation, company contact information

**Key Components:**
- Navbar: Fixed navigation with scroll-based styling changes
- Footer: Multi-column layout with links, services, contact info
- ServiceCard: Reusable card component for service display
- ProjectCard: Grid-based project showcase with hover effects
- TestimonialSlider: Auto-playing carousel for client testimonials
- TimelineStep: Visual process step component
- ContactForm: Form with react-hook-form and zod validation
- WhatsAppButton: Floating action button for direct messaging

**Styling Approach:**
- CSS-in-JS using Tailwind utility classes
- Custom CSS variables for theming (light/dark mode support)
- Responsive design: Mobile-first with breakpoints at 768px (tablet) and 1024px (desktop)
- Animations: Fade-in, slide-in effects using CSS transitions
- Hover states: Elevation effects on cards and buttons

### Backend Architecture

**Technology Stack:**
- Node.js with Express
- TypeScript for type safety
- Drizzle ORM for database interactions
- PostgreSQL database (via Neon serverless)
- Zod for runtime validation

**API Design:**
- RESTful endpoints under `/api` prefix
- Contact form submission: `POST /api/contact`
- Contact retrieval (admin): `GET /api/contact`
- Static file serving for production build
- SPA fallback routing for client-side navigation

**Data Storage Strategy:**
- Dual storage implementation: MemStorage (in-memory) and database-backed
- MemStorage used as fallback for development without database
- Database schema defined in shared/schema.ts for type safety across frontend/backend
- Contact submissions persisted with UUID primary keys

**Validation & Error Handling:**
- Zod schemas for request validation (insertContactSchema)
- User-friendly error messages using zod-validation-error
- HTTP status codes: 200/201 success, 400 validation errors, 500 server errors
- Consistent error response format with error and message fields

**Build Process:**
- Vite for frontend bundling and development server
- esbuild for backend bundling (server/index.ts → dist/index.cjs)
- Production build combines both into dist/ directory
- HMR (Hot Module Replacement) in development via Vite middleware
- Dependency bundling strategy: allowlist for critical dependencies to reduce cold start

### Database Schema

**Tables:**
- `users`: User authentication (id, username, password) - defined but not actively used
- `contact_submissions`: Contact form data (id, name, email, phone, service, message, createdAt)

**Type Safety:**
- Drizzle schema generates TypeScript types
- drizzle-zod creates runtime validation schemas from database schema
- Shared types between frontend and backend via `@shared/schema`

**ORM Features:**
- PostgreSQL dialect configuration
- Migration support via drizzle-kit
- Schema-first approach with type inference

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible components (@radix-ui/react-*)
  - Dialog, Dropdown, Popover, Toast, Navigation Menu, etc.
  - Provides accessibility features out of the box
- **shadcn/ui**: Pre-styled component wrappers built on Radix UI
  - Configuration: "new-york" style variant
  - Custom theme variables for Terravision brand colors

### Form Management
- **react-hook-form**: Form state management with minimal re-renders
- **@hookform/resolvers**: Integration between react-hook-form and validation libraries
- **zod**: Schema validation for forms and API requests
- **zod-validation-error**: User-friendly error message formatting

### Database & ORM
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **drizzle-kit**: Database migration and schema management CLI
- **drizzle-zod**: Generate Zod schemas from Drizzle tables

### State Management & Data Fetching
- **@tanstack/react-query**: Server state management, caching, and synchronization
  - Custom queryClient configuration with stale-time and refetch settings
  - API request wrapper for consistent fetch handling

### Styling & Design
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling
- **clsx** / **tailwind-merge**: Conditional className composition
- **postcss** / **autoprefixer**: CSS processing

### Development Tools
- **Vite**: Build tool and dev server with React plugin
- **@vitejs/plugin-react**: Official React plugin for Vite
- **@replit/vite-plugin-***: Replit-specific development plugins
  - Runtime error overlay
  - Cartographer (code navigation)
  - Dev banner

### Routing
- **wouter**: Lightweight client-side routing (~1.2KB)
  - Hook-based API (useLocation, useRoute)
  - No React Router dependency

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **embla-carousel-react**: Carousel/slider component for testimonials

### Session Management
- **express-session**: Session middleware for Express
- **connect-pg-simple**: PostgreSQL session store (configured but optional)

### Type System
- **TypeScript**: Full type coverage across frontend and backend
- Path aliases: `@/` for client/src, `@shared/` for shared code
- Shared schema types ensure type safety across API boundaries