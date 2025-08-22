import React from "react";
import { FiArrowRight } from "react-icons/fi"; // arrow icon

function QRSection() {
  return (
    <div className="bg-gray-100 py-16 px-7 flex flex-col max-w-full items-center text-center md:text-left">
      <div className="mx-auto flex-col w-full lg:w-[1142px]">
        {/* Title */}
        <h2 className="text-2xl ml-2 sm:text-3xl md:text-4xl font-bold mb-10 text-left">
          It’s easier in the apps
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1200px]">
          {/* Uber App Card */}
          <div className="flex items-center bg-white p-4 sm:p-6 flex-1 transition group w-full md:w-[553px] h-auto sm:h-[198px]">
            <img
              src="/uber-qr.png"
              alt="Uber QR"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0"
            />
            <div className="ml-4 sm:ml-6 flex-1 text-left">
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Download the Uber app
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Scan to download</p>
            </div>
            <FiArrowRight className="text-xl sm:text-2xl text-gray-700 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </div>

          {/* Driver App Card */}
          <div className="flex items-center bg-white p-4 sm:p-6 flex-1 transition group w-full md:w-[553px] h-auto sm:h-[198px]">
            <img
              src="/uber-qr.png"
              alt="Driver QR"
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0"
            />
            <div className="ml-4 sm:ml-6 flex-1 text-left">
              <h3 className="font-semibold text-lg sm:text-xl">
                Download the Driver app
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">Scan to download</p>
            </div>
            <FiArrowRight className="text-xl sm:text-2xl text-gray-700 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRSection;
