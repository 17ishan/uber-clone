import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className=" flex items-center justify-center px-6 md:px-12 lg:px-20 ">
      <div className="max-w-6xl  grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-32 pb-10">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-semibold">Bhopal, IN</span>
            <a href="#" className="underline text-sm">
              Change city
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-tight">
            Go anywhere with <br /> Uber
          </h1>

          {/* Form */}
          <div className="space-y-4 w-full max-w-md relative">
            {/* Pickup */}
            <div className="relative">
              <svg width="20" height="20" className="ml-2 mt-4 absolute" viewBox="0 0 24 24"  fill="none" data-baseweb="icon"><title>search</title><path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" fill="currentColor"></path></svg>
              <input
                type="text"
                placeholder="     Pickup location"
                className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2">
                <img src="./location-arrow.png" alt="" className="w-5 h-5" />
              </button>
            </div>
              <div className="h-[44px] bg-black w-[2px] absolute top-[36px] left-[16px]"></div>

            {/* Dropoff */}

            <svg width="20" height="20" className="ml-2 mt-4 absolute" viewBox="0 0 24 24" fill="none" data-baseweb="icon"><title>search</title><path fill-rule="evenodd" clip-rule="evenodd" d="M17 7H7v10h10V7Z" fill="currentColor"></path></svg>
            <input
              type="text"
              placeholder="     Dropoff location"
              className="w-full p-3 rounded-md bg-gray-100 focus:outline-none"
            />

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md">
                <Calendar className="w-4 h-4" />
                
                <span>Today</span>
              </div>

              
              <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-md">
                <Clock className="w-4 h-4"

                />
                
                <span>Now</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold w-full sm:w-auto">
              See prices
            </button>
            {/* <a href="#" className=" group text-gray-700 text-center sm:text-left">
              Log in to see your recent activity
              <div className="w-full h-[1.6px] bg-gray-300 group-hover:bg-black translate-y  transition duration-700 "></div>
              <div className="w-full h-[1.6px] bg-gray-300 group-hover:bg-black translate-y  transition duration-700 "></div>
            </a> */}
            <a href="#" className=" group text-gray-700 text-center sm:text-left">
              Log in to see your recent activity
              <div className="w-full h-[1.6px] bg-gray-300  translate-y  transition duration-700 "></div>
              <div className="w-full h-[1.6px] bg-black scale-x-0 origin-left group-hover:scale-x-100 translate-y  transition duration-700 "></div>
            </a>
           

          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center">
          <img
            src="/homepageimage.webp"
            alt="Uber Illustration"
            className="rounded-lg w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
}
