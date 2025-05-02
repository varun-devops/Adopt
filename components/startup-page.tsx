"use client";

import { useState, useRef, useEffect } from "react";

export default function StartupPage() {
  // For the counter animation (reusing from hero-home if needed)
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
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Startup Investment Section */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col justify-center" data-aos="fade-right">
              <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
                GET TO KNOW THE PROCESS
              </h2>
              <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
                STARTUP INVESTMENT
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
                <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-600/30 to-red-500/20 blur-3xl" />
                <div className="relative z-10 backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-2xl">
                  <img
                    src="/images/startup-investment.svg" 
                    alt="Startup Investment Process"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* What We Serve Section */}
          <div className="mt-24 text-center" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
              WHAT WE SERVE
            </h2>
            <h1 className="mb-6 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              We are committed to making Startup<br />investments more inclusive
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-10 text-center text-lg text-gray-400">
                With a strong commitment, we strive to create an environment where financial products transcend barriers, 
                ensuring that every aspiring entrepreneur has the opportunity to access the financial tools and 
                resources necessary for their success.
              </p>
            </div>
          </div>
          
          {/* Cards Section */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay={300}>
            {/* Card 1 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Funding Support</h3>
              <p className="text-gray-400">Access to early-stage investment capital from 50k USD to 1MN USD tailored to your startup's needs.</p>
            </div>
            
            {/* Card 2 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Mentorship Network</h3>
              <p className="text-gray-400">Connect with our extensive network of experienced mentors who can guide your startup journey.</p>
            </div>
            
            {/* Card 3 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Growth Resources</h3>
              <p className="text-gray-400">Strategic resources and partnerships to accelerate your startup's growth and market presence.</p>
            </div>
          </div>
          
          {/* Investment Steps Section */}
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
                Simplify your investment process with our networking platform in just four easy steps. Apply, Evaluate, Screen & Pitch, and close the Deal. Join our community, get connected, explore promising opportunities, and pitch your investment strategy. Experience a seamless and efficient approach to investing.
              </p>
            </div>

            {/* Timeline visualization */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left side illustration */}
              <div className="lg:col-span-5 flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div className="absolute -left-10 top-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-red-500/20 to-indigo-600/20 blur-3xl" />
                  <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-2xl">
                    <img
                      src="/images/investment-process.svg"
                      alt="Investment Process"
                      className="relative z-10 max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Right side steps */}
              <div className="lg:col-span-7 relative backdrop-blur-sm bg-gray-900/20 p-8 rounded-2xl border border-gray-700/30" data-aos="fade-left">
                {/* Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-red-500 to-indigo-600 hidden md:block"></div>
                
                {/* Step 1 */}
                <div className="flex mb-14 relative">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                      1
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-white mb-2">APPLY</h3>
                    <p className="text-gray-400">Startup can send their updated pitch at deals@Adopt.com</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex mb-14 relative">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                      2
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-white mb-2">EVALUATE</h3>
                    <p className="text-gray-400">Startup can expect a reply within 1-2 weeks once the deal has been evaluated.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex mb-14 relative">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                      3
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-white mb-2">SCREENING</h3>
                    <p className="text-gray-400">Shortlisted startups gets further notified for a meeting/call with the team & hence the shortlisting happens.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex mb-14 relative">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                      4
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-white mb-2">ENGAGE & PITCH</h3>
                    <p className="text-gray-400">An investment director is assigned followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex mb-14 relative">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                      5
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-white mb-2">TERM SHEET & DEAL DUE DILIGENCE</h3>
                    <p className="text-gray-400">Call/Meeting are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks.</p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex relative">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 text-white font-bold shadow-lg z-10">
                      6
                    </div>
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-white mb-2">DEAL</h3>
                    <p className="text-gray-400">The SSIM document would be signed and an action to call for money gets initiated. The whole process takes 30-60 days.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply for funding CTA */}
            <div className="mt-16 text-center">
              <a
                href="#0"
                className="btn inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Apply For Funding</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Bottom illustration */}
            <div className="mt-24 flex justify-center">
              <div className="relative max-w-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/20 to-indigo-600/20 blur-3xl" />
                <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/20 to-red-500/20 blur-3xl" />
                <div className="backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl border border-gray-700/50 shadow-2xl">
                  <img
                    src="/images/handshake-investment.svg"
                    alt="Investment Deal"
                    className="relative z-10 max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
