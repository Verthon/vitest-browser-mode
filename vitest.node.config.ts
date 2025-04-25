import { defineConfig } from "vitest/config";
export default defineConfig({
	test: {
		include: ["src/**/*.(node).spec.[jt]s?(x)"],
		environment: "node",
	},
});
