import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { FC } from "react";
import { CustomTooltipProp } from "@/lib/prop";
import { ThemeTernary } from "@/lib/common";

const CustomTooltip: FC<CustomTooltipProp> = ({
  children,
  title,
  position = "top",
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={position}>
          <p
            className={`p-1 rounded-md ${ThemeTernary({
              forDark: "bg-slate-700 shadow-slate-700",
              forLight: "bg-white/70 shadow-slate-400 ",
            })} shadow-lg px-2`}
          >
            {title}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
