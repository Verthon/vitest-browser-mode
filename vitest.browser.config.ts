import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	optimizeDeps: {
		include: ['react/jsx-dev-runtime']
	},
	test: {
		include: ["src/**/*.(browser).spec.[jt]s?(x)"],
		browser: {
			enabled: true,
			provider: "playwright",
			instances: [{ browser: "chromium" }],
			headless: Boolean(process.env.CI),
		},
		setupFiles: ["./vitest.browser.setup.ts"],
	},
});
