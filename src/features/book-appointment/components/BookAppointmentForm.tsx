import { useSearch, useNavigate } from '@tanstack/react-router'

import { ChooseDoctorStep } from "../doctor/components/ChooseDoctorStep";
import { SpecialtyStep } from "./SpecialtyStep";
import { TimeFrameStep } from "../timeFrame/components/TimeFrameStep";

export const BookAppointmentForm = () => {
	const search = useSearch({ from: '/book-appointment' });
	const navigate = useNavigate({ from: '/book-appointment' });

	const goto = (patch: Partial<typeof search>) =>
		navigate({ search: { ...search, ...patch } });

	const views = {
		1: () => (
			<SpecialtyStep onNext={(id) => goto({ step: 2, specialtyId: id })} />
		),

		2: () => (
			<ChooseDoctorStep
				specialtyId={search.specialtyId!}
				onNext={(id) => goto({ step: 3, doctorId: id })}
			/>
		),

		3: () => (
			<TimeFrameStep doctorId={search.doctorId!} onNext={() => goto({ step: 4 })} />
		),

		4: () => (
			<div>placeholder</div>
		)
	};

	return views[search.step as keyof typeof views]?.() ?? views[1]();
};
