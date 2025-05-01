import { Card } from "@/design-system/card/Card";

type StepErrorStateProps = {
	retry: () => void;
	mainErrorMessage: string;
	recoveryHintMessage?: string;
};

export const StepErrorState = ({
	mainErrorMessage,
	retry,
	recoveryHintMessage = "Check your connection or try again in a moment.",
}: StepErrorStateProps) => {
	return (
		<Card
			role="alert"
			className="border border-red-300 bg-red-50 text-red-800 flex items-start gap-3 p-4 mb-6"
		>
			<svg
				className="w-5 h-5 shrink-0 mt-0.5"
				aria-hidden
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path d="M18 10A8 8 0 11. . ." />
			</svg>

			<div className="flex-1">
				<p className="font-medium">{mainErrorMessage}</p>
				<p className="text-sm">{recoveryHintMessage}</p>
			</div>

			<button
				onClick={retry}
				className="ml-auto px-3 py-1.5 rounded-md bg-primary-500 text-white hover:bg-primary-600 focus:outline-none focus:ring"
			>
				Retry
			</button>
		</Card>
	);
};
