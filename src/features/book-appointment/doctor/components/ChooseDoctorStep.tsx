import { Radio, RadioGroup } from "@base-ui-components/react";
import { StepErrorState } from "../../components/StepErrorState";
import { useDoctorsBySpecialty } from "../hooks/useDoctorsBySpecialty";
import { DoctorLoadingState } from "./DoctorLoadingState";
import { Card } from "@/design-system/card/Card";

type ChooseDoctorStepProps = {
	specialtyId: string;
	onNext(selected: string): void;
};

export const ChooseDoctorStep = ({
	specialtyId,
	onNext,
}: ChooseDoctorStepProps) => {
	const {
		data: doctors,
		isPending,
		isError,
		isSuccess,
		refetch,
	} = useDoctorsBySpecialty(specialtyId);

	const handleNext = (selected: unknown) => {
		if (typeof selected !== "string") {
			return;
		}
		onNext(selected);
	};

	return (
		<section
			aria-labelledby="doctor-heading"
			className="w-full max-w-3xl mx-auto px-4"
		>
			<h1 id="doctor-heading" className="text-2xl font-bold mb-2 text-center">
				Select your doctor
			</h1>
			<p className="text-center text-sm text-muted-foreground mb-6">
				We’ve filtered doctors who specialise in this area. Choose the one you’d
				like to see.
			</p>

			{isPending && <DoctorLoadingState />}
			{isError && (
				<StepErrorState
					mainErrorMessage="We couldn’t load doctors for this specialty."
					retry={refetch}
				/>
			)}

			{isSuccess && (
				<RadioGroup
					name="doctor"
					aria-labelledby="doctor-heading"
					className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
					onValueChange={handleNext}
				>
					{doctors?.map((doc) => (
						<label key={doc.id} className="cursor-pointer">
							<Radio.Root value={doc.id} className="sr-only peer">
								<Radio.Indicator />
							</Radio.Root>
							<Card
								className="relative flex items-center gap-3 p-4 transition
                         before:absolute before:inset-0 before:rounded-xl before:ring-2
                         before:ring-transparent peer-checked:before:ring-primary-500
                         peer-focus-visible:before:ring-primary-400"
							>
								{doc.avatarUrl ? (
									<img
										src={doc.avatarUrl}
										alt=""
										className="w-12 h-12 rounded-full object-cover"
									/>
								) : (
									<div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
										{doc.fullName[0]}
									</div>
								)}

								<div className="flex-1">
									<p className="font-medium leading-tight">{doc.fullName}</p>
									<p className="text-xs text-muted-foreground">
										{doc.yearsExperience} yrs experience · ★{doc.rating}
									</p>
								</div>
							</Card>
						</label>
					))}
				</RadioGroup>
			)}
		</section>
	);
};
