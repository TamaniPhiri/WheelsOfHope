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
      <div>
        <h1 className=" text-2xl underline">Vision</h1>
        <h2 className="text-4xl text-gray-700 font-bold md:max-w-lg">
          Envisioning <span className="text-[#2CA6A4]">Care</span> , Dignity,
          and Inclusion
        </h2>
        <div>dashes</div>
        <p>
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
