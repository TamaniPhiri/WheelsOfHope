const Subscribe = () => {
  return (
    <section className=" relative w-full items-center justify-center px-4 md:px-12 min-h-[30vh]">
      <div className=" absolute w-full -top-24 inset-x-0 px-4 md:px-12">
        <div className="bg-white p-4 md:p-12 flex-col w-full flex justify-center items-center shadow-xl rounded-xl">
          <h1 className="text-center text-4xl font-bold md:max-w-lg">
            Subscribe today
          </h1>
          <p className="md:text-xl text-lg max-w-sm w-fullmd:max-w-xl lg:max-w-2xl my-2">
            Contribute on our charity work by your donation.
          </p>
          <div className=" flex items-center justify-center gap-2 w-full my-2">
            <div className=" h-1 bg-gray-400 w-8"></div>
            <div className=" h-3 bg-[#ff6600] w-8"></div>
            <div className=" h-1 bg-gray-400 w-8"></div>
          </div>
          <div className=" w-full items-center justify-between flex md:flex-row flex-col gap-6 mt-6">
            <input
              type="text"
              className=" border-b flex-1 focus:outline-none w-full"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className=" border-b flex-1 focus:outline-none w-full"
              placeholder="Enter your email"
            />
            <button className=" flex-1">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
