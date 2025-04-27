import { setupWorker } from "msw/browser";

import { createSpecialtiesHandlers } from "./features/book-appointment/fixtures/createSpecialtiesHandlers";

const handlers = [...createSpecialtiesHandlers()];

export const worker = setupWorker(...handlers);
