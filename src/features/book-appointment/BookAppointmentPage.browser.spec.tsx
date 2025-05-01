import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";

import { BookAppointmentPage } from "./BookAppointmentPage";
import { withProviders } from "@/testSetup";

describe("BookAppointmentPage", () => {
	it("s", async () => {
		render(<BookAppointmentPage />, { wrapper: withProviders() });

		const cardiologyCard = page.getByText(/cardiology/i);

		await expect.element(cardiologyCard).toBeVisible();
	});
});
