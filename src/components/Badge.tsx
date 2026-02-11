import type { FC, JSX } from "react";
import type { BadgeProps } from "../types/data-types";

const Badge: FC<BadgeProps> = ({ caption }): JSX.Element => (
  <span className="badge">{caption}</span>
);

export default Badge;
