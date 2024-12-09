'use client';

import Image from 'next/image';
import { useEffect } from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#044E83]/10 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl font-bold text-[#044E83] animate-slideFromLeft">
              Welcome to My Portfolio
            </h1>
            <div className="space-y-4 animate-slideFromBottom">
              <p className="text-xl text-gray-700 leading-relaxed">
                I'm Mirza Mohsin Baig, a professional Web Developer, E-commerce Website Builder, and Proposal Expert with 6+ years of experience. I specialize in creating scalable, high-performance applications using Next.js and other cutting-edge technologies.
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center animate-slideFromLeft">
                  <span className="mr-2">•</span>
                  Built over 100+ successful projects for clients worldwide.
                </li>
                <li className="flex items-center animate-slideFromLeft delay-100">
                  <span className="mr-2">•</span>
                  Expertise in developing custom e-commerce websites.
                </li>
                <li className="flex items-center animate-slideFromLeft delay-200">
                  <span className="mr-2">•</span>
                  Skilled in crafting compelling business plans, pitch decks, sponsorship proposals, and grant proposals.
                </li>
              </ul>
              
              <p className="text-lg text-gray-700 animate-fadeIn delay-300">
                Let's work together to bring your vision to life.
              </p>
            </div>
            
            <button className="bg-[#044E83] text-white px-8 py-3 rounded-lg hover:bg-[#033b66] transition-all duration-300 hover:scale-105 transform">
              Explore My Work
            </button>
          </div>

          {/* Image Section */}
          <div className="relative h-[500px] rounded-lg overflow-hidden animate-scaleIn">
            <Image
              src="/mohsin (2).jpg"
              alt="Mirza Mohsin Baig"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;