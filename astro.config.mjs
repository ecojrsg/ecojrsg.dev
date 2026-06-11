import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

const site = "https://ecojrsg.dev";

// https://astro.build/config
export default defineConfig({
  site: site,

  integrations: [solidJs(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    fallback: {
      en: "es",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
