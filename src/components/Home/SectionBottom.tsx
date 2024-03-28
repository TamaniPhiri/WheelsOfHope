import { useEffect, useState } from "react";
import bg from "../../assets/below.jpg";
import { motion } from "framer-motion";

const SectionBottom = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="md:min-h-screen min-h-[70vh] relative items-center justify-center text-center w-full bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        whileInView={animated ? { opacity: 1 } : {}}
        initial={animated ? {} : { opacity: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        className=" inset-0 bg-black absolute bg-opacity-75 backdrop-blur-[1px] flex flex-col items-center justify-center px-4 md:px-12 gap-4"
      >
        <h1 className="text-center text-4xl text-white font-bold md:max-w-lg">
          Thousands <span className="text-[#ff6600]"> need </span>a helping hand
        </h1>
        <p className="md:text-xl text-lg text-white max-w-sm w-fullmd:max-w-xl lg:max-w-2xl">
          Contribute on our charity work by your donation. Thanks for your heart
          ♥.
        </p>
        <div className="flex items-center">
          <button className=" rounded-2xl bg-[#ffcc99] hover:bg-[#ff6600] hover:text-white hover:scale-105 active:scale-95 duration-150 p-4 text-black">
            Donate Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionBottom;
