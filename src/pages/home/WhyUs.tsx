import { AiFillQuestionCircle, AiOutlineCode } from "react-icons/ai";
import { FaUsers, FaChartLine } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeContext";

const WhyUs = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-col items-center justify-center h-auto md:h-[90vh] gap-5">
      <motion.h1 className="text-[40px] font-bold">
        Why Choose PrepBank?
      </motion.h1>
      <p className="text-center text-lg max-w-3xl">
        PrepBank offers everything you need to excel in various fields, from
        coding interviews to data science, web development, and beyond. With an
        extensive question bank and interactive learning, PrepBank is the
        ultimate platform for mastering skills across multiple domains.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-10 w-[90%]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`card flex flex-col items-center cursor-pointer p-4 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          } rounded-lg shadow-lg border-2 border-transparent hover:border-csgreen`}
        >
          <AiFillQuestionCircle className="text-5xl text-blue-500 mb-4" />
          <h5 className="font-semibold text-[15px] mb-5">
            Extensive Question Bank
          </h5>
          <p className="text-center text-gray-400 text-[14px]">
            Access thousands of coding questions across multiple languages and
            frameworks, ensuring you're well-prepared for any scenario.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`card flex flex-col items-center cursor-pointer p-4 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          } rounded-lg shadow-lg border-2 border-transparent hover:border-csgreen`}
        >
          <AiOutlineCode className="text-5xl text-green-500 mb-4" />
          <h5 className="font-semibold text-[15px] mb-2 text-center">
            Interactive Coding Environment
          </h5>
          <p className="text-center text-gray-400 text-[14px]">
            Try out solutions directly on the platform, enhancing your learning
            experience through hands-on practice.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`card flex flex-col items-center cursor-pointer p-4 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          } rounded-lg shadow-lg border-2 border-transparent hover:border-csgreen`}
        >
          <FaUsers className="text-5xl text-purple-500 mb-4" />
          <h5 className="font-semibold text-[15px] mb-5">
            Community Contributions
          </h5>
          <p className="text-center text-gray-400 text-[14px]">
            Add new questions and solutions, allowing users to collaborate and
            expand the knowledge base together.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`card flex flex-col items-center cursor-pointer p-4 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          } rounded-lg shadow-lg border-2 border-transparent hover:border-csgreen`}
        >
          <FaChartLine className="text-5xl text-yellow-500 mb-4" />
          <h5 className="font-semibold text-[15px] mb-5">
            Personalized Learning Paths
          </h5>
          <p className="text-center text-gray-400 text-[14px]">
            Track your progress and focus on areas where you need the most
            improvement, making your study sessions more effective.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`card flex flex-col items-center cursor-pointer p-4 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          } rounded-lg shadow-lg border-2 border-transparent hover:border-csgreen`}
        >
          <MdInsights className="text-5xl text-red-500 mb-4" />
          <h5 className="font-semibold text-[15px] mb-5">Expert Insights</h5>
          <p className="text-center text-gray-400 text-[14px]">
            Get tips and solutions from industry experts to help you understand
            complex topics better.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
