import { StepErrorState } from "@/features/book-appointment/components/StepErrorState";

export const DoctorErrorState = ({ retry }: { retry: () => void }) => (
	<StepErrorState
		mainErrorMessage="We couldn’t load doctors for this specialty."
		retry={retry}
	/>
);
