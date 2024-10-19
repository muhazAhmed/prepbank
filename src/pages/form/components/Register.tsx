import {
  FaFingerprint,
  FaRegEye,
  FaRegEyeSlash,
  FaUserAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import React, { useState } from "react";
import { motion } from "framer-motion";
const PasswordHint = React.lazy(() => import("./PasswordHint"));
import { cookieItems, handleInputChange } from "@/lib/common";
import { RegisterFormProp } from "@/lib/prop";
import { formValidation } from "./formValidation";
import { PostMethodAPI } from "@/lib/apiMethods";
import { ServerVariables } from "@/lib/serverVariables";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Register = () => {
  const [cookies, setCookies] = useCookies(cookieItems);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const [showPasswordHint, setShowPasswordHint] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<RegisterFormProp>({
    name: "",
    email: "",
    password: "",
    phone: Number(),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open);
  };

  const handleRegister = async () => {
    const isValid = formValidation(payload, setShowPasswordHint);
    if (isValid) {
      const res = await PostMethodAPI({
        variable: ServerVariables?.user?.registerUser,
        payload,
        loading: setLoading,
      });
      if (res?.data) {
        setCookies("userInfo", res.data?.newUser, { path: "/" });
        setCookies("userToken", res.data?.token, { path: "/" });
        return cookies && navigate("/dashboard");
      }
    }
    return;
  };

  return (
    <div className="flex w-full flex-col items-center gap-5">
      {isModalOpen && (
        <PasswordHint
          open={isModalOpen}
          onOpenChange={handleOpenChange}
          password={payload?.password}
        />
      )}
      <div className="flex flex-col w-full items-start">
        <h4 className="text-xl font-semibold">Create an Account 🚀</h4>
        <p className="text-[13px] text-gray-400">
          Join the pursuit of intellectual excellence!
        </p>
      </div>

      <div className="flex w-full flex-col gap-3">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 border-2 p-2 w-96 rounded-full focus:border-csdarkgreen"
        >
          <FaUserAlt />
          <input
            placeholder="Full Name"
            type="text"
            className="bg-transparent border-0 outline-none w-full"
            name="name"
            value={payload?.name || ""}
            onChange={(e) => handleInputChange(e, setPayload)}
          />
        </motion.div>

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
          className="flex items-center gap-2 border-2 p-2 w-96 rounded-full focus:border-csdarkgreen"
        >
          <FaPhone />
          <input
            placeholder="Phone Number (optional)"
            type="number"
            className="bg-transparent border-0 outline-none w-full"
            name="phone"
            value={payload?.phone || ""}
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
            className="bg-transparent border-0 outline-none w-full relative"
            name="password"
            value={payload?.password || ""}
            onChange={(e) => handleInputChange(e, setPayload)}
          />
          {showPasswordHint && (
            <FaInfoCircle
              className="cursor-pointer text-red-400 text-sm absolute right-11 animate-pulse"
              title="Hint"
              onClick={() => setIsModalOpen(true)}
            />
          )}
          {showPassword ? (
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
      </div>

      <Button
        whileHover={{ scale: 1.03 }}
        className="bg-csdarkgreen hover:bg-csgreen p-2 w-full flex gap-1 items-center justify-center rounded-full mt-2 text-lg font-semibold text-white"
        onClick={handleRegister}
        label="Register"
        loading={loading}
      />
    </div>
  );
};

export default Register;
