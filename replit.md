# Overview

This is a personal portfolio website for Jaeseok Choi, an AI and Backend Development Specialist currently working as a Software QA Engineer at Samsung Electronics. The site serves as a comprehensive showcase of professional experience, technical skills, research interests, and projects, with a particular focus on artificial intelligence, machine learning, and backend systems development.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The portfolio is built as a static website using vanilla HTML, CSS, and JavaScript with a single-page application feel through client-side routing. The design follows a sidebar navigation pattern with a main content area, featuring:

- **Multi-page Structure**: Five main sections (Home, Experience, Projects, Research, Skills) each with dedicated HTML files
- **Responsive Design**: Mobile-first approach with sidebar transformation for smaller screens
- **Interactive Elements**: Animated backgrounds, typing effects, skill progress bars, and smooth transitions
- **Modern CSS**: Uses CSS Grid, Flexbox, gradients, and custom animations for a polished user experience

## Design Patterns
The codebase follows a modular approach with:

- **Separation of Concerns**: HTML for structure, CSS for styling, JavaScript for interactivity
- **Component-based Styling**: Reusable CSS classes for cards, buttons, navigation elements
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with interactive features
- **Event-driven JavaScript**: DOM manipulation and user interaction handling through event listeners

## Navigation System
The site implements a sidebar navigation with:

- **Fixed Positioning**: Sidebar remains visible during content scrolling
- **Mobile Responsiveness**: Toggle-based navigation for smaller screens
- **Active State Management**: Visual indication of current page
- **Smooth Transitions**: CSS animations for navigation interactions

## Content Organization
Each page follows a consistent structure pattern:

- **Section Headers**: Standardized title and subtitle formatting
- **Card-based Layout**: Experience, projects, and skills presented in card components
- **Timeline Design**: Professional experience displayed chronologically
- **Grid Systems**: Flexible layouts for different content types

# External Dependencies

The portfolio is designed as a self-contained static website with minimal external dependencies:

- **Fonts**: Uses system font stack (Segoe UI, Tahoma, Geneva, Verdana, sans-serif) for consistent cross-platform rendering
- **No External Libraries**: Pure vanilla JavaScript and CSS without frameworks or libraries
- **No Backend Services**: Static hosting compatible (GitHub Pages, Netlify, Vercel)
- **No Database**: All content is embedded directly in HTML files
- **No Third-party APIs**: Self-contained functionality without external service calls

The architecture prioritizes simplicity, performance, and hosting flexibility by avoiding external dependencies while maintaining modern web standards and responsive design principles.