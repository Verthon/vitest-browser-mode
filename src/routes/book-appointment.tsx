import { createFileRoute } from "@tanstack/react-router";
import * as z from "@zod/mini";

import { BookAppointmentPage } from "@/features/book-appointment/BookAppointmentPage";

export const Route = createFileRoute("/book-appointment")({
	validateSearch: z.object({
		step: z.number().check(z.minimum(1), z.maximum(5)),
		specialtyId: z.optional(z.string()),
		doctorId: z.optional(z.string()),
	}),
	component: BookAppointmentPage,
});
