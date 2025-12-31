# LuminaCal Landing Page

A premium landing page for LuminaCal, an AI-powered calorie tracking application that uses computer vision to recognize food and calculate nutritional information.

## About

This landing page showcases LuminaCal's core features and provides a download link for the Android beta application. Built with a focus on modern web aesthetics and smooth animations.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and design tokens
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # Reusable UI components
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section with app mockup
│   ├── FeatureScanner.tsx
│   ├── BentoDashboard.tsx
│   ├── PrivacySection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## Features

- Responsive design optimized for all screen sizes
- Glassmorphism UI with dark theme
- Animated components using Framer Motion
- Direct APK download functionality

## Build

To create a production build:

```bash
npm run build
```

## License

This project is proprietary software for LuminaCal.
