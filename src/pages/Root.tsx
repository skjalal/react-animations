import { type FC, type JSX } from "react";
import { Outlet } from "react-router";

const Root: FC = (): JSX.Element => {
  return <Outlet />;
};

export default Root;
