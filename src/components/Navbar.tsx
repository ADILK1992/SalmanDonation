
import React from 'react';
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const Navbar = () => {
  const scrollToDonate = () => {
    const donateSection = document.getElementById('donate');
    donateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-blue-600">Help Salman</h1>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          {/* <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a> */}
          <a href="#story" className="text-gray-700 hover:text-blue-600 transition-colors">Story</a>
          {/* <a href="#updates" className="text-gray-700 hover:text-blue-600 transition-colors">Updates</a> */}
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
          
        </div>
        
       
      </div>
    </nav>
  );
};

export default Navbar;
