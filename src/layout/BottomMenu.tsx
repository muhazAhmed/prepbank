import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useCookieManager } from "@/custom-hooks/useCookieManager";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { bottomMenuOptions } from "@/lib/data";
import { MoreMenuOption } from "@/lib/prop";

const BottomMenu = () => {
  const { theme } = useTheme();
  const { getCookie } = useCookieManager();
  const navigate = useNavigate();
  const [moreOption, setMoreOption] = useState<boolean>(false);

  const handleMoreOptionClick = () => setMoreOption((prev) => !prev);
  const handleActionButton = (path: string) => {
    navigate(path);
    return setMoreOption(false);
  };

  return (
    <motion.div
      className={`fixed z-[1000] bottom-0 left-0 right-0 ${
        theme === "light"
          ? "bg-white shadow-lg shadow-slate-800"
          : "bg-[#282C35]"
      } shadow-lg py-3 flex flex-col items-center justify-around rounded-t-2xl transition-all duration-300 gap-6 md:hidden`}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex justify-around items-center w-full">
        {bottomMenuOptions.map((option) => {
          if (
            option.type === "main" &&
            (!option.authRequired || getCookie("userToken"))
          ) {
            return (
              <div
                key={option.id}
                className="flex flex-col items-center"
                onClick={() => handleActionButton(option?.url)}
              >
                {option.icon}
                <span className="text-xs mt-1">{option?.label}</span>
              </div>
            );
          }
          if (option.type === "toggle") {
            return (
              <div
                key={option.id}
                className="flex flex-col items-center"
                onClick={handleMoreOptionClick}
              >
                {moreOption ? (
                  <>
                    <IoIosArrowDropdown className="text-2xl text-csdarkgreen" />
                    <span className="text-xs mt-1">Collapse</span>
                  </>
                ) : (
                  <>
                    {option.icon}
                    <span className="text-xs mt-1">{option.label}</span>
                  </>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>

      {moreOption && (
        <motion.div
          className="w-full grid grid-cols-4 gap-4 transition-all duration-700 overflow-hidden"
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: "10rem", opacity: 1 }}
          exit={{ maxHeight: 0, opacity: 0 }}
        >
          {(
            bottomMenuOptions.find(
              (option) => option.type === "more"
            ) as MoreMenuOption
          )?.options.map((moreOptionItem) => (
            <div
              key={moreOptionItem.id}
              className="flex flex-col items-center mb-2"
              onClick={() => handleActionButton(moreOptionItem?.url)}
            >
              {moreOptionItem.icon}
              <span className="text-xs">{moreOptionItem.label}</span>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BottomMenu;
