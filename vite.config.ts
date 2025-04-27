import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import oxlintPlugin from "vite-plugin-oxlint";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

export default defineConfig({
	plugins: [
		TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
		react(),
		oxlintPlugin(),
		tailwindcss(),
	],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},

	optimizeDeps: {
		include: ["react/jsx-dev-runtime", "vitest-browser-react", "react"],
	},
});
