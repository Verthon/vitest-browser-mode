import { beforeAll, afterEach } from "vitest";

import { worker } from "./src/mockServer";

beforeAll(async () => {
	await worker.start({
		onUnhandledRequest: "error",
    quiet: true,
	});
});

afterEach(() => worker.resetHandlers());
