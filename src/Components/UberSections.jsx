import React from "react";
import { FaCalendarAlt, FaRegClock, FaEquals } from "react-icons/fa";

export default function UberSections() {
  return (
    <div className="max-w-full">
      <div className="w-full lg:w-[1200px] bg-white text-black mx-auto">
        {/* Section 1 - Login */}
        <section className="flex flex-col md:flex-row items-center justify-between mx-auto px-4 sm:px-6 lg:px-4 py-12 gap-5">
          {/* Text */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Log in to see your account <br className="hidden sm:block" /> details
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              View past trips, tailored suggestions, support resources,{" "}
              <br className="hidden sm:block" /> and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <button className="bg-black text-white font-bold px-5 py-2 rounded-md hover:bg-gray-900">
                Log in to your account
              </button>
              <button className="group px-5 py-2 border-gray-300">
                Create an account
                <div className="w-full h-[1.6px] bg-gray-300 translate-y transition duration-700"></div>
                <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y transition duration-700"></div>
              </button>
            </div>
          </div>
          {/* Image */}
          <img
            src="/Signup.svg"
            alt="Login illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
        </section>

        {/* Section 2 - Uber Reserve */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Plan for later</h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 items-start">
            {/* Left box */}
            <div className="bg-[#9DCDD6] p-10 rounded-lg min-w-[300px] w-full lg:w-[730px] h-auto lg:h-[397px] flex flex-col justify-start">
              <h3 className="lg:text-4xl sm:text-xl font-bold mb-2 w-full lg:w-[360px] lg:h-[88px]">
                Get your ride right with Uber Reserve
              </h3>
              <br />
              <br />
              <br />
              <p className="text-sm font-semibold sm:text-base">Choose date and time:</p>
              <div className="flex flex-col lg:w-[340px] sm:flex-row gap-4 sm:space-x-2 mt-4 ">
                <input
                  type="date"
                  className="border p-2 rounded-md flex-1 sm:w-[173px] h-[44px]"
                />
                <input
                  type="time"
                  className="border p-2 rounded-md flex-1 w-full sm:w-[173px] h-[44px]"
                />
              </div>
              <button className="bg-black text-white px-6 py-2 mt-4 rounded-md self-start hover:bg-gray-900 lg:w-85 sm:w-[360px] h-[48px]">
                Next
              </button>
            </div>

            {/* Right box */}
            <div className="bg-white p-6 rounded-lg shadow flex-1 min-w-[300px] w-full lg:w-[320px] lg:h-[332px]">
              <h3 className="font-semibold mb-4">Benefits</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="text-lg sm:text-xl mt-1" />
                  <p className="text-sm sm:text-base">
                    Choose your exact pickup time up to 90 days in advance.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaRegClock className="text-lg sm:text-xl mt-1" />
                  <p className="text-sm sm:text-base">Extra wait time included to meet your ride.</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaEquals className="text-lg sm:text-xl mt-1" />
                  <p className="text-sm sm:text-base">
                    Cancel at no charge up to 60 minutes in advance.
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 underline cursor-pointer">See terms</p>
            </div>
          </div>
        </section>

        <br />

        {/* Section 3 - Drive */}
        <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12 gap-10 lg:gap-40">
          <img
            src="/earner-illustra.webp"
            alt="Drive"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Drive when you want, make <br /> what you need
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Make money on your schedule with deliveries or rides—or both.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900">Get started</button>
              <a href="#" className="text-sm text-gray-500 group">
                Already have an account? Sign in
                <div className="w-full h-[1.6px] bg-gray-300 translate-y transition duration-700"></div>
                <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y transition duration-700"></div>
              </a>
            </div>
          </div>
        </section>

        {/* Section 4 - Business */}
        <section className="flex flex-col md:flex-row items-center max-w-7xl px-4 sm:px-6 lg:px-4 py-12 gap-10">
          {/* Left part */}
          <div className="text-left md:text-left flex-1">
            <h2 className="sm:text-md lg:text-4xl md:text-lg font-bold">
              The Uber you know, <br />
              reimagined for business
            </h2>
            <p className="text-gray-600 mt-2 sm:text-base">
              Uber for Business is a platform for managing global rides and <br /> meals, and
              local deliveries, for companies of any size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-start">
              <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-900">Get started</button>
              <button className="px-5 py-2 rounded-md group mt-2 sm:mt-0">
                Check out our solutions
                <div className="w-full h-[1.6px] bg-gray-300 translate-y transition duration-700"></div>
                <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y transition duration-700"></div>
              </button>
            </div>
          </div>

          {/* Right part */}
          <img
            src="/u4b-square.webp"
            alt="Business"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg mt-8 md:mt-0"
          />
        </section>

        {/* Section 5 - Rent */}
        <section className="w-full flex flex-col md:flex-row items-center justify-between  mx-auto px-4 sm:px-6 lg:px-4 py-12 gap-10 lg:gap-20 ">
          <img
            src="/fleet.webp"
            alt="Rent"
            className="w-full ml-0 max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
          />
          <div className="text-center md:text-left sm:mr-6 flex-1  lg:ml-20">
            <h2 className="sm:text-md lg:text-4xl  sm:text-lg font-bold">
              Make money by renting out <br /> your car
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base leading-8 ">
              Connect with thousands of drivers and earn more per week <br /> with Uber’s
              free fleet tools.
            </p>
            <button className="bg-black text-white px-5 py-2 mt-6 rounded-md hover:bg-gray-900">Get started</button>
          </div>
        </section>
      </div>
    </div>
  );
}
