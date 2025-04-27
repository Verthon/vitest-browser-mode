import { ofetch } from "ofetch";
import { SpecialtyCollectionResponse } from "../model/Speciality";

export const baseURL = `${import.meta.env.VITE_MAIN_API_URL}/api`;

export const createSpecialtyService = (
	customFetch = ofetch.create({ baseURL })
) => {
	return {
		getSpecialties: () => () => customFetch<SpecialtyCollectionResponse>("/specialties"),
	};
};
