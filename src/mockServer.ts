import { setupWorker } from "msw/browser";

import { createSpecialtiesHandlers } from "./features/book-appointment/fixtures/createSpecialtiesHandlers";
import { createDoctorsHandler } from "./features/book-appointment/doctor/fixtures/createDoctorsHandler";

const handlers = [...createSpecialtiesHandlers(), ...createDoctorsHandler()];

export const worker = setupWorker(...handlers);
