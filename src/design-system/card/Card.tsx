import { Box } from "@/design-system/box/Box";

export const Card = ({
	className = "",
	...rest
}: Parameters<typeof Box>[0]) => (
	<Box
		className={`rounded-xl border bg-white shadow-sm p-6 ${className}`}
		{...rest}
	/>
);
