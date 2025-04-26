import type { ComponentPropsWithoutRef } from "react";

type BoxProps = ComponentPropsWithoutRef<"div">;

export const Box = ({ className = "", ...rest }: BoxProps) => (
	<div className={` ${className}`} {...rest} />
);
