import { SpecialtyStep } from "./SpecialtyStep";

export const BookAppointmentForm = () => {
	const handleNext = () => {
		console.log("next");
	};

	return (
		<div>
			<SpecialtyStep onNext={handleNext} />
		</div>
	);
};
