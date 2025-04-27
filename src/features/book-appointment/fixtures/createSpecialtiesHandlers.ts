import { http, HttpResponse } from "msw";

import { baseURL } from "../services/specialty";

export const createSpecialtiesHandlers = () => {
  return [
    http.get(`${baseURL}/specialties`, () => {
      return HttpResponse.json([
        {
          id: "dermatology",
          name: {
            en: "Dermatology",
          },
          description: {
            en: "Skin, hair, and nail treatments.",
          },
          iconUrl: "/icons/dermatology.svg",
        },
        {
          id: "cardiology",
          name: {
            en: "Cardiology",
          },
          description: {
            en: "Heart and blood vessel care.",
          },
          iconUrl: "/icons/cardiology.svg",
        },
        {
          id: "pediatrics",
          name: {
            en: "Pediatrics",
          },
          description: {
            en: "Medical care for infants, children, and adolescents.",
          },
          iconUrl: "/icons/pediatrics.svg",
        },
        {
          id: "orthopedics",
          name: {
            en: "Orthopedics",
          },
          description: {
            en: "Treatment of the musculoskeletal system.",
          },
          iconUrl: "/icons/orthopedics.svg",
        },
        {
          id: "neurology",
          name: {
            en: "Neurology",
          },
          description: {
            en: "Diagnosis and treatment of nervous system disorders.",
          },
          iconUrl: "/icons/neurology.svg",
        },
      ]);
    }),
  ];
};

