import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";

const site = "https://ecojrsg.dev";

// https://astro.build/config
export default defineConfig({
  site: site,

  integrations: [
    tailwind(),
    solidJs({
      include: ["src/components/**/*.tsx"],
      exclude: ["src/components/ui/**/*.tsx", "src/components/PixelCanvasDemo.tsx"]
    }),
    mdx(),
    react({
      include: ["src/components/ui/**/*.tsx", "src/components/PixelCanvasDemo.tsx"]
    })
  ],

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
