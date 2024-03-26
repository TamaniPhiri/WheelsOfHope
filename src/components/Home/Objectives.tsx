import { Link } from "react-router-dom";
import { objectives } from "../../constants/constants";

const Objectives = () => {
  return (
    <section className="min-h-screen gap-2 w-full text-center flex flex-col bg-[#ffcc99] bg-opacity-30 items-center justify-center px-4 md:px-12 py-16">
      <h1 className="text-center text-4xl text-gray-700 font-bold">
        WE <span className="text-[#2CA6A4]">CAN</span> CHANGE THE WORLD
      </h1>
      <h2 className=" text-2xl underline">Mission</h2>
      <p className="md:text-xl text-lg text-gray-60 max-w-sm w-full md:max-w-md">
        To be a model gender based violence organization that meets the
        aspirations of the people
      </p>
      <div className=" flex items-center justify-center gap-2 w-full my-2">
        <div className=" h-1 bg-gray-400 w-8"></div>
        <div className=" h-3 bg-[#2CA6A4] w-8"></div>
        <div className=" h-1 bg-gray-400 w-8"></div>
      </div>
      <div className="grid lg:grid-cols-5 text-sm md:text-base md:grid-cols-3 mt-4 w-full items-center justify-center gap-6">
        {objectives.map((item, i) => (
          <div className="flex items-center flex-col text-center justify-center md:p-4 shadow-md rounded-xl hover:shadow-xl py-12 duration-200 bg-[#ffcc99] bg-opacity-5">
            <span className=" px-4 py-2 border-[#2CA6A4] my-2 font-extrabold text-gray-500 rounded-full border-4">
              {i + 1}
            </span>
            <p className=" text-gray-600">{item.obj}</p>
          </div>
        ))}
      </div>
      <Link
        to={"/about"}
        className=" mt-8 rounded-2xl bg-[#ffcc99] hover:bg-[#ffbc78] drop-shadow-lg hover:drop-shadow-xl hover:scale-105 active:scale-95 duration-150 p-4 text-gray-900"
      >
        Read More
      </Link>
    </section>
  );
};

export default Objectives;
