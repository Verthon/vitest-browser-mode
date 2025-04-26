import type { ComponentPropsWithoutRef } from "react";

type GridProps = ComponentPropsWithoutRef<"div"> & {
	cols?: string;
};

export const Grid = ({ cols = "1", className = "", ...rest }: GridProps) => (
	<div className={`grid grid-cols-${cols} gap-4 ${className}`} {...rest} />
);
