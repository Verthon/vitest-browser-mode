import { Card } from "@/design-system/card/Card";
import { useSpecialties } from "../hooks/useSpecialties";
import { useSpecialtyPicker } from "../hooks/useSpecialtyPicker";

type SpecialtyStepProps = { onNext(selected: string): void };

export const SpecialtyStep = ({ onNext }: SpecialtyStepProps) => {
	const { data: specialties, isPending, isError } = useSpecialties();
	const { canNext, dispatch, state, keyHandler } = useSpecialtyPicker();

	if (isPending) return <p className="text-center">Loading…</p>;
	if (isError)
		return (
			<p className="text-red-600 text-center">Failed to load specialities.</p>
		);

	return (
		<section
			aria-labelledby="speciality-heading"
			className="w-full max-w-3xl mx-auto px-4"
		>
			<h1
				id="speciality-heading"
				className="text-2xl font-bold mb-6 text-center"
			>
				What type of care do you need?
			</h1>

			<div
				role="radiogroup"
				className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
			>
				{specialties?.map((spec) => (
					<Card
						key={spec.id}
						role="radio"
						aria-checked={state.selectedId === spec.id}
						tabIndex={0}
						onClick={() => dispatch({ type: "select", id: spec.id })}
						onKeyDown={keyHandler(spec.id)}
						className={`cursor-pointer transition border-2 ${
							state.selectedId === spec.id
								? "border-primary-500 ring-2 ring-primary-500"
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
				))}
			</div>

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
					className="px-4 py-2 rounded-md bg-primary-500 text-white disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</section>
	);
};
