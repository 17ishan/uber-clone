import React from "react";
import { FaCalendarAlt, FaRegClock, FaEquals } from "react-icons/fa";

export default function UberSections() {
  return (
    <div className="w-full bg-white text-black">
      {/* Section 1 - Login */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Log in to see your account <br className="hidden sm:block" /> details
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            View past trips, tailored suggestions, support resources, <br className="hidden sm:block" /> and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-black text-white font-bold px-5 py-2 rounded-md">
              Log in to your account
            </button>
            <button className="group px-5 py-2 rounded-md  border-gray-300">
              Create an account
              <div className="w-full h-[1.6px] bg-gray-300  translate-y  transition duration-700 "></div>
              <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y  transition duration-700 "></div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Plan for later</h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left box */}
          <div className="bg-[#9DCDD6] p-6 rounded-lg flex-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Get your ride right with Uber Reserve
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">Choose date and time:</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <input type="date" className="border p-2 rounded-md flex-1" />
              <input type="time" className="border p-2 rounded-md flex-1" />
            </div>
            <button className="bg-black text-white px-6 py-2 mt-4 rounded-md">
              Next
            </button>
          </div>

          {/* Right box */}
          <div className="bg-white p-6 rounded-lg shadow flex-1">
            <h3 className="font-semibold mb-4">Benefits</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <FaCalendarAlt className="text-lg sm:text-xl" />
                <p className="text-sm sm:text-base">Choose your exact pickup time up to 90 days in advance.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaRegClock className="text-lg sm:text-xl" />
                <p className="text-sm sm:text-base">Extra wait time included to meet your ride.</p>
              </div>
              <div className="flex items-start gap-3">
                <FaEquals className="text-lg sm:text-xl" />
                <p className="text-sm sm:text-base">Cancel at no charge up to 60 minutes in advance.</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4 underline cursor-pointer">
              See terms
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Drive */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-30">
        <img
          src="/earner-illustra.webp"
          alt="Drive"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Drive when you want, make <br /> what you need
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Make money on your schedule with deliveries or rides—or both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-black text-white px-5 py-2 rounded-md">
              Get started
            </button>
            <a href="#" className="text-sm text-gray-500  group">
              Already have an account? Sign in
              <div className="w-full h-[1.6px] bg-gray-300  translate-y  transition duration-700 "></div>
              <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y  transition duration-700 "></div>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4 - Business */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            The Uber you know, reimagined for business
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Uber for Business is a platform for managing global rides and meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-black text-white px-5 py-2 rounded-md">
              Get started
            </button>
            <button className=" px-5 py-2 rounded-md group">
              Check out our solutions
              <br />
              <div className="w-full h-[1.6px] bg-gray-300  translate-y  transition duration-700 "></div>
              <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y  transition duration-700 "></div>
            </button>
          </div>
        </div>
        <img
          src="/u4b-square.webp"
          alt="Business"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
        />
      </section>

      {/* Section 5 - Rent */}
      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 gap-8">
        <img
          src="/fleet.webp"
          alt="Rent"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Make money by renting out your car
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet tools.
          </p>
          <button className="bg-black text-white px-5 py-2 mt-6 rounded-md">
            Get started
          </button>
        </div>
      </section>
    </div>
  );
}
