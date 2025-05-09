import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "@vitest/browser/context";
import { createTestRouterHelper, createTestWrapper } from "@/testSetup";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "@/bootstrap";
import { BookAppointmentPage } from "./BookAppointmentPage";

describe("BookAppointmentPage", () => {
	it("renders the choose specialization (first step) then proceeds with appointment creation", async () => {
		const { navigateTo } = createTestRouterHelper();

		await navigateTo('/book-appointment', { search: { step: 1 } });

		render(<RouterProvider router={router} defaultComponent={BookAppointmentPage} />, {
			wrapper: createTestWrapper(),
		});

		const cardiologyCard = page.getByText(/cardiology/i);
		await expect.element(cardiologyCard).toBeVisible();
	});
});
