import { Button } from "@/components/ui/button";
import image from "../../assets/images/landing.png";
import { IoRocketSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex items-center justify-evenly h-[90vh] flex-col-reverse md:flex-row">
      <div className="w-full flex flex-col gap-8 md:w-[50%] md:pl-10">
        <motion.h1
          className="text-[20px] md:text-[30px] font-bold text-center md:text-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover, Learn, and Excel <br /> with{" "}
          <span className="text-csdarkgreen">PrepBank</span>!
        </motion.h1>
        <motion.p
          className={`${
            theme === "light" ? "text-gray-400" : "text-gray-300"
          } text-[16px] md:w-[80%] text-center md:text-start`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Access a wealth of questions and challenges across various domains,
          including programming, data science, and more. Whether you're
          preparing for an interview or honing your expertise, PrepBank is your
          go-to platform for continuous growth and success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center md:justify-start"
        >
          <Button
            className="w-52 py-5 font-semibold bg-csdarkgreen hover:bg-csgreen rounded-full"
            to="/form"
          >
            Get Started <IoRocketSharp className="text-[18px] ml-2" />
          </Button>
        </motion.div>
      </div>
      <motion.img
        src={image}
        alt="image"
        className="w-[65vw] md:w-[35vw]"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: 1, x: 1, y: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};

export default Hero;
