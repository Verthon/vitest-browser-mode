export type DayAvailability = {
	date: string;
	frames: {
		morning: boolean;
		afternoon: boolean;
		evening: boolean;
	};
};
