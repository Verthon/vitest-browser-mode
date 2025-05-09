import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";

import { SpecialtyStep } from "./SpecialtyStep";
import { createTestWrapper } from "@/testSetup";
import { overrideEndpoint } from "../fixtures/overrideEndpoint";
import { baseURL } from "../services/specialty";

describe("SpecialtyStep", () => {
	it("renders error state with retry action of failed request for specialties", async () => {
		await overrideEndpoint({ url: `${baseURL}/specialties`, status: 500 });
		render(<SpecialtyStep onNext={() => null} />, { wrapper: createTestWrapper() });

		const errorAlert = page.getByRole('alert');

		await expect.element(errorAlert).toBeVisible();
	});
});
