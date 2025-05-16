
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Help Salman Bhivankar</h3>
            <p className="text-gray-300 text-sm">
              A fundraising campaign organized by Khairkhwah Foundation to help Salman get a hand transplant 
              and regain his independence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>KhKhairKhwahi Foundation</li>
              <li>Mumbra, Maharashtra, India</li>
              <li>Email : khairkhwahifoundation@gmail.com</li>
              <li>Phone: +91 9867862120</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-300 transition-colors">About Salman</a></li>
              <li><a href="#donate" className="hover:text-blue-300 transition-colors">Donate</a></li>
              <li><a href="#faq" className="hover:text-blue-300 transition-colors">FAQ</a></li>
              <li><a href="#updates" className="hover:text-blue-300 transition-colors">Updates</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Khairkhwah Foundation. All rights reserved.</p>
          <p className="mt-2">
            This campaign is verified and all donations go directly toward Salman Bhivankar's medical treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
