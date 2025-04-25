import { defineConfig } from "vitest/config";
export default defineConfig({
	test: {
		include: [
			"src/**/*.(browser).spec.[jt]s?(x)",
		],
		browser: {
			enabled: true,
			provider: "playwright",
			instances: [{ browser: "chromium" }],
		},
	},
});
