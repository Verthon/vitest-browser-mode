import { http, HttpResponse } from "msw";
import { addDays, formatISO } from "date-fns";
import { baseURL } from "../services/timeFrame";
import { DayAvailability } from "../model/Availability";

export const createAvailabilityHandler = () => {
	return [
		http.get(`${baseURL}/availability`, ({ request }) => {
			const url = new URL(request.url);
			const days = parseInt(url.searchParams.get("days") || "14", 10);

			const list: DayAvailability[] = Array.from({ length: days }).map(
				(_, i) => ({
					date: formatISO(addDays(new Date(), i), { representation: "date" }),
					frames: {
						morning: Math.random() > 0.2,
						afternoon: Math.random() > 0.3,
						evening: Math.random() > 0.4,
					},
				})
			);

			return HttpResponse.json(list);
		}),
	];
};
