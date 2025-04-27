type SpecialtyResponse = {
	id: string;
	name: {
		en: string;
	};
	description?: {
		en: string;
	};
	iconUrl?: string;
};

export type SpecialtyCollectionResponse = SpecialtyResponse[];
