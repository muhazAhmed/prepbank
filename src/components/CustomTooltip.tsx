import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { FC } from "react";
import { CustomTooltipProp } from "@/lib/prop";

const CustomTooltip: FC<CustomTooltipProp> = ({
  children,
  className,
  title,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
