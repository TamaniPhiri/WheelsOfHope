const Subscribe = () => {
  return (
    <section className=" relative w-full items-center justify-center px-4 md:px-12 min-h-[30vh]">
      <div className=" absolute w-full -top-24 inset-x-0 px-4 md:px-12">
        <div className="bg-white p-4 flex-col w-full flex justify-center items-center shadow-xl rounded-xl">
          <h1 className=" text-center">Subscribe today</h1>
          <p className=" text-center">
            Contribute on our charity work by your donation.
          </p>
          <div className=" w-full items-center justify-between flex">
            <input type="text" />
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
