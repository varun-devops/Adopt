"use client";

import { useState, useEffect } from "react";

export default function FundingPage() {
  // State for animation control
  const [isVisible, setIsVisible] = useState(false);

  // Handle visibility for animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section>
      {/* Background bubbles for glassmorphism effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Startup Investment Section */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col justify-center" data-aos="fade-right">
              <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
                STARTUP FUNDING
              </h2>
              <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
                Funding for <span className="text-red-500">Innovators</span><br />
                Fuel Your Startup's Growth
              </h1>
              <p className="mb-8 text-lg text-gray-400">
                Adopt Network invests anywhere between 50k USD-1MN USD in early stage startups across
                the globe. Ideally Adopt Network prefers to invest in a seed/angel round or co-invest
                in a Pre-Series stage. Our visionary process stays aligned with the modern timeline
                of entrepreneurship to turn your ideas into remarkable milestones.
              </p>
              <div className="mt-2">
                <a
                  className="btn group bg-linear-to-t from-indigo-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Apply For Funding
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
                    src="/images/funding-illustration.svg" 
                    alt="Startup Funding"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Investment Steps Solar System Section */}
          <div className="mt-32 pb-16" data-aos="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
                STEPS TO INVEST
              </h2>
              <h1 className="mb-6 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                Invest with <span className="text-red-500">Adopt</span> Network
              </h1>
              <h3 className="mb-10 text-2xl font-medium text-gray-100">
                It's really simple with us
              </h3>
              <p className="mx-auto max-w-3xl text-center text-lg text-gray-400">
                Navigate through our cosmic investment process in six orbital phases. From application to deal closure, 
                our celestial journey transforms your startup idea into reality.
              </p>
            </div>

            {/* Solar System Visualization */}
            <div className="relative mx-auto" style={{ height: "800px", maxWidth: "1200px" }}>
              {/* Space Station (Center) */}
              <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative backdrop-blur-sm bg-gray-900/60 p-6 rounded-full border border-gray-700/80 shadow-2xl h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-800/30 to-purple-800/30 animate-pulse"></div>
                  <div className="relative z-10">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-32 md:h-32">
                      {/* Space Station SVG */}
                      <circle cx="50" cy="50" r="15" fill="#3730a3" />
                      <path d="M50 10 L60 25 L40 25 Z" fill="#dc2626" />
                      <path d="M50 90 L60 75 L40 75 Z" fill="#dc2626" />
                      <path d="M10 50 L25 60 L25 40 Z" fill="#dc2626" />
                      <path d="M90 50 L75 60 L75 40 Z" fill="#dc2626" />
                      <circle cx="50" cy="50" r="5" fill="#e5e7eb" />
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold">
                      <span className="text-xs md:text-base">ADOPT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbital Paths */}
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div 
                  key={`orbit-${index}`} 
                  className={`absolute left-1/2 top-1/2 rounded-full border border-gray-700/30 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
                  style={{ 
                    width: `${(index + 1) * 140}px`, 
                    height: `${(index + 1) * 140}px`,
                    borderWidth: '1px',
                  }}
                ></div>
              ))}

              {/* Step 1 - APPLY */}
              <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                   style={{ 
                     left: '50%', 
                     top: '25%', 
                     transform: 'translateX(-50%) rotate(0deg)',
                     animation: 'orbit1 40s linear infinite'
                   }}>
                <div className="relative backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 shadow-xl max-w-xs transform -translate-x-1/2">
                  <div className="absolute -top-6 -left-6 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">1</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">APPLY</h3>
                  <p className="text-gray-400 text-sm">Startup can send their updated pitch at deals@Adopt.com</p>
                </div>
              </div>

              {/* Step 2 - EVALUATE */}
              <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                   style={{ 
                     left: '75%', 
                     top: '35%', 
                     transform: 'translateX(-50%) rotate(0deg)',
                     animation: 'orbit2 45s linear infinite'
                   }}>
                <div className="relative backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 shadow-xl max-w-xs transform -translate-x-1/2">
                  <div className="absolute -top-6 -left-6 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">2</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">EVALUATE</h3>
                  <p className="text-gray-400 text-sm">Startup can expect a reply within 1-2 weeks once the deal has been evaluated.</p>
                </div>
              </div>

              {/* Step 3 - SCREENING */}
              <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                   style={{ 
                     left: '80%', 
                     top: '65%', 
                     transform: 'translateX(-50%) rotate(0deg)',
                     animation: 'orbit3 50s linear infinite'
                   }}>
                <div className="relative backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 shadow-xl max-w-xs transform -translate-x-1/2">
                  <div className="absolute -top-6 -left-6 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">3</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">SCREENING</h3>
                  <p className="text-gray-400 text-sm">Shortlisted startups gets further notified for a meeting/call with the team & hence the shortlisting happens.</p>
                </div>
              </div>

              {/* Step 4 - ENGAGE & PITCH */}
              <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                   style={{ 
                     left: '50%', 
                     top: '80%', 
                     transform: 'translateX(-50%) rotate(0deg)',
                     animation: 'orbit4 55s linear infinite'
                   }}>
                <div className="relative backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 shadow-xl max-w-xs transform -translate-x-1/2">
                  <div className="absolute -top-6 -left-6 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">4</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">ENGAGE & PITCH</h3>
                  <p className="text-gray-400 text-sm">An investment director is assigned followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session.</p>
                </div>
              </div>

              {/* Step 5 - TERM SHEET & DUE DILIGENCE */}
              <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                   style={{ 
                     left: '25%', 
                     top: '65%', 
                     transform: 'translateX(-50%) rotate(0deg)',
                     animation: 'orbit5 60s linear infinite'
                   }}>
                <div className="relative backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 shadow-xl max-w-xs transform -translate-x-1/2">
                  <div className="absolute -top-6 -left-6 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">5</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">TERM SHEET & DUE DILIGENCE</h3>
                  <p className="text-gray-400 text-sm">Call/Meeting are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks.</p>
                </div>
              </div>

              {/* Step 6 - DEAL */}
              <div className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                   style={{ 
                     left: '20%', 
                     top: '35%', 
                     transform: 'translateX(-50%) rotate(0deg)',
                     animation: 'orbit6 65s linear infinite'
                   }}>
                <div className="relative backdrop-blur-sm bg-gray-900/40 p-4 rounded-xl border border-gray-700/50 shadow-xl max-w-xs transform -translate-x-1/2">
                  <div className="absolute -top-6 -left-6 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">6</div>
                  <h3 className="text-lg font-bold text-white mb-2 mt-4">DEAL</h3>
                  <p className="text-gray-400 text-sm">The SSIM document would be signed and an action to call for money gets initiated. The whole process takes 30-60 days.</p>
                </div>
              </div>
            </div>

            {/* Responsive version for small screens */}
            <div className="md:hidden mt-20">
              <div className="space-y-8">
                {[
                  { num: 1, title: "APPLY", desc: "Startup can send their updated pitch at deals@Adopt.com" },
                  { num: 2, title: "EVALUATE", desc: "Startup can expect a reply within 1-2 weeks once the deal has been evaluated." },
                  { num: 3, title: "SCREENING", desc: "Shortlisted startups gets further notified for a meeting/call with the team & hence the shortlisting happens." },
                  { num: 4, title: "ENGAGE & PITCH", desc: "An investment director is assigned followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session." },
                  { num: 5, title: "TERM SHEET & DUE DILIGENCE", desc: "Call/Meeting are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks." },
                  { num: 6, title: "DEAL", desc: "The SSIM document would be signed and an action to call for money gets initiated. The whole process takes 30-60 days." }
                ].map((step, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                        {step.num}
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply for funding CTA */}
            <div className="mt-20 text-center">
              <a
                href="#0"
                className="btn bg-gradient-to-r from-red-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply For Funding
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes orbit1 {
          0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          0% { transform: rotate(60deg) translateX(210px) rotate(-60deg); }
          100% { transform: rotate(420deg) translateX(210px) rotate(-420deg); }
        }
        @keyframes orbit3 {
          0% { transform: rotate(120deg) translateX(270px) rotate(-120deg); }
          100% { transform: rotate(480deg) translateX(270px) rotate(-480deg); }
        }
        @keyframes orbit4 {
          0% { transform: rotate(180deg) translateX(330px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(330px) rotate(-540deg); }
        }
        @keyframes orbit5 {
          0% { transform: rotate(240deg) translateX(390px) rotate(-240deg); }
          100% { transform: rotate(600deg) translateX(390px) rotate(-600deg); }
        }
        @keyframes orbit6 {
          0% { transform: rotate(300deg) translateX(450px) rotate(-300deg); }
          100% { transform: rotate(660deg) translateX(450px) rotate(-660deg); }
        }
      `}</style>
    </section>
  );
}
