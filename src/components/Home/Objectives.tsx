import { Link } from "react-router-dom";
import { objectives } from "../../constants/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Objectives = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col items-center justify-center px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl text-gray-700 font-bold md:max-w-lg">
        Empowering <span className="text-[#ff6600]">Lives </span>, Fostering
        Dignity, and Ensuring Care
      </h1>
      <h2 className=" text-2xl underline">Mission</h2>
      <motion.p
        whileInView={animated ? { opacity: 1, translateY: 0 } : {}}
        initial={animated ? {} : { opacity: 0, translateY: 1 }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        className="md:text-xl text-lg max-w-sm w-full text-gray-600 md:max-w-xl lg:max-w-2xl"
      >
        This mission statement encapsulates our commitment to empowering
        individuals affected by gender-based violence (GBV), supporting
        vulnerable children (OVC), and ensuring dignified care for the elderly.
        We strive to create a culture of empowerment, dignity, and care for all
        those we serve, without discrimination, as we work towards a society
        where everyone can live with security and respect.
      </motion.p>
      <div className=" flex items-center justify-center gap-2 w-full my-2">
        <div className=" h-1 bg-gray-400 w-8"></div>
        <div className=" h-3 bg-[#ff6600] w-8"></div>
        <div className=" h-1 bg-gray-400 w-8"></div>
      </div>
      <div className="grid lg:grid-cols-5 text-sm md:text-base md:grid-cols-3 grid-cols-1 mt-4 w-full justify-center gap-6">
        {objectives.map((item, i) => (
          <motion.div
            whileInView={animated ? { opacity: 1, scale: 1 } : {}}
            initial={animated ? {} : { opacity: 0, scale: 0.9 }}
            transition={{
              delay: i * 0.2,
              duration: 1,
              type: "spring",
            }}
            className="flex items-center border-[#ff6600] border-[0.2px] border-opacity-30 flex-col text-center px-8 md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5"
          >
            <span className=" px-4 py-2 border-[#ff6600] my-2 font-extrabold text-gray-500 rounded-full border-4">
              {i + 1}
            </span>
            <h1 className=" font-bold mb-4 text-gray-700">{item.title}</h1>
            <p className=" text-gray-600">{item.obj}</p>
          </motion.div>
        ))}
      </div>
      <Link
        to={"/about"}
        className=" mt-8 rounded-2xl bg-[#ffcc99] hover:bg-[#ff6600] hover:text-white drop-shadow-lg hover:drop-shadow-xl hover:scale-105 active:scale-95 duration-150 p-4 text-gray-900"
      >
        Read More
      </Link>
    </section>
  );
};

export default Objectives;
