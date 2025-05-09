import { useQuery } from "@tanstack/react-query";

import { createAvailabilityService } from "../services/timeFrame";

const service = createAvailabilityService();

export const useAvailability = (doctorId: string) => {
	const { data, isPending, isError, isSuccess, refetch } = useQuery({
		queryKey: ["availability", doctorId],
		queryFn: service.getAvailability(doctorId),
		enabled: !!doctorId,
	});

	return { data, isPending, isSuccess, isError, refetch };
};
