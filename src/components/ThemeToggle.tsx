import { ThemeProp } from "@/lib/prop";
import { useTheme } from "@/lib/ThemeContext";
import { FC } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import CustomTooltip from "./CustomTooltip";

export const ThemeToggle: FC<ThemeProp> = ({ className }) => {
  const { theme, changeTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  const colorTheme = theme === "dark" ? "light" : "dark";

  return (
    <div className="rounded-full p-1 border-2 w-[fit-content] cursor-pointer">
      {colorTheme === "light" ? (
        <CustomTooltip title="Light">
          <IoSunnyOutline onClick={toggleTheme} className={className} />
        </CustomTooltip>
      ) : (
        <CustomTooltip title="Dark">
          <FaRegMoon onClick={toggleTheme} className={className} />
        </CustomTooltip>
      )}
    </div>
  );
};
