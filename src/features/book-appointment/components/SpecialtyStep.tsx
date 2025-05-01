import { Radio } from "@base-ui-components/react/radio";
import { RadioGroup } from "@base-ui-components/react/radio-group";

import { Card } from "@/design-system/card/Card";
import { useSpecialties } from "../hooks/useSpecialties";
import { useSpecialtyPicker } from "../hooks/useSpecialtyPicker";
import { StepErrorState } from "./StepErrorState";

type SpecialtyStepProps = { onNext(selected: string): void };

export const SpecialtyStep = ({ onNext }: SpecialtyStepProps) => {
	const { data: specialties, isPending, isError, refetch } = useSpecialties();
	const { canNext, dispatch, state } = useSpecialtyPicker();

	if (isPending) return <p className="text-center">Loading…</p>;
	if (isError) return <StepErrorState mainErrorMessage="We couldn’t load specialties." retry={refetch} />;

	return (
		<section
			aria-labelledby="specialty-heading"
			className="w-full max-w-3xl mx-auto px-4"
		>
			<h1
				id="specialty-heading"
				className="text-2xl font-bold mb-6 text-center"
			>
				What type of care do you need?
			</h1>

			<RadioGroup
				aria-labelledby="specialty-heading"
				value={state.selectedId ?? undefined}
				onValueChange={(id) => dispatch({ type: "select", id: id as string })}
				className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
			>
				{specialties?.map((spec) => (
					<label key={spec.id} className="cursor-pointer">
						<Radio.Root value={spec.id} className="sr-only">
							<Radio.Indicator /> {/* hidden, but required */}
						</Radio.Root>

						<Card
							className={`transition border-2 peer-focus:ring-2 ${
								state.selectedId === spec.id
									? "border-primary-500 ring-primary-500"
									: "border-transparent hover:border-primary-200"
							}`}
						>
							<p className="font-medium">{spec.name.en}</p>
							{spec.description?.en && (
								<p className="text-sm text-muted-foreground mt-1">
									{spec.description.en}
								</p>
							)}
						</Card>
					</label>
				))}
			</RadioGroup>

			<div className="flex justify-end gap-2">
				<a
					href="/"
					className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
				>
					Back to home
				</a>

				<button
					disabled={!canNext}
					onClick={() => onNext(state.selectedId!)}
					className="px-4 py-2 rounded-md bg-primary-500 disabled:opacity-50 cursor-pointer"
				>
					Next
				</button>
			</div>
		</section>
	);
};
