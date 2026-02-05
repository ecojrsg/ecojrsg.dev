# 🌐 Eco_Page | Dynamic Portfolio & Blog

**A Modern, Multi-purpose Web Platform for Showcasing Work, Sharing Insights, and Connecting with the World.**

![Eco_Page | Blog Portafolio Base](public/img/dev/preview.png)

## Overview

Eco_Page is a personal portfolio and blog website meticulously crafted to serve as a comprehensive online presence. It combines a professional presentation of projects and skills with a dynamic blog for sharing insights and knowledge. Engineered for optimal user experience, Eco_Page features a highly responsive design and an intuitive "Bento" layout structure, ensuring an aesthetically pleasing and accessible interface across all devices. This platform is ideal for developers, designers, or anyone looking to establish a robust and engaging digital footprint.

## Key Features

-   **All-in-One Personal Platform**: A unified digital space combining portfolio, blog, and contact sections.
-   **Responsive & Adaptive Design**: Optimized for seamless viewing and interaction across all devices, from desktops to mobile phones.
-   **Intuitive "Bento" Layout**: Modern and engaging grid-based design for a visually appealing and organized presentation of content.
-   **Showcase Your Work**: Dedicated sections to present projects, repositories, and professional achievements effectively.
-   **Integrated Blogging System**: A robust blog for sharing articles, insights, and updates, enhancing thought leadership.
-   **Static Site Generation (SSG)**: Built with Astro for blazing-fast performance, improved SEO, and enhanced security.
-   **Internationalization (i18n) Support**: Ready for a global audience with built-in multi-language capabilities (Spanish and English).
-   **Component-Based Architecture**: Developed with reusable Astro, React, and Solid.js components for maintainability and scalability.
-   **Utility-First Styling**: Styled with Tailwind CSS for rapid and consistent UI development.
-   **Dynamic & Interactive UI**: Incorporates advanced libraries like Motion, d3, Embla Carousel, Swiper, and TypeIt for engaging animations, data visualizations, and interactive elements.

## Technologies Used

Eco_Page is built using a modern and robust stack, leveraging the strengths of each technology to deliver a high-performance, scalable, and engaging user experience.

-   **Astro**: The primary web framework, enabling fast content-focused websites through static site generation (SSG) and island architecture for selective hydration.
-   **React & Solid.js**: Integrated for developing interactive UI components, providing dynamic and engaging user experiences where full client-side interactivity is beneficial.
-   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs and maintaining a consistent, responsive styling system.
-   **Motion**: Utilized for creating smooth and performant animations and transitions, enhancing the overall user interface and experience.
-   **d3**: A powerful JavaScript library employed for data manipulation and creating dynamic, interactive data visualizations.
-   **Embla Carousel & Swiper**: Libraries used for implementing touch-friendly and highly customizable carousels and sliders for presenting content elegantly.
-   **TypeIt**: Integrated for dynamic and animated typing effects, adding a polished and engaging textual presentation.
-   **TypeScript**: Ensures type safety throughout the codebase, improving code quality, maintainability, and developer experience.
-   **PNPM/NPM**: Used for efficient package management, ensuring consistent dependency resolution and faster installations.

## Architecture Overview

Eco_Page follows a component-based architecture typical of modern Astro applications. The project structure is organized for clarity and maintainability:

-   **`src/pages/`**: Contains Astro pages, serving as entry points for different routes (e.g., `index.astro`, `blog.astro`).
-   **`src/layouts/`**: Defines common layouts for pages, such as `Layout.astro`, which includes meta tags, global styles, and shared components.
-   **`src/components/`**: Houses reusable UI components, categorized into subdirectories like `cards`, `icons`, `interactive`, and `mainPage`.
-   **`src/i18n/`**: Manages internationalization, providing translations for Spanish (`es.json`) and English (`en.json`).
-   **`src/lib/`**: Contains utility files and constants.

## Internationalization (i18n)

The site is built with robust internationalization support, catering to both Spanish (`es`) and English (`en`) audiences, with Spanish set as the default locale. The routing is intelligently configured to avoid prefixing the default locale in URLs for cleaner navigation. Translations are efficiently managed through JSON files (`es.json`, `en.json`) and processed by a dedicated utility function (`getI18N`) that merges or selects translations based on the active locale.

## Styling & Design

Styling for Eco_Page is primarily handled with **Tailwind CSS**, allowing for a utility-first approach to rapid and consistent UI development. The `tailwind.config.mjs` is customized to include specific branding elements such as custom colors, sophisticated box shadows, and unique font families (Satoshi, Cabinet Grotesk). The **`@tailwindcss/typography`** plugin is also integrated to ensure beautifully rendered and readable markdown content. Global styles, including a subtle background texture, are consistently applied via `src/layouts/Layout.astro`, contributing to the project's cohesive and polished aesthetic.

## Setup & Local Development

Follow these steps to get Eco_Page up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js (v18 or higher recommended) and either `npm` or `pnpm` installed on your system.

### Installation

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
    pnpm install
    # or
    npm install
    ```

## Available Commands

Once the dependencies are installed, you can use the following commands to manage your Eco_Page project:

-   **`pnpm run dev` / `npm run dev`**: Starts the local development server. Typically accessible at `http://localhost:4321`. This command offers hot module reloading and a developer-friendly environment.
-   **`pnpm run build` / `npm run build`**: Compiles the project for production deployment. Generates optimized static assets in the `dist/` directory. Includes type checking via `astro check`.
-   **`pnpm run preview` / `npm run preview`**: Serves the production build locally, allowing you to test the compiled site before actual deployment.
-   **`pnpm run astro` / `npm run astro`**: Provides direct access to various Astro CLI functionalities for advanced operations.

## Contributing

We welcome contributions to Eco_Page! If you're interested in improving the project, please feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

(More detailed contributing guidelines will be added here in the future.)

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## References & Acknowledgements

-   [astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio.git): Inspiration for the Bento layout structure.
-   [Wooting](https://wooting.io): Design inspiration.

## Project Status

**In Development**: Eco_Page is currently under active development. New features and improvements are continuously being added.