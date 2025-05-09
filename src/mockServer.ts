import { setupWorker } from "msw/browser";

import { createSpecialtiesHandlers } from "./features/book-appointment/fixtures/createSpecialtiesHandlers";
import { createDoctorsHandler } from "./features/book-appointment/doctor/fixtures/createDoctorsHandler";
import { createAvailabilityHandler } from "./features/book-appointment/timeFrame/fixtures/createAvailabilityHandler";

const handlers = [
	...createSpecialtiesHandlers(),
	...createDoctorsHandler(),
	...createAvailabilityHandler(),
];

export const worker = setupWorker(...handlers);
