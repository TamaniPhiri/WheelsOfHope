import bg from "../../assets/below.jpg";

const SectionBottom = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className=" min-h-[70vh] relative items-center justify-center text-center px-4 md:px-12 w-full bg-cover bg-center bg-no-repeat"
    >
      <div className=" inset-0 bg-black absolute bg-opacity-70">fhe</div>
    </section>
  );
};

export default SectionBottom;
