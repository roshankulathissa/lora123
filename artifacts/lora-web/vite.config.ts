import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import { SITE_URL } from "./src/lib/constants";
import { ROUTES } from "./src/lib/routes";

function generateSeoFiles(): Plugin {
  function write() {
    const publicDir = path.resolve(__dirname, "public");

    const urlEntries = ROUTES.filter((r) => r.sitemap)
      .map(
        (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
      )
      .join("\n");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

    const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
    fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
  }

  return {
    name: "generate-seo-files",
    buildStart() {
      write();
    },
  };
}

export default defineConfig({
  plugins: [generateSeoFiles(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: true,
  },
});
