import { Card } from "@/design-system/card/Card";
import { SkeletonBox } from "@/design-system/skeletonBox/SkeletonBox";

export const SkeletonCard = () => (
	<Card className="border-gray-200">
		<SkeletonBox className="h-4 w-2/3 mb-2" rounded={false} />
		<SkeletonBox className="h-3 w-1/2" rounded={false} />
	</Card>
);
