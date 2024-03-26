import { Link } from "react-router-dom";
import { objectives } from "../../constants/constants";

const Objectives = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col items-center justify-center px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl text-gray-700 font-bold md:max-w-lg">
        Empowering <span className="text-[#2CA6A4]">Lives </span>, Fostering
        Dignity, and Ensuring Care
      </h1>
      <h2 className=" text-2xl underline">Mission</h2>
      <p className="md:text-xl text-lg text-gray-60 max-w-sm w-full text-gray-600 md:max-w-xl lg:max-w-2xl">
        This mission statement encapsulates our commitment to empowering
        individuals affected by gender-based violence (GBV), supporting
        vulnerable children (OVC), and ensuring dignified care for the elderly.
        We strive to create a culture of empowerment, dignity, and care for all
        those we serve, without discrimination, as we work towards a society
        where everyone can live with security and respect.
      </p>
      <div className=" flex items-center justify-center gap-2 w-full my-2">
        <div className=" h-1 bg-gray-400 w-8"></div>
        <div className=" h-3 bg-[#2CA6A4] w-8"></div>
        <div className=" h-1 bg-gray-400 w-8"></div>
      </div>
      <div className="grid lg:grid-cols-4 text-sm md:text-base md:grid-cols-2 grid-cols-1 mt-4 w-full justify-center gap-6">
        {objectives.map((item, i) => (
          <div className="flex items-center border-[#2CA6A4] border-[0.2px] flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
            <span className=" px-4 py-2 border-[#2CA6A4] my-2 font-extrabold text-gray-500 rounded-full border-4">
              {i + 1}
            </span>
            <p className=" text-gray-600">{item.obj}</p>
          </div>
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
