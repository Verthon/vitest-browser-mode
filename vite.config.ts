import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import oxlintPlugin from "vite-plugin-oxlint";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
		oxlintPlugin(),
		tailwindcss(),
	],

	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},

	optimizeDeps: {
		include: ["react/jsx-dev-runtime", "vitest-browser-react", "react"],
	},
});
