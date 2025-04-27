import { describe, it } from "vitest";
import { render } from "vitest-browser-react";

import { BookAppointmentPage } from "./BookAppointmentPage";

describe('BookAppointmentPage', () => {
  it('s', () => {
    const { getByText } = render(<BookAppointmentPage />);

    const card = getByText(/cardiology/i);
  })
})