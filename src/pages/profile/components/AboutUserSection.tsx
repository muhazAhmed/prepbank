import { ThemeTernary } from "@/lib/common";

const AboutUserSection = () => {
  return (
    <div
      className={`flex items-center justify-around px-4 ${ThemeTernary({
        forDark: "bg-gray-800",
        forLight: "bg-gray-200 shadow-lg shadow-slate-400",
      })} rounded-2xl w-[80vw] p-2`}
    >
      <div
        className={`flex flex-col gap-2 items-center cursor-pointer p-2 px-6 ${ThemeTernary(
          {
            forDark: "hover:bg-gray-700",
            forLight: "hover:bg-gray-300",
          }
        )} rounded-xl`}
      >
        <h2 className="text-2xl font-bold">20</h2>
        <h5
          className={`${ThemeTernary({
            forDark: "text-gray-400",
            forLight: "text-gray-500",
          })}`}
        >
          Total Posts
        </h5>
      </div>
      <div
        className={`flex flex-col gap-2 items-center cursor-pointer p-2 px-6 ${ThemeTernary(
          {
            forDark: "hover:bg-gray-700",
            forLight: "hover:bg-gray-300",
          }
        )} rounded-xl`}
      >
        <h2 className="text-2xl font-bold">1355</h2>
        <h5
          className={`${ThemeTernary({
            forDark: "text-gray-400",
            forLight: "text-gray-500",
          })}`}
        >
          Total Followers
        </h5>
      </div>
      <div
        className={`flex flex-col gap-2 items-center cursor-pointer p-2 px-6 ${ThemeTernary(
          {
            forDark: "hover:bg-gray-700",
            forLight: "hover:bg-gray-300",
          }
        )} rounded-xl`}
      >
        <h2 className="text-2xl font-bold">587</h2>
        <h5
          className={`${ThemeTernary({
            forDark: "text-gray-400",
            forLight: "text-gray-500",
          })}`}
        >
          Total Following
        </h5>
      </div>
    </div>
  );
};

export default AboutUserSection;
