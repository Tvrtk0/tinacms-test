import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tvrtk0.github.io",
  base: "tinacms-test",
  integrations: [mdx(), sitemap()],
});
