import { sidebarData } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoGear } from "react-icons/go";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    return setIsCollapsed((prev) => !prev);
  };
  const toggleSelectedItem = (item: any) => {
    setSelectedItem(item?.id);
    return navigate(item?.url);
  };
  return (
    <div
      className={`flex flex-col h-full bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-56"
      } hidden md:flex`}
    >
      <span className="flex items-center justify-start p-4 text-2xl hover:text-csdarkgreen">
        {isCollapsed ? (
          <IoIosArrowDropright
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <IoIosArrowDropleft
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
      </span>
      <motion.div
        className={`flex flex-col flex-grow gap-1 ${
          isCollapsed && "items-center"
        }`}
        initial={{ width: isCollapsed ? "60px" : "95%" }}
        animate={{ width: isCollapsed ? "60px" : "95%" }}
        transition={{ duration: 0.3 }}
      >
        {sidebarData.map((item) => (
          <div
            key={item?.id}
            className={`flex items-center p-2 hover:bg-csdarkgreen ${
              selectedItem === item?.id && "bg-csdarkgreen"
            } transition duration-200 cursor-pointer rounded-full ${
              !isCollapsed && "pl-3"
            }`}
            onClick={() => {
              toggleSelectedItem(item);
            }}
          >
            {item?.icon}
            {!isCollapsed && <span className="ml-4">{item?.label}</span>}
          </div>
        ))}
      </motion.div>
      <motion.div
        className={`flex flex-col flex-grow justify-end gap-1 pb-4 ${
          isCollapsed && "items-center"
        }`}
        initial={{ width: isCollapsed ? "60px" : "95%" }}
        animate={{ width: isCollapsed ? "60px" : "95%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="border-t-2 border-gray-400 rounded-full p-2"></div>
        <div
          className={`flex items-center p-2 hover:bg-csdarkgreen transition duration-200 cursor-pointer rounded-full ${
            !isCollapsed && "pl-3"
          }${selectedItem === 10 && "bg-csdarkgreen"}`}
          onClick={() => {
            navigate("/user/profile");
            toggleSelectedItem(10);
          }}
        >
          <CgProfile className="text-2xl" />
          {!isCollapsed && <span className="ml-4">Muhaz</span>}
        </div>
        <div
          className={`flex items-center p-2 hover:bg-csdarkgreen transition duration-200 cursor-pointer rounded-full ${
            !isCollapsed && "pl-3"
          }${selectedItem === 11 && "bg-csdarkgreen"}`}
          onClick={() => {
            navigate("/settings");
            toggleSelectedItem(11);
          }}
        >
          <GoGear className="text-2xl" />
          {!isCollapsed && <span className="ml-4">Settings</span>}
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
