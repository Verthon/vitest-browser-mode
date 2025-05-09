import { ofetch } from "ofetch";
import { DayAvailability } from "../model/Availability";

export const baseURL = `${import.meta.env.VITE_MAIN_API_URL}/api`;

export const createAvailabilityService = (
	fetcher = ofetch.create({ baseURL })
) => ({
	getAvailability: (doctorId: string) => () =>
		fetcher<DayAvailability[]>(`/availability?doctorId=${doctorId}&days=14`),
});
