# Project Overview

This is Eco_Page, a personal portfolio and blog website designed for presentation, showcasing repositories, and maintaining a blog. It is built with a focus on responsiveness and a "Bento" layout structure.

## Key Technologies

The project is built using:
*   **Astro**: The primary web framework for building fast content-focused websites.
*   **React & Solid.js**: Used for interactive UI components where needed, integrated into Astro.
*   **Tailwind CSS**: For utility-first styling, enabling rapid UI development.
*   **Motion**: Likely used for animations and transitions to enhance user experience.
*   **d3**: A JavaScript library for manipulating documents based on data, potentially used for data visualizations.
*   **Embla Carousel & Swiper**: Libraries for creating touch-friendly carousels and sliders.
*   **TypeIt**: For animated typing effects.

## Architecture

The project follows a component-based architecture typical of Astro applications:
*   **`src/pages/`**: Contains Astro pages that serve as entry points for different routes (e.g., `index.astro`, `blog.astro`).
*   **`src/layouts/`**: Defines common layouts for pages, such as `Layout.astro`, which includes meta tags, global styles, and shared components like the `Footer`.
*   **`src/components/`**: Houses reusable UI components (e.g., `Navbar.astro`, `CardMain.astro`, `LanguageSelector.astro`). It also includes subdirectories for specific component types like `cards`, `icons`, `interactive`, and `mainPage`.
*   **`src/i18n/`**: Manages internationalization, providing translations for Spanish (`es.json`) and English (`en.json`).
*   **`src/lib/`**: Contains utility files and constants.

## Internationalization (i18n)

The site supports both Spanish (`es`) and English (`en`) languages, with Spanish being the default locale. The routing is configured not to prefix the default locale in URLs. Translations are handled via JSON files and a utility function (`getI18N`) that merges or selects translations based on the current locale.

## Styling

Styling is primarily managed with Tailwind CSS, which is configured to include custom colors, box shadows, and font families (Satoshi, Cabinet Grotesk). The `@tailwindcss/typography` plugin is also used, likely for styling markdown content. Global styles are defined in `src/layouts/Layout.astro` and include a subtle background texture.

# Building and Running

This project uses `npm` or `pnpm` for package management.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JonaJRSG/Eco_Page.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd Eco_Page
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

## Available Commands

*   **Start the development server:**
    ```bash
    npm run dev
    # or
    pnpm run dev
    ```
    This command starts a local development server, typically accessible at `http://localhost:4321`.

*   **Build for production:**
    ```bash
    npm run build
    # or
    pnpm run build
    ```
    This command compiles the project for deployment, generating static assets in the `dist/` directory. It also runs `astro check` for type checking.

*   **Preview the production build locally:**
    ```bash
    npm run preview
    # or
    pnpm run preview
    ```
    This command serves the production build locally, allowing you to test it before deployment.

*   **Run Astro CLI commands:**
    ```bash
    npm run astro
    # or
    pnpm run astro
    ```
    This provides access to various Astro CLI functionalities.

# Development Conventions

*   **Component-based development**: Features are broken down into smaller, reusable Astro components.
*   **Styling**: Primarily uses Tailwind CSS for consistent and efficient styling.
*   **Internationalization**: All user-facing text should be managed through the i18n system (`src/i18n/`).
*   **Type Checking**: TypeScript is used for type safety, enforced during the build process with `astro check`.
*   **Image Optimization**: Images are stored in the `public/img/` directory, with `og-image.png` used for Open Graph and Twitter card previews.
*   **Font Management**: Custom fonts (Cabinet Grotesk, Satoshi) are defined in `public/fonts/` and configured in `tailwind.config.mjs`.

# Current Status

The project is currently in active development.