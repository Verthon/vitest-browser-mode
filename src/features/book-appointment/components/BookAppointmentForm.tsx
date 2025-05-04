import { ChooseDoctorStep } from "../doctor/components/ChooseDoctorStep";
import { SpecialtyStep } from "./SpecialtyStep";

export const BookAppointmentForm = () => {
	const handleFirstStepSubmit = (specialty: string) => {
		console.log("next", specialty);
	};

	return (
		<div>
			<SpecialtyStep onNext={handleFirstStepSubmit} />
			<ChooseDoctorStep />
		</div>
	);
};
