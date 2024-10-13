import {
  FaFingerprint,
  FaRegEye,
  FaRegEyeSlash,
  FaUserAlt,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex w-full flex-col items-center gap-5">
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
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 border-2 p-2 w-96 rounded-full focus:border-csdarkgreen"
        >
          <FaPhone />
          <input
            placeholder="Phone Number"
            type="tel"
            className="bg-transparent border-0 outline-none w-full"
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
          />
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

      <motion.button
        whileHover={{ scale: 1.03 }}
        className="bg-csdarkgreen hover:bg-csgreen p-2 w-full flex gap-1 items-center justify-center rounded-full mt-2 text-lg font-semibold text-white"
      >
        Register
      </motion.button>
    </div>
  );
};

export default Register;
