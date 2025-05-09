import { SkeletonBox } from "@/design-system/skeletonBox/SkeletonBox";

export const TimeFrameLoadingState = () => (
	<div aria-busy="true" className="space-y-4 min-h-[160px]">
		<div className="flex gap-2 justify-center">
			{Array.from({ length: 3 }).map((_, i) => (
				<SkeletonBox key={i} className="h-8 w-20 rounded-full" />
			))}
		</div>
		<div className="flex gap-2 overflow-x-auto px-1">
			{Array.from({ length: 14 }).map((_, i) => (
				<SkeletonBox key={i} className="h-10 w-10 rounded-md shrink-0" />
			))}
		</div>
	</div>
);
