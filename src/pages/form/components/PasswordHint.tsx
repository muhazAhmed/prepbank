import Modal from "@/components/Modal";
import { PasswordHintProp } from "@/lib/prop";
import { FC } from "react";
import { motion } from "framer-motion";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import { hasMinValue, hasNumber, hasSpecialChar } from "@/lib/validation";

const PasswordHint: FC<PasswordHintProp> = ({
  open,
  onOpenChange,
  password,
}) => {
  const renderIcon = (isTrue: boolean) => {
    return isTrue ? (
      <FaCheck className="text-green-500" />
    ) : (
      <HiMiniXMark className="text-red-500" />
    );
  };
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <motion.div className="flex flex-col w-full gap-3">
        <div className="flex items-center gap-1">
          {renderIcon(hasMinValue(password, 5))}
          <p>Minimum 5 characters</p>
        </div>
        <div className="flex items-center gap-1">
          {renderIcon(hasSpecialChar(password))}
          <p>At least one special character (!@#$%^&*)</p>
        </div>
        <div className="flex items-center gap-1">
          {renderIcon(hasNumber(password))}
          <p>At least one number (0-9)</p>
        </div>
      </motion.div>
    </Modal>
  );
};

export default PasswordHint;
