import { GoHome, GoGear } from "react-icons/go";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import { useNavigate } from "react-router-dom";
import { MdInfoOutline, MdOutlinePhone } from "react-icons/md";

const BottomMenu = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <motion.div
      className={`fixed z-[1000] bottom-0 left-0 right-0 ${
        theme === "light"
          ? "bg-white shadow-lg shadow-slate-800"
          : "bg-[#282C35]"
      } shadow-lg py-3 flex justify-around items-center sm:flex md:hidden rounded-t-2xl`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className="flex flex-col items-center"
        onClick={() => navigate("/dashboard")}
      >
        <GoHome className="h-6 w-6" />
        <span className="text-xs">Dashboard</span>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => navigate("/skills")}
      >
        <MdInfoOutline className="h-6 w-6" />
        <span className="text-xs">About</span>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => navigate("/skills")}
      >
        <MdOutlinePhone className="h-6 w-6" />
        <span className="text-xs">Contacts</span>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => navigate("/skills")}
      >
        <GoGear className="h-6 w-6" />
        <span className="text-xs">Settings</span>
      </div>
    </motion.div>
  );
};

export default BottomMenu;
