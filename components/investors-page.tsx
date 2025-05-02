"use client";

import { useState, useRef, useEffect } from "react";

export default function InvestorsPage() {
  // For the counter animation (reusing from hero-home)
  const [countedUp, setCountedUp] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountedUp(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section>
      {/* Background bubbles for glassmorphism effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Investors Platform Section */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col justify-center" data-aos="fade-right">
              <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
                WHAT WE SERVE
              </h2>
              <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
                We are the best Platform for <span className="text-red-500">Investors</span><br />
                to Build a Super portfolio
              </h1>
              <p className="mb-8 text-lg text-gray-400">
                We offer the best platform for investors to build a powerful portfolio. Access diverse investment opportunities, advanced portfolio management tools, and a supportive investor community. Maximize your potential for long-term success with us.
              </p>
              <div className="mt-2">
                <a
                  className="btn group bg-linear-to-t from-indigo-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Join As Investor
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Image content - Right side illustration */}
            <div className="flex items-center justify-center" data-aos="fade-left">
              <div className="relative">
                <div className="absolute -right-6 -top-6 h-80 w-80 rounded-full bg-gradient-to-br from-red-500/30 to-indigo-600/20 blur-3xl" />
                <div className="relative z-10 backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-2xl">
                  <img
                    src="/images/investor-meeting.svg" 
                    alt="Investment Platform"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Pitching Sessions Section */}
          <div className="mt-32" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-xl">
                  <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/20 to-indigo-600/20 blur-3xl" />
                  <img
                    src="/images/pitching-sessions.svg" 
                    alt="Pitching Sessions"
                    className="relative z-10 max-w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="mb-2 text-xl font-semibold uppercase text-red-500">
                  PITCHING SESSIONS
                </h3>
                <h2 className="mb-6 text-3xl font-bold text-white">Only the Best</h2>
                <p className="text-gray-400 mb-6">
                  Adopt conducts regular pitching sessions where quality startups are pitched in a closed room. Investors get an opportunity to invest in these startups. It allows investors to syndicate on a deal and share the risk.
                </p>
                <a
                  href="#0"
                  className="text-red-500 font-semibold inline-flex items-center group"
                >
                  <span>Learn More</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Portfolio Management Section */}
          <div className="mt-32" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="mb-2 text-xl font-semibold uppercase text-red-500">
                  PORTFOLIO MANAGEMENT
                </h3>
                <h2 className="mb-6 text-3xl font-bold text-white">Outstanding Quality</h2>
                <p className="text-gray-400 mb-6">
                  Adopt manages and track the progress of all the investee companies. Get access to regular updates, Monthly MIS, Business Networking, Mentorship and Future Fundraising Activities.
                </p>
                <a
                  href="#0"
                  className="text-red-500 font-semibold inline-flex items-center group"
                >
                  <span>Learn More</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
              
              <div>
                <div className="relative backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-xl">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/20 to-red-500/20 blur-3xl" />
                  <img
                    src="/images/portfolio-management.svg" 
                    alt="Portfolio Management"
                    className="relative z-10 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Networking Section */}
          <div className="mt-32 mb-16" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-xl">
                  <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-600/20 blur-3xl" />
                  <img
                    src="/images/networking.svg" 
                    alt="Networking"
                    className="relative z-10 max-w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="mb-2 text-xl font-semibold uppercase text-red-500">
                  NETWORKING
                </h3>
                <h2 className="mb-6 text-3xl font-bold text-white">Truly Top-Notch</h2>
                <p className="text-gray-400 mb-6">
                  Get to interact and network with successful Business Owners, CXO's, Entrepreneurs and like minded individuals.
                </p>
                <a
                  href="#0"
                  className="text-red-500 font-semibold inline-flex items-center group"
                >
                  <span>Learn More</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center" data-aos="fade-up">
            <div className="backdrop-blur-sm bg-gray-900/40 p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-red-500/20 to-purple-500/20 blur-3xl -z-10" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-600/20 to-blue-500/20 blur-3xl -z-10" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to grow your investment portfolio?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our network of successful investors and get access to premium startups and investment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#0"
                  className="btn bg-gradient-to-r from-red-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Become An Investor
                </a>
                <a
                  href="#0"
                  className="btn bg-transparent border border-gray-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:border-white transition-all duration-300"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
