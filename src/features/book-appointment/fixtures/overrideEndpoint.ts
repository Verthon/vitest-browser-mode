import { worker } from "@/mockServer";
import { http, HttpResponse, delay as mswDelay } from "msw";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export type OverrideOpts<T = unknown> = {
	/** HTTP verb, defaults to 'get' */
	method?: HttpMethod;
	/** Absolute URL */
	url: string;
	/** Response status (default 200) */
	status?: number;
	/** JSON body (optional) */
	body?: T;
	/** Artificial latency in ms (default 0) */
	delay?: number;
};

/**
 * Override any endpoint for the current test (MSW v2 style).
 * Auto‑reset happens via browserWorker.resetHandlers() in vitest.browser.setup.
 */
export const overrideEndpoint = async <T = unknown>({
	method = "get",
	url,
	status = 200,
	body,
	delay = 0,
}: OverrideOpts<T>) => {
	const httpMethod = http[method];

	const handler = httpMethod(url, async () => {
		const res =
			body !== undefined
				? HttpResponse.json(body, { status })
				: HttpResponse.text("", { status });

		if (delay) {
			await mswDelay(delay);
		}

		return res;
	});

	worker.use(handler);
	return handler;
};
