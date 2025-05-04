import { http, HttpResponse } from "msw";

import { baseURL } from "../services/doctors";
import { Doctor } from "../model/Doctor";

const fakeDoctors: Doctor[] = [
	{
		id: "smith",
		fullName: "Dr. Alice Smith",
		specialtyId: "dermatology",
		yearsExperience: 12,
		rating: 4.8,
		avatarUrl: "/avatars/smith.jpg",
	},
	{
		id: "lee",
		fullName: "Dr. Brian Lee",
		specialtyId: "dermatology",
		yearsExperience: 8,
		rating: 4.6,
		avatarUrl: "/avatars/lee.jpg",
	},
	{
		id: "cooper",
		fullName: "Dr. Carla Cooper",
		specialtyId: "cardiology",
		yearsExperience: 15,
		rating: 4.9,
		avatarUrl: "/avatars/cooper.jpg",
	},
];

export const createDoctorsHandler = () => {
	return [
		http.get(`${baseURL}/doctors`, ({ request }) => {
			const url = new URL(request.url);
			const specialtyId = url.searchParams.get("specialtyId");

			const list = specialtyId
				? fakeDoctors.filter((d) => d.specialtyId === specialtyId)
				: fakeDoctors;

			return HttpResponse.json(list);
		}),
	];
};
