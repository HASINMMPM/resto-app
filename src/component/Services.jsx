// import React from 'react'

const Services = () => {
  const services = [
    {
      id: 0,
      title: "Fast Delivery",
      description:
        "Get your food delivered quickly and efficiently, ensuring your meal arrives hot and fresh.",
      img: "/images//service/online.png",
    },
    {
      id: 1,
      title: "Catering Services",
      description:
        "Professional catering for events of all sizes, tailored to meet your specific needs.",
      img: "/images/service/catering.png",
    },
    {
      id: 2,
      title: "Takeaway",
      description:
        "Order online or by phone and pick up your meal at your convenience.",
      img: "/images/service/take.png",
    },
    {
      id: 3,
      title: "Special Dietary Options",
      description:
        "Vegetarian, vegan, gluten-free, and low-carb options available to accommodate all dietary preferences.",
      img: "/images/service/diet.png",
    },
  ];
  return (
    <section className="sitesize flex flex-col items-center justify-center ">
      <h5 className="title">Discover Our Offerings</h5>
      <p className="text=lg md:text-xl font-secondary w-3/4 md:w-1/2 text-center py-4 text-gray-500">
        Delve into the joy of delicious dining with Foodie Frenzy. Whether
        you're enjoying a meal with ordering online, we provide an exceptional
        culinary experience with a diverse menu to satisfy every palate.
      </p>

      {/* right */}
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 p-14">
        {services.map((survice, index) => {
          return (
            <div
              key={index}
              className=" flex flex-col md:flex-row items-center justify-center gap-8 p-3 shadow-xl md:h-72 hover:bg-slate-50 rounded-xl"
            >
              <img
                src={survice.img}
                alt={survice.title}
                className="bg-yellow h-40 w-40 p-px rounded-full"
              />
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl text-black font-heading mt-3">
                  {survice.title}
                </h4>
                <p className="text-gray-500 text-lg font-secondary md:w-3/4   ">
                  {survice.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
