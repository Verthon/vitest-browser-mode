import { Box } from "@/design-system/box/Box";

type Props = {
	className?: string;
	rounded?: boolean;
};

export const SkeletonBox = ({ className = "", rounded = true }: Props) => (
	<Box
		className={`animate-pulse bg-gray-200 ${
			rounded ? "rounded-xl" : ""
		} ${className}`}
	/>
);
