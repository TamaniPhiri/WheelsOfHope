import bg from "../../assets/homehero.jpg";
const Hero = () => {
  return (
    <header
      style={{ backgroundImage: `url(${bg})` }}
      className="w-full bg-cover bg-center bg-no-repeat  text-white"
    >
      <div className="min-h-screen bg-black bg-opacity-40 flex gap-4 flex-col px-4 md:px-10 items-center justify-center text-center backdrop-blur-[2px]">
        <h1 className="font-bold text-5xl">Wheels Of Hope</h1>
        <p className="lg:max-w-xl md:text-xl text-lg text-gray-200">
          This organization is based on values of self help, self
          responsibility, democracy, equality and honest openess, social
          responsibility and caring for others.
        </p>
        <div className="flex gap-4 items-center">
          <button className=" rounded-2xl bg-[#ffcc99] hover:bg-[#ffbc78] hover:scale-105 active:scale-95 duration-150 p-4 text-black">
            Donate Now
          </button>
          <button className=" rounded-2xl bg-black border border-gray-600 hover:bg-opacity-80 hover:scale-105 active:scale-95 duration-150 p-4">
            Disover +
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
