# Samawah Next.js Store

A modern, responsive e-commerce storefront built with Next.js 16, designed to integrate with the Salla e-commerce platform. This project features a custom UI theme ("Samawah"), robust state management for the shopping cart, and a modular architecture.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Features

- **Modern UI/UX**: Built with Tailwind CSS v4 using the custom "Samawah" identity (Teal, Mint, Navy, Peach color palette).
- **Dynamic Home Page**: Includes Hero section, Trust Bar, Featured Products Grid, Subscription Packages, and Value Propositions.
- **Shopping Cart**: Client-side cart management with persistence using `zustand` and local storage.
- **Salla Integration**: Type definitions and structure ready for Salla Storefront API integration.
- **Content Pages**: Dedicated pages for Events, Magazine, Partners, and Reports.
- **Authentication**: Setup with `next-auth` for user management.
- **Optimized Performance**: Utilizes Next.js App Router, dynamic rendering, and optimized images.
- **Animations**: Smooth transitions and effects powered by `framer-motion`.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd samawah-nextjs-store
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── api/             # API routes
│   ├── event/           # Events page
│   ├── magazine/        # Magazine page
│   ├── partners/        # Partners page
│   ├── product/         # Product details page
│   ├── reports/         # Reports page
│   └── ...
├── components/          # Reusable UI components
│   ├── home/            # Home page specific components
│   ├── layout/          # Layout components (Header, Footer)
│   └── ...
├── data/                # Static data and mock content
├── lib/                 # Utility functions and libraries
├── store/               # Global state management (Zustand)
│   └── cartStore.ts     # Shopping cart logic
└── types/               # TypeScript type definitions
    └── salla.ts         # Salla API types
```

## Environment Variables

While this project is configured to run with mock data/structure out of the box, you may need to configure environment variables for full functionality, especially for Authentication and API integrations.

Create a `.env` or `.env.local` file in the root directory. Common variables might include:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# API (if applicable)
SALLA_API_URL=https://api.salla.dev/store/v1
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/amazing-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some amazing feature'`).
5. Push to the branch (`git push origin feature/amazing-feature`).
6. Open a Pull Request.

## License

This project is private.
