import bg from "../../assets/vision.jpg";

const Vision = () => {
  return (
    <section className=" min-h-screen bg-[#ffcc99] gap-12 py-12 grid bg-opacity-30 md:grid-cols-2 grid-cols-1 w-full px-4 md:px-12">
      <div>
        <img
          src={bg}
          alt="visionImg"
          loading="lazy"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className=" flex-col flex gap-2 md:text-left text-center">
        <h1 className=" text-2xl underline">Vision</h1>
        <h2 className="text-4xl text-gray-700 font-bold md:max-w-lg">
          Envisioning <span className="text-[#ff6600]">Care</span> , Dignity,
          and Inclusion
        </h2>
        <div className=" flex items-center justify-center md:justify-start gap-2 w-full my-2">
          <div className=" h-3 bg-[#ff6600] w-8"></div>
          <div className=" h-1 bg-gray-400 w-8"></div>
          <div className=" h-1 bg-gray-400 w-8"></div>
        </div>
        <p className="md:text-xl text-lg text-gray-60 max-w-sm w-full text-gray-600 md:max-w-xl lg:max-w-2xl">
          This vision statement embodies our commitment to creating a world
          where individuals affected by gender-based violence (GBV), vulnerable
          children (OVC), and the elderly are empowered to lead healthy,
          dignified lives. We strive for a society where everyone enjoys health,
          dignity, and inclusion, free from stigma and disease. Our vision is to
          champion relentless support for all vulnerable groups and to ensure
          that every person, regardless of age or circumstance, is valued and
          treated with respect.
        </p>
      </div>
    </section>
  );
};

export default Vision;
