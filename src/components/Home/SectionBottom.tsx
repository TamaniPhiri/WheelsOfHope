import bg from "../../assets/below.jpg";

const SectionBottom = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className=" min-h-[70vh] relative items-center justify-center text-center w-full bg-cover bg-center bg-no-repeat"
    >
      <div className=" inset-0 bg-black absolute bg-opacity-70 flex flex-col items-center justify-center px-4 md:px-12">
        <h1 className="text-center text-4xl text-white font-bold md:max-w-lg">
          Thousands need a helping hand
        </h1>
        <p className="md:text-xl text-lg text-white max-w-sm w-fullmd:max-w-xl lg:max-w-2xl">
          Contribute on our charity work by your donation. Thanks for your heart
          ♥.
        </p>
      </div>
    </section>
  );
};

export default SectionBottom;
