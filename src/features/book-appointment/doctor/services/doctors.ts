import { ofetch } from "ofetch";

import { Doctor } from "../model/Doctor";

export const baseURL = `${import.meta.env.VITE_MAIN_API_URL}/api`;

export const createDoctorsService = (
	customFetch = ofetch.create({ baseURL })
) => {
	return {
		getDoctorsBySpecialty: (specialtyId: string) => () =>
			customFetch<Doctor>(`/doctors?specialtyId=${specialtyId}`),
	};
};
