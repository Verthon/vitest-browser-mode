import { render } from "vitest-browser-react";
import { expect, it } from "vitest";
import App from "./App";

it("increments the counter in a real browser", async () => {
	const { getByRole, getByText } = render(<App />); // RTL-style query but it’s a Locator

	const button = getByRole("button", { name: /increment/i });

	await button.click();

	const result = getByText("1");

	await expect.element(result).toBeVisible();
});
