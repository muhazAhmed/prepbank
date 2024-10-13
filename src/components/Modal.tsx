import { FC } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useTheme } from "@/lib/ThemeContext";
import { CustomModalProps } from "@/lib/prop";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Modal: FC<CustomModalProps> = ({
  open,
  onOpenChange,
  children,
  title,
}) => {
  const { theme } = useTheme();

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className={`sm:max-w-[425px] ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
          aria-describedby="modal-description"
        >
          {title ? (
            <DialogTitle>{title}</DialogTitle>
          ) : (
            <VisuallyHidden>
              <DialogTitle>Modal Title</DialogTitle>
            </VisuallyHidden>
          )}
          <div className="py-4">{children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
