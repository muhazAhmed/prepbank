import CustomTooltip from "@/components/CustomTooltip";
import { rectWithNewTab, textEllipse, ThemeTernary } from "@/lib/common";
import { profileBasicInfoItems } from "@/lib/data";
import { MdOutlineEdit } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";

const IntroSection = () => {
  const userData = {};
  const handleRedirection = (item: string) => {
    return rectWithNewTab(item);
  };

  return (
    <div
      className={`flex flex-col ${ThemeTernary({
        forDark: "bg-gray-800",
        forLight: "bg-gray-200 shadow-lg shadow-slate-400",
      })} rounded-2xl w-[20vw] p-3`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-sm">Basic Info</h1>
        <CustomTooltip title="Edit" position="left">
          <span>
            <MdOutlineEdit className="text-lg cursor-pointer" />
          </span>
        </CustomTooltip>
      </div>

      <div className="border border-gray-500 my-3"></div>
      <div className="flex w-full flex-col gap-3">
        {profileBasicInfoItems(userData).map((item) => (
          <div className="flex items-center gap-2 relative" key={item?.id}>
            {item?.icon}
            <h5 className="text-sm pl-3"> {textEllipse(item?.label, 30)}</h5>
            {item?.isLink && item?.label !== "-" && (
              <CustomTooltip title="Open" position="top">
                <span
                  className="absolute right-0 cursor-pointer text-gray-500"
                  onClick={() => handleRedirection(item?.label)}
                >
                  <HiExternalLink />
                </span>
              </CustomTooltip>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroSection;
