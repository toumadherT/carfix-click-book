
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="w-full h-[50vh] md:h-[70vh] lg:h-[80vh] relative overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src="/images/carbg.png"
            alt="Car Background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-black text-3xl md:text-5xl lg:text-6xl font-extrabold font-['Lato'] leading-tight">
              Car Trouble?<br />Let's Fix It, Book in Just a Click!
            </h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-12">
              <button className="bg-zinc-300 rounded-3xl shadow px-12 py-4 text-black text-xl md:text-2xl font-bold font-['Mada'] border border-black">
                Sign up
              </button>
              <button className="bg-indigo-900 bg-opacity-80 rounded-3xl shadow px-12 py-4 text-white text-xl md:text-2xl font-bold font-['Mada'] outline outline-[3px] outline-slate-600">
                Log in
              </button>
            </div>
            <div className="mt-10 text-slate-950 text-xl md:text-3xl font-bold font-['Lato'] underline cursor-pointer">
              Explore our services
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-bold font-['Inria_Serif'] mb-12">
          Our Mission
        </h2>
        
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/6 flex flex-row md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-8 mt-8 md:mt-0">
            <img
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-lg"
              src="/images/1.png"
              alt="Car Service"
            />
            <img
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-lg"
              src="/images/3.png"
              alt="Car Service"
            />
            <img
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-lg"
              src="/images/2.png"
              alt="Car Service"
            />
          </div>
          
          <div className="md:w-4/6 text-center px-4">
            <p className="text-black text-xl md:text-2xl lg:text-4xl font-light font-['Lato'] leading-relaxed">
              At CarFix, our mission is to simplify car service and maintenance for
              every driver in Tunisia. We believe in making your experience
              stress-free by connecting you with trusted agencies, letting you book
              online in just a few clicks, and giving you full control over your
              car's service history.
              <br /><br />
              We're here to make car care smart, organized, and accessible wherever
              you are, whenever you need it.
            </p>
          </div>
          
          <div className="md:w-1/6 flex flex-row md:flex-col justify-center space-x-4 md:space-x-0 md:space-y-8 mt-8 md:mt-0">
            <img
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-lg"
              src="/images/1.png"
              alt="Car Service"
            />
            <img
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-lg"
              src="/images/2.png"
              alt="Car Service"
            />
            <img
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-lg"
              src="/images/3.png"
              alt="Car Service"
            />
          </div>
        </div>
      </section>
      
      {/* Innovation Section */}
      <section className="w-full bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                className="w-full max-w-[600px] h-auto mx-auto"
                src="/images/innovcar.png"
                alt="Innovation Car"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-['Inria_Serif'] mb-8">
                Innovation:
              </h2>
              <p className="text-white text-xl md:text-2xl lg:text-3xl font-light font-['Inria_Serif']">
                Innovation is at the heart of everything we do. We continuously
                integrate the latest technologies to enhance your experience from
                smart booking systems to real-time service tracking and personalized
                maintenance reminders.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Services Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-bold font-['Inria_Serif'] mb-4">
          Our services
        </h2>
        <p className="text-center text-slate-500 text-xl md:text-2xl lg:text-3xl font-normal font-['Lato'] mb-16 px-4">
          Don't waste time, get it done: Choose our convenient services
        </p>
        
        <div className="container mx-auto px-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-zinc-700 opacity-25 rounded-2xl"></div>
                <img
                  className="relative z-10 w-full h-64 md:h-80 object-cover rounded-[40px]"
                  src="/images/image1.png"
                  alt="Oil Change"
                />
              </div>
              <h3 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-extrabold font-['Lato'] mt-4">
                Oil Change & Filter Replacement
              </h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-[40px] mb-4"
                src="/images/image2.png"
                alt="Brake Inspection"
              />
              <h3 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-extrabold font-['Lato'] mt-4">
                Brake Inspection & Repair
              </h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-[40px] mb-4"
                src="/images/imageDiag.png"
                alt="Engine Diagnostics"
              />
              <h3 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-extrabold font-['Lato'] mt-4">
                Engine Diagnostics & Software Updates
              </h3>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-[40px] mb-4"
                src="/images/imageScd.png"
                alt="Scheduled Maintenance"
              />
              <h3 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-extrabold font-['Lato'] mt-4">
                Scheduled Maintenance
              </h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-[40px] mb-4"
                src="/images/imageTire.png"
                alt="Tire Services"
              />
              <h3 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-extrabold font-['Lato'] mt-4">
                Tire Services
              </h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                className="w-full h-64 md:h-80 object-cover rounded-[40px] mb-4"
                src="/images/imageAir.png"
                alt="Air Conditioning"
              />
              <h3 className="text-center text-black text-xl md:text-2xl lg:text-3xl font-extrabold font-['Lato'] mt-4">
                Air Conditioning System Check & Repair
              </h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-bold font-['Inria_Serif'] mb-16">
          Why choose us?
        </h2>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="flex items-center justify-center md:justify-start">
              <img
                className="w-16 h-16 md:w-24 md:h-24"
                src="/images/image 16.png"
                alt="Manage Cars"
              />
              <p className="text-black text-2xl md:text-3xl lg:text-4xl font-bold font-['Inria_Serif'] ml-6">
                Manage all your cars in one place
              </p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <img
                className="w-16 h-16 md:w-24 md:h-24"
                src="/images/image 17.png"
                alt="Track History"
              />
              <p className="text-black text-2xl md:text-3xl lg:text-4xl font-bold font-['Inria_Serif'] ml-6">
                Track service history
              </p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <img
                className="w-16 h-16 md:w-24 md:h-24"
                src="/images/image 18.png"
                alt="Find Agencies"
              />
              <p className="text-black text-2xl md:text-3xl lg:text-4xl font-bold font-['Inria_Serif'] ml-6">
                Find agencies near you
              </p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start">
              <img
                className="w-16 h-16 md:w-24 md:h-24"
                src="/images/image 19.png"
                alt="Secure Payment"
              />
              <p className="text-black text-2xl md:text-3xl lg:text-4xl font-bold font-['Inria_Serif'] ml-6">
                Secure online reservations & payment
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
