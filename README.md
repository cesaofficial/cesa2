# CESA Official Website

The official website for the Computer Engineering Students' Association (CESA) built with React, Vite, and Tailwind CSS.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Modern, responsive design with dark mode support
- Interactive team section with member profiles
- Event listings and details
- Contact form with form validation
- 404 Not Found page with helpful navigation
- Smooth scrolling and animations
- SEO optimized

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Routing**: React Router v6
- **Linting**: ESLint
- **Code Formatting**: Prettier

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cesa2.git
   cd cesa2
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
│   ├── landing/     # Landing page components
│   └── ui/          # Shared UI components
├── data/            # Data files
├── pages/           # Page components
│   ├── about/       # About page components
│   ├── events/      # Events page components
│   ├── Contact.jsx  # Contact page
│   ├── Team.jsx     # Team page
│   └── ...          # Other pages
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## Components

- **Navbar**: Responsive navigation bar with mobile menu
- **Footer**: Site footer with links and social media
- **TeamMember**: Reusable component for displaying team members
- **EventCard**: Card component for displaying events
- **Button**: Custom button component with variants

## Pages

- **Home**: Landing page with hero section and featured content
- **About**: Information about CESA
- **Team**: Team member profiles with filtering
- **Events**: Upcoming and past events
- **Contact**: Contact form and information
- **404**: Custom 404 error page

## Styling

The project uses Tailwind CSS for styling with a custom configuration that includes:

- Custom color palette
- Dark mode support
- Responsive design utilities
- Custom animations and transitions

## Deployment

The application can be deployed to any static hosting service:

1. Vercel
2. Netlify
3. GitHub Pages
4. Any static file hosting service

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
