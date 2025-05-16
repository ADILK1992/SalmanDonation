import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import DonationProgress from '@/components/DonationProgress';
// import DonationForm from '@/components/DonationForm';
import About from "@/components/About";
import FAQ from "@/components/FAQ";
// import SocialShare from "@/components/SocialShare";
import Footer from "@/components/Footer";
import Qr from "@/components/Qr";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        <section
          id="updates"
          className="my-4 flex  items-center justify-center"
        >
         
          <div>
            <Qr className="w-96" />
          </div>
        </section>

        <About />
        {/* <SocialShare /> */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
