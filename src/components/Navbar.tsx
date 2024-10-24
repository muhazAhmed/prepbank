import { navMenuItem } from "@/lib/data";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FaUserCircle } from "react-icons/fa";
import CustomTooltip from "./CustomTooltip";
import { useTheme } from "@/lib/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const handleMenuChange = (item: any) => {
    setSelectedMenu(item?.id);
    navigate(item?.url);
  };

  return (
    <div className="hidden md:flex w-full items-center justify-center z-[999] sticky top-0">
      <div
        className={`${
          theme === "light" ? "bg-slate-200" : "bg-[#282C35]"
        } w-[50%] p-2 flex items-center justify-between rounded-full mt-2 px-5`}
      >
        <h1>logo</h1>
        <div className="flex items-center gap-2">
          {navMenuItem?.map((item: any, index: number) => (
            <div
              className={`flex items-center gap-2 justify-center cursor-pointer p-2 px-3 ${
                selectedMenu === index ? "bg-csgreen rounded-full" : ""
              } ${selectedMenu === index && theme === "light" && "text-white"}`}
              onClick={() => handleMenuChange(item)}
              key={item?.id}
            >
              <i className={item?.icon}></i>
              <p className="font-semibold">{item?.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle className="cursor-pointer hover:text-csgreen" />
          <CustomTooltip title="Profile" position="bottom">
            <span>
              <FaUserCircle
                className="text-2xl cursor-pointer hover:text-csgreen"
                onClick={() => navigate("/user/profile")}
              />
            </span>
          </CustomTooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
