import React from "react";
import { FiArrowRight } from "react-icons/fi"; // arrow icon

function QRSection() {
  return (
    <div className="bg-gray-100 py-16 px-6 flex flex-col items-center text-center md:text-left">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        It’s easier in the apps
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Uber App Card */}
        <div className="flex items-center bg-white shadow-md p-4 sm:p-6 rounded-lg flex-1 transition group">
          <img src="/uber-qr.png" alt="Uber QR" className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0" />
          <div className="ml-4 sm:ml-6 flex-1">
            <h3 className="font-semibold text-base sm:text-lg">Download the Uber app</h3>
            <p className="text-xs sm:text-sm text-gray-600">Scan to download</p>
          </div>
          <FiArrowRight className="text-xl sm:text-2xl text-gray-700 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </div>

        {/* Driver App Card */}
        <div className="flex items-center bg-white shadow-md p-4 sm:p-6 rounded-lg flex-1 transition group">
          <img src="/uber-qr.png" alt="Driver QR" className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0" />
          <div className="ml-4 sm:ml-6 flex-1">
            <h3 className="font-semibold text-base sm:text-lg">Download the Driver app</h3>
            <p className="text-xs sm:text-sm text-gray-600">Scan to download</p>
          </div>
          <FiArrowRight className="text-xl sm:text-2xl text-gray-700 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
}

export default QRSection;
