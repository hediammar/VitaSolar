# Replit.md - Vita Solar Website

## Overview

This is a futuristic, animated website for **Vita Solar photovoltaïque**, a Tunisian solar energy company based in Hammamet. The website features a modern, professional design with advanced animations and interactive elements, built to showcase solar energy solutions for residential and commercial clients.

## System Architecture

The application follows a **monorepo structure** with a clear separation between frontend and backend:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for smooth, engaging user interactions

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for scroll-triggered animations, hover effects, and page transitions
- **Styling**: Tailwind CSS with custom design tokens for the solar theme

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Data Storage**: Currently using in-memory storage with plans for PostgreSQL integration
- **API Design**: RESTful API with proper error handling and validation
- **Development Server**: Custom Vite integration for hot reloading

### Design System
- **Color Palette**: Solar-themed colors (Solar Yellow #FFB300, Eco Green #4CAF50, Deep Charcoal #1A1A1A, Sky Blue #40C4FF)
- **Typography**: Modern fonts (Sora, Orbitron, Inter) for a futuristic feel
- **Visual Effects**: Glassmorphism, particle backgrounds, gradient animations, and hover glows
- **Responsive Design**: Mobile-first approach with smooth animations across all devices

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation using React Hook Form + Zod
2. Form data is validated on both client and server side
3. Data is sent to `/api/contact` endpoint
4. Server processes and stores the submission
5. Success/error feedback is provided to the user via toast notifications

### Animation System
1. Intersection Observer API detects when elements enter viewport
2. Framer Motion triggers entrance animations based on scroll position
3. Hover and interaction animations provide immediate feedback
4. Particle background creates ambient visual effects

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form, TanStack Query
- **UI Components**: Radix UI primitives, shadcn/ui components
- **Animation**: Framer Motion, React Intersection Observer
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Forms**: React Hook Form, Hookform Resolvers, Zod validation
- **Database**: Drizzle ORM, Drizzle Zod, Neon Database Serverless
- **Server**: Express.js, connect-pg-simple for sessions

### Development Dependencies
- **TypeScript**: Full TypeScript support across the stack
- **Vite**: Development server with hot reloading
- **ESBuild**: Production bundling for server code
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: ESBuild bundles the Express server to `dist/index.js`
3. **Database**: Drizzle migrations are applied using `npm run db:push`

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Serves static files from Express with API routes
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Apply database schema changes

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Notes

- The application is configured for PostgreSQL but currently uses in-memory storage for development
- The database schema is defined in `shared/schema.ts` with a contact submissions table
- The website features comprehensive animations and modern UI effects optimized for solar energy presentation
- All components are fully responsive and optimized for mobile devices
- The design follows the SunPower-inspired aesthetic with enhanced futuristic elements