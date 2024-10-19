import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { cookieItems, handleInputChange } from "@/lib/common";
import { PostMethodAPI } from "@/lib/apiMethods";
import { ServerVariables } from "@/lib/serverVariables";
import Button from "@/components/Button";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cookies, setCookies] = useCookies(cookieItems);
  const navigate = useNavigate();
  const [payload, setPayload] = useState<any>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const res = await PostMethodAPI({
      variable: ServerVariables?.user?.loginUser,
      payload,
      loading: setLoading,
    });
    if (res?.data) {
      setCookies("userInfo", res.data?.userData, { path: "/" });
      setCookies("userToken", res.data?.token, { path: "/" });
      cookies && navigate("/dashboard");
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <div className="flex flex-col w-full items-start">
        <h4 className="text-xl font-semibold">Welcome Back👋</h4>
        <p className="text-[13px] text-gray-400">
          Forge your path to wisdom with curated insights!
        </p>
      </div>
      <div className="flex w-full flex-col gap-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 border-2 p-2 w-96 rounded-full focus:border-csdarkgreen"
        >
          <MdAlternateEmail />
          <input
            placeholder="Email Address"
            type="email"
            className="bg-transparent border-0 outline-none w-full"
            name="email"
            value={payload?.email || ""}
            onChange={(e) => handleInputChange(e, setPayload)}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex gap-2 border-2 p-2 w-96 rounded-full relative items-center"
        >
          <FaFingerprint />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent border-0 outline-none w-full"
            name="password"
            value={payload?.password || ""}
            onChange={(e) => handleInputChange(e, setPayload)}
          />
          {showPassword === true ? (
            <FaRegEyeSlash
              onClick={handleShowPassword}
              className="cursor-pointer absolute right-5 text-md"
            />
          ) : (
            <FaRegEye
              onClick={handleShowPassword}
              className="cursor-pointer absolute right-5 text-md"
            />
          )}
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          className="text-red-500 text-sm w-32 text-start pl-1 hover:underline"
        >
          Forgot password?
        </motion.button>
      </div>
      <Button
        whileHover={{ scale: 1.03 }}
        className="bg-csdarkgreen hover:bg-csgreen p-2 w-full flex gap-1 items-center justify-center rounded-full mt-2 text-lg font-semibold text-white"
        onClick={handleLogin}
        label="Login"
        Icon={<IoMdLogIn className="text-lg font-semibold" />}
        loading={loading}
      />
    </div>
  );
};

export default Login;
