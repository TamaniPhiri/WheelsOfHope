const Subscribe = () => {
  return (
    <section className=" relative w-full items-center justify-center px-4 md:px-12 min-h-[50vh]">
      <div className=" absolute w-full -top-24 inset-x-0  px-4 md:px-12">
        <div className="bg-white p-4 w-full flex shadow-xl rounded-xl">
          <h1>Subscribe today</h1>
          <p>Contribute on our charity work by your donation.</p>
          <div>
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
