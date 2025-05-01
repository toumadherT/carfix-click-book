
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="relative mx-auto lg:mx-0">
            <img
              className="w-full max-w-[597px] h-auto mx-auto"
              src="/images/map.png"
              alt="Location Map"
            />
            {/* Map Markers */}
            <div className="absolute inset-0">
              {Array(15).fill(null).map((_, i) => (
                <img
                  key={i}
                  className="w-6 h-8 absolute"
                  src="/images/vector.png"
                  alt="Map Marker"
                  style={{
                    top: `${30 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold font-['Inria_Serif'] mb-8">
              Contact us
            </h3>
            
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-center lg:justify-start">
                <img className="w-6 h-10 mr-4" src="/images/loc.png" alt="Location Icon" />
                <p className="text-white text-lg md:text-xl font-bold font-['Inria_Serif']">
                  Cité Taffala (Ibn Khaldoun) Sousse
                </p>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <img className="w-6 h-8 mr-4" src="/images/phone.png" alt="Phone Icon" />
                <p className="text-white text-lg md:text-xl font-bold font-['Inria_Serif']">
                  +216 28 453 828
                </p>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start">
                <img className="w-8 h-5 mr-4" src="/images/mail.png" alt="Email Icon" />
                <p className="text-white text-lg md:text-xl font-bold font-['Inria_Serif']">
                  renaultcarfix@gmail.com
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mt-10 space-x-6">
              <img className="w-10 h-10" src="/images/fcbk.png" alt="Facebook" />
              <img className="w-10 h-10" src="/images/insta.png" alt="Instagram" />
              <img className="w-10 h-10" src="/images/tiktok.png" alt="TikTok" />
              <img className="w-8 h-8" src="/images/x.png" alt="Twitter/X" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="w-full h-16 bg-black flex items-center justify-center">
        <p className="text-white text-sm md:text-base font-normal font-['Inter']">
          © Copyright 2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
