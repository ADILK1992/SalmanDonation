import React from "react";

export default function Qr() {
  return (
    <div className="px-4 py-8 space-y-8  text-gray-800 max-w-screen-lg mx-auto">
      {/* Video Section */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Watch video for detail</h3>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video">
            <video controls className="w-full h-full rounded-lg sm:rounded-xl shadow-md sm:shadow-lg">
              <source src="/images/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-4 max-w-6xl mx-auto">
        <img
          src="/images/qr.jpg"
          alt="QR Code"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded shadow sm:rounded-lg"
        />
        <img
          src="/images/hand.jpg"
          alt="Cost Information"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded shadow sm:rounded-lg"
        />
        <img
          src="/images/COST.jpg"
          alt="Cost Information"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded shadow sm:rounded-lg"
        />
      </div>
    </div>
  );
}