import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

import { overrideEndpoint } from "../../fixtures/overrideEndpoint";
import { baseURL } from "../services/doctors";
import { ChooseDoctorStep } from "./ChooseDoctorStep";
import { createTestWrapper } from "@/testSetup";
import { page } from "@vitest/browser/context";

describe("ChooseDoctorStep", () => {
	it("renders error state with retry action of failed request for doctors", async () => {
		await overrideEndpoint({ url: `${baseURL}/doctors`, status: 500 });
		render(<ChooseDoctorStep specialtyId="123" onNext={() => null} />, {
			wrapper: createTestWrapper(),
		});

		const errorAlert = page.getByRole("alert");

		await expect.element(errorAlert).toBeVisible();
	});
});
