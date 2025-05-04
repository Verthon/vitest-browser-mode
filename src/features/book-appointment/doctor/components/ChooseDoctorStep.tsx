import { useDoctorsBySpecialty } from "../hooks/useDoctorsBySpecialty";

export const ChooseDoctorStep = () => {
  const {} = useDoctorsBySpecialty('123');
	return <div>Choose doctor</div>;
};
