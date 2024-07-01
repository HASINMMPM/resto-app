import banner from "/banner.png";

const Banner = () => {
  return (
    <div className="sitesize bg-slate-5npm 0 ">
      <div className=" flex flex-col-reverse mt-10  md:flex-row justify-between items-center gap-8 ">
        {/* caption */}
        <div className="md:w-1/2 py-8 md:py-24 space-y-7">
          <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-wide  text-yellow ">
            Delve into the <span className="text-red">Joy</span>
            <br />
            of delicious dining
          </h2>
          <p className="text-secondary mt-10 font-semibold text-lg pr-10">
            From comforting classics to bold, new flavors, we bring you an
            unforgettable culinary experience. Satisfy your cravings and savor
            every bite with Foodie Frenzy, where every meal is a celebration.
          </p>
          <button className="btn bg-red text-yellow rounded-full hover:text-white flex items-center mt-8 ">
            Order now
          </button>
        </div>
        {/* image */}
        <div className="md:w-1/2">
          <img src={banner} alt="" />
          <div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
