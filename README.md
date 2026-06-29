# Analytics Dashboard

## Project Overview

A modern, responsive, and production-ready analytics dashboard built with Next.js 15 (App Router). It is designed to visualize sales data efficiently, following Atomic Design principles for scalable component architecture. 

## Features

- **Interactive Charts**: Visualize sales data through Bar, Line, and Pie charts using Recharts. Switch between chart types instantly without a page refresh.
- **Dynamic Filtering**: Filter data by Year (2022, 2023, 2024) and set a minimum Custom Sales Threshold to drill down into high-performing months.
- **Real-time Statistics**: View key metrics (Total Sales, Average Sales, Highest Month, Lowest Month) that automatically compute based on current filters.
- **Responsive Design**: Carefully crafted layouts that look perfect on mobile, tablet, and desktop devices.
- **Clean Architecture**: Follows Atomic Design methodology (Atoms, Molecules, Organisms, Templates) and strict Single Responsibility Principles.
- **API-Ready**: Data fetching is abstracted into a service layer, making it trivial to swap the mock dataset with a real REST or GraphQL API later.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## Folder Structure

The project strictly follows the **Atomic Design** architecture inside the `src/` directory:

- `components/atoms/`: Smallest building blocks (Button, Card, Input, Badge).
- `components/molecules/`: Combinations of atoms (FilterSection, StatCard, ChartSwitcher).
- `components/organisms/`: Complex UI sections (DashboardHeader, DashboardCards, SalesChart).
- `components/templates/`: Page-level layouts (DashboardLayout).
- `data/`: Mock Kaggle sales dataset.
- `hooks/`: Custom React hooks (e.g., `useSalesFilter` for business logic separation).
- `lib/`: API service layers and utilities.
- `types/`: Shared TypeScript interfaces.

## Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd analytics-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Build

To create a production-optimized build:

```bash
npm run build
npm run start
```

## Future Improvements

- **API Integration**: Connect the `salesService.ts` to a live backend database.
- **Authentication**: Add NextAuth for secure access.
- **Dark Mode**: Integrate `next-themes` and expand the Tailwind color palette.
- **Export Reports**: Allow downloading filtered data as CSV or PDF.
- **Pagination**: Implement pagination for extensive datasets if displayed in a table format.

## Screenshots

*(Placeholders for future screenshots)*

- **Desktop View**: `![Desktop Dashboard](/public/desktop-screenshot.png)`
- **Mobile View**: `![Mobile Dashboard](/public/mobile-screenshot.png)`
