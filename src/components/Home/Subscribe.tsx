import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Subscribe = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <section className="relative w-full items-center justify-center px-4 md:px-12 md:min-h-[35vh] min-h-[40vh]">
      <div className=" absolute w-full -top-24 inset-x-0 px-4 md:px-12">
        <motion.div
          whileInView={animated ? { translateY: 0 } : {}}
          initial={animated ? {} : { translateY: 5 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="bg-white p-4 md:p-12 flex-col w-full flex justify-center items-center shadow-xl rounded-xl"
        >
          <h1 className="text-center text-4xl font-bold md:max-w-lg">
            Subscribe today
          </h1>
          <p className="md:text-xl text-lg max-w-sm w-fullmd:max-w-xl lg:max-w-2xl my-2 text-center">
            Contribute on our charity work by your donation.
          </p>
          <div className=" flex items-center justify-center gap-2 w-full my-2">
            <div className=" h-1 bg-gray-400 w-8"></div>
            <div className=" h-3 bg-[#ff6600] w-8"></div>
            <div className=" h-1 bg-gray-400 w-8"></div>
          </div>
          <div className=" w-full items-center justify-between flex md:flex-row flex-col md:gap-12 gap-6 mt-6">
            <input
              type="text"
              className=" border-b flex-1 focus:outline-none w-full p-4"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className=" border-b flex-1 focus:outline-none w-full p-4"
              placeholder="Enter your email"
            />
            <button className=" rounded-2xl bg-black w-full border text-white border-gray-500 hover:bg-opacity-80 hover:scale-105 active:scale-95 duration-150 p-4 flex-1">
              Submit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Subscribe;
