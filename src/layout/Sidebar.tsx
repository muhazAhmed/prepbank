import { sidebarData } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoGear } from "react-icons/go";
import { useCookieManager } from "@/custom-hooks/useCookieManager";

const Sidebar = () => {
  const { getCookie } = useCookieManager();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const handleItemClick = (itemId: number, url: string) => {
    setSelectedItem(itemId);
    navigate(url);
  };

  const subMenuItems = [
    {
      id: 10,
      icon: <CgProfile className="text-2xl" />,
      label: getCookie("userInfo")?.name || "User",
      url: "/user/profile",
    },
    {
      id: 11,
      icon: <GoGear className="text-2xl" />,
      label: "Settings",
      url: "/settings",
    },
  ];

  const allSidebarItems = [...sidebarData, ...subMenuItems];

  useEffect(() => {
    const matchedItem = allSidebarItems.find(
      (item) => item?.url === location.pathname
    );
    if (matchedItem) {
      setSelectedItem(matchedItem?.id);
    }
  }, [location.pathname]);

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
            key={item.id}
            className={`flex items-center p-2 hover:bg-csdarkgreen ${
              selectedItem === item.id && "bg-csdarkgreen"
            } transition duration-200 cursor-pointer rounded-full ${
              !isCollapsed && "pl-3"
            }`}
            onClick={() => handleItemClick(item.id, item.url)}
          >
            {item.icon}
            {!isCollapsed && <span className="ml-4 text-sm">{item.label}</span>}
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
        {subMenuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-2 transition duration-200 cursor-pointer rounded-full ${
              isCollapsed ? "" : "pl-3"
            } ${
              selectedItem === item.id
                ? "bg-csdarkgreen"
                : "hover:bg-csdarkgreen hover:text-white"
            } ${
              item.id === 10 && selectedItem !== 10
                ? "text-csgreen"
                : "text-white"
            }`}
            onClick={() => handleItemClick(item.id, item.url)}
          >
            {item.icon}
            {!isCollapsed && <span className="ml-4">{item.label}</span>}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Sidebar;
