import { FC } from "react";
import { AuthGuard } from "../lib/auth";
import Sidebar from "./Sidebar";
import { layoutProps } from "../lib/prop";

const AuthLayout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <AuthGuard>
        <div className="auth-content w-screen h-screen flex">
          <Sidebar />
          <div className="main-content p-2 w-full overflow-auto">{children}</div>
        </div>
      </AuthGuard>
    </>
  );
};

export default AuthLayout;
