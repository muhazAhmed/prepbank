import { MdVerified } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import CustomTooltip from "@/components/CustomTooltip";
import { ThemeTernary } from "@/lib/common";

const BannerImage = () => {
  return (
    <div
      className={`flex flex-col ${ThemeTernary({
        forDark: "bg-gray-800",
        forLight: "bg-gray-200 shadow-lg shadow-slate-400",
      })} rounded-2xl`}
    >
      <div className="w-full relative">
        <img
          src="https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg"
          className="rounded-t-2xl h-40 w-[60vw]"
          loading="lazy"
        />
        <CustomTooltip title="Update" position="left">
          <span className="absolute top-4 right-5 cursor-pointer bg-gray-600 p-2 rounded-full text-white">
            <FaPencilAlt />
          </span>
        </CustomTooltip>
      </div>

      <div className="relative pt-8 pb-5 pl-10">
        <div className="flex flex-col justify-center h-full gap-1">
          <img
            src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
            alt="profile-img"
            className="w-[6vw] rounded-full absolute top-[-50px]"
          />
          <h1 className="mt-5 text-2xl font-bold flex items-center gap-1">
            Muhaz Ahmed <MdVerified className="text-blue-500 text-[18px]" />
          </h1>
          <p className="text-sm text-gray-400">Software Eng.</p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default BannerImage;
