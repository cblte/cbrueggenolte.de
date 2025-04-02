// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".loca.lt", ".zrok.io"],
    },
  },
  trailingSlash: "always",
  site: "https://cbrueggenolte.de",
});
