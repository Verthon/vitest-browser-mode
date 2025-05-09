import { Card } from "@/design-system/card/Card";
import { useAvailability } from "../hooks/useAvailability";
import { useTimeFramePicker } from "../hooks/useTimeFramePicker";
import { TimeFrameLoadingState } from "./TimeFrameLoadingState";
import { TimeFrameErrorState } from "./TimeFrameErrorState";

type TimeFrameStepProps = {
	doctorId: string;
	onNext(data: {
		frame: "morning" | "afternoon" | "evening";
		date: string;
	}): void;
};

const frames: ("morning" | "afternoon" | "evening")[] = [
	"morning",
	"afternoon",
	"evening",
];

export const TimeFrameStep = ({ doctorId, onNext }: TimeFrameStepProps) => {
	const {
		data: days,
		isPending,
		isError,
		isSuccess,
		refetch,
	} = useAvailability(doctorId);
	const { state, dispatch, canNext } = useTimeFramePicker();

	return (
		<section aria-labelledby="when-heading" className="space-y-4">
			<h1 id="when-heading" className="text-2xl font-bold text-center">
				Choose a time that works for you
			</h1>
			<p className="text-center text-sm text-muted-foreground">
				First select part of day, then pick the exact day.
			</p>

			<div className="flex justify-center gap-2">
				{frames.map((f) => (
					<button
						key={f}
						onClick={() => dispatch({ type: "setFrame", frame: f })}
						className={`px-4 py-2 rounded-full border transition
              ${
								state.frame === f ? "bg-primary-500 text-black" : "bg-gray-100"
							}`}
					>
						{f}
					</button>
				))}
			</div>

			{isPending && <TimeFrameLoadingState />}
			{isError && <TimeFrameErrorState retry={refetch} />}

			{/* date strip */}
			{isSuccess && state.frame && (
				<div className="flex gap-2 overflow-x-auto px-1 pb-2" role="list">
					{days?.map((d) => {
						const enabled = d.frames[state.frame!];
						return (
							<Card
								key={d.date}
								onClick={() =>
									enabled && dispatch({ type: "setDate", date: d.date })
								}
								className={`shrink-0 w-14 h-10 flex items-center justify-center text-sm
                  ${
										state.date === d.date
											? "bg-primary-500 text-white"
											: "bg-white"
									}
                  ${
										!enabled
											? "opacity-30 cursor-not-allowed"
											: "cursor-pointer"
									}`}
							>
								{new Date(d.date).getDate()}
							</Card>
						);
					})}
				</div>
			)}

			<div className="flex justify-end">
				<button
					disabled={!canNext}
					onClick={() => onNext({ frame: state.frame!, date: state.date! })}
					className="px-4 py-2 rounded-md bg-primary-500 text-white disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</section>
	);
};
