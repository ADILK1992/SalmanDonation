import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToDonate = () => {
    const donateSection = document.getElementById("donate");
    donateSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Help Salman Get a{" "}
              <span className="text-blue-600">Second Chance</span> at Life
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Support Salman Bhivankar's hand transplant surgery after a tragic
              electrical accident. Your donation will help him regain
              independence and the ability to hold his child again.
            </p>
            <div className="space-y-4">
                  <div className="bg-white/20 p-4 rounded-lg border border-white/10">
                    <p className="text-lg text-gray-700 dark:text-gray-100 font-medium">
                      Mujahid Attri{" "}
                      <span className="text-sm text-gray-500">
                        (KhairKhwahi Foundation)
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      📞 9867862120
                    </p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg border border-white/10">
                    <p className="text-lg text-gray-700 dark:text-gray-100 font-medium">
                      Salman Bhiwankar
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      📞 9819975956
                    </p>
                  </div>
                </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl bg-white p-4">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <img src="images/salmanImage.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
