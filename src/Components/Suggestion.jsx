import React from "react";

const suggestions = [
  {
    title: "Ride",
    desc: "Go anywhere with Uber. Request a ride, hop in, and go.",
    img: "/ride.png",
  },
  {
    title: "Reserve",
    desc: "Reserve your ride in advance so you can relax on the day of your trip.",
    img: "/reserve_clock.png",
  },
  {
    title: "Intercity",
    desc: "Get convenient, affordable outstation cabs anytime at your door.",
    img: "/intercity.png",
  },
  {
    title: "Courier",
    desc: "Uber makes same-day item delivery easier than ever.",
    img: "/Courier.png",
  },
  {
    title: "Rentals",
    desc: "Request a trip for a block of time and make multiple stops.",
    img: "/Hourly2021.png",
  },
  {
    title: "Moto",
    desc: "Get affordable motorbike rides in minutes at your doorstep.",
    img: "/Uber_Moto_India1.png",
  },
];

const Suggestions = () => {
  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8 py-8" id="suggestions">
      <div className="mx-auto flex flex-col w-full lg:w-[1200px] items-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl mr-245 font-bold mb-8 text-center sm:text-left">
          Suggestions
        </h2>

        {/* card container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {suggestions.map((item, index) => (
            <div key={index} className="w-full">
              <div className="bg-gray-100 h-[164px] px-3 py-5 rounded-sm shadow flex justify-between">
                {/* Title + Description */}
                <div className="flex max-w-[208px] w-full flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-ms font-base leading-5">
                      {item.desc}
                    </p>
                  </div>

                  <button className="bg-white w-fit px-3 sm:px-4 mt-2 py-2 rounded-full shadow hover:bg-gray-200 text-xs sm:text-sm font-medium">
                    Details
                  </button>
                </div>

                {/* Image */}
                <div className="flex w-[128px] h-[128px] justify-between items-center mt-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[128px] h-[128px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
