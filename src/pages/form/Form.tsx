import { useState, FC } from "react";
import Login from "@/pages/form/components/Login";
import Register from "@/pages/form/components/Register";
import Modal from "@/components/Modal";
import { FormProps } from "@/lib/prop";
import { motion, AnimatePresence } from "framer-motion";

const Form: FC<FormProps> = ({ open, onOpenChange }) => {
  const [selectedForm, setSelectedForm] = useState<"login" | "register">(
    "login"
  );

  const isLogin = selectedForm === "login";
  const toggleFormText = isLogin
    ? "Create new account?"
    : "Already registered?";
  const toggleFormButton = isLogin ? "Register" : "Login";

  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <motion.div className="flex flex-col w-full gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedForm}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {isLogin ? <Login /> : <Register />}
          </motion.div>
        </AnimatePresence>

        <div className="flex w-full gap-1">
          <p className="text-gray-400 text-sm">{toggleFormText}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-blue-400 text-sm font-semibold"
            onClick={() => setSelectedForm(isLogin ? "register" : "login")}
            aria-label={`Switch to ${isLogin ? "Register" : "Login"} form`}
          >
            {toggleFormButton}
          </motion.button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default Form;
