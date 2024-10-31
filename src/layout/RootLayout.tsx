import { layoutProps } from "@/lib/prop";
import { FC } from "react";
import Navbar from "./Navbar";

const RootLayout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
};

export default RootLayout;
