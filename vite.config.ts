import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

const prerenderRoutes = [
  "/",
  "/rooms",
  "/explore",
  "/why-stay",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" &&
      prerender({
        routes: prerenderRoutes,
        renderer: "@prerenderer/renderer-jsdom",
        rendererOptions: {
          renderAfterDocumentEvent: "render-event",
          maxConcurrentRoutes: 1,
        },
        postProcess(rendered: { route: string; html: string }) {
          rendered.html = rendered.html.replace(
            /<html(.*?)>/i,
            '<html$1 data-prerendered="true">',
          );
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
