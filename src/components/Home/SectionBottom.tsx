import bg from "../../assets/below.jpg";

const SectionBottom = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className=" min-h-[70vh] relative items-center justify-center text-center w-full bg-cover bg-center bg-no-repeat"
    >
      <div className=" inset-0 bg-black absolute bg-opacity-75 backdrop-blur-sm flex flex-col items-center justify-center px-4 md:px-12 gap-4">
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
      </div>
    </section>
  );
};

export default SectionBottom;
