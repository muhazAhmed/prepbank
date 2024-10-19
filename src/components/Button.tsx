import { ButtonProps } from "@/lib/prop";
import { FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  initial,
  transition,
  animate,
  whileHover,
  className,
  disabled = false,
  type,
  variant = "primary",
  style,
  id,
  href,
  Icon,
  iconPosition = "left",
  iconStyles,
  loading = false,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      className={`${className} ${variant} z-10 flex items-center gap-2`}
      id={id}
      style={style}
      onClick={onClick}
    >
      {href ? (
        <Link to={href}>
          {loading === false && iconPosition === "left" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
          {loading && <FaSpinner className="animate-spin" />}
          <button disabled={disabled} type={type}>
            {loading ? "Please wait..." : label}
          </button>
          {iconPosition === "right" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
        </Link>
      ) : (
        <>
          {loading === false && iconPosition === "left" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
          {loading === true && <FaSpinner className="animate-spin" />}
          <button disabled={disabled} type={type}>
            {loading ? "Please wait..." : label}
          </button>
          {iconPosition === "right" && Icon && (
            <span className={iconStyles}>{Icon}</span>
          )}
        </>
      )}
    </motion.div>
  );
};

export default Button;
