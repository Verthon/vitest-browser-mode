import { StepErrorState } from "@/features/book-appointment/components/StepErrorState";

export const TimeFrameErrorState = ({ retry }: { retry: () => void }) => (
	<StepErrorState
		mainErrorMessage="We couldn’t load availability."
		retry={retry}
	/>
);
