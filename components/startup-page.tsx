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
              <h1 className="mb-6 font-nacelle text-4xl font-semibold md:text-5xl">
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
                  className="btn group bg-linear-to-t from-indigo-600 to-red-500 bg-[length:100%_100%] bg-[bottom]   shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Apply For Funding
                    <span className="ml-1 tracking-normal  /50 transition-transform group-hover:translate-x-0.5">
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
                <div className="relative z-10">
                  <img
                    src="/img/startup-investment.svg"
                    alt="Startup Investment Process"
                    className="w-full h-auto max-w-md mx-auto"
                    style={{ minHeight: "410px" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/images/logo.png"; 
                      console.error("Failed to load startup investment SVG");
                    }}
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
            <h1 className="mb-6 font-nacelle text-3xl font-semibold md:text-4xl">
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
              <h3 className="mb-3 text-xl font-semibold  ">Funding Support</h3>
              <p className="text-gray-400">Access to early-stage investment capital from 50k USD to 1MN USD tailored to your startup's needs.</p>
            </div>

            {/* Card 2 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold  ">Mentorship Network</h3>
              <p className="text-gray-400">Connect with our extensive network of experienced mentors who can guide your startup journey.</p>
            </div>

            {/* Card 3 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold  ">Growth Resources</h3>
              <p className="text-gray-400">Strategic resources and partnerships to accelerate your startup's growth and market presence.</p>
            </div>
          </div>

          {/* Investment Steps Section */}
          <div className="mt-32 pb-16" data-aos="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
                STEPS TO INVEST
              </h2>
              <h1 className="mb-6 font-nacelle text-3xl font-semibold  md:text-4xl">
                Invest with <span className="text-red-500">Adopt</span> Network
              </h1>
              <h3 className="mb-10 text-2xl font-medium ">
                It's really simple with us
              </h3>
              <p className="mx-auto max-w-3xl text-center text-lg text-gray-400">
                Navigate through our cosmic investment journey where your startup idea transforms into reality. 
                Follow our spacecraft as it travels through each milestone of the investment process.
              </p>
            </div>

            {/* Space-themed journey visualization - Zigzag Timeline */}
            <div className="relative mt-20 mx-auto space-themed-journey" style={{ minHeight: "900px", maxWidth: "1000px" }}>
              {/* Galaxy Background */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="stars-small"></div>
                <div className="stars-medium"></div>
                <div className="stars-large"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/80 to-gray-900/10 backdrop-blur-sm"></div>
              </div>
              
              {/* Center Command Station */}
              <div className="absolute left-1/2 top-20 transform -translate-x-1/2 z-30">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-900/70 to-purple-900/70 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-red-500/50 animate-ping-slow opacity-40"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-indigo-600/50 animate-spin-slow opacity-40"></div>
                  <div className="relative z-10   text-center font-bold text-xs">
                    <div className="glow-text">ADOPT</div>
                    <div className="text-[8px]">HQ</div>
                  </div>
                </div>
              </div>
              
              {/* Large Rocket Illustration - Replacing the vertical line */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 spaceship-central">
                <svg
                  width="240"
                  height="500"
                  viewBox="0 0 240 500"
                  className="w-40 h-96 md:w-48 md:h-[28rem] lg:w-56 lg:h-[32rem]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Stars */}
                  <circle cx="30" cy="80" r="2" fill="white" className="star-twinkle" style={{"--delay": "2s"} as React.CSSProperties} />
                  <circle cx="200" cy="40" r="1.5" fill="white" className="star-twinkle" style={{"--delay": "1s"} as React.CSSProperties} />
                  <circle cx="170" cy="140" r="2" fill="white" className="star-twinkle" style={{"--delay": "3s"} as React.CSSProperties} />
                  <circle cx="50" cy="200" r="1.5" fill="white" className="star-twinkle" style={{"--delay": "0.5s"} as React.CSSProperties} />
                  <circle cx="190" cy="260" r="2" fill="white" className="star-twinkle" style={{"--delay": "2.5s"} as React.CSSProperties} />
                  
                  {/* Launch Platform/Ground */}
                  <path d="M40 420 C80 410 160 410 200 420 L240 450 L0 450 Z" fill="#1E293B" />
                  <rect x="100" y="420" width="40" height="5" rx="2" fill="#64748B" />
                  
                  {/* Clouds Background / Smoke */}
                  <path className="cloud-anim" d="M0 430 C40 415 80 425 120 420 C160 415 200 425 240 410 L240 450 L0 450 Z" fill="#7C3AED" opacity="0.15" />
                  <path className="cloud-anim-2" d="M0 440 C50 430 100 435 150 430 C200 425 240 430 240 420 L240 450 L0 450 Z" fill="#F97316" opacity="0.15" />
                  
                  {/* Enhanced Rocket Booster Flames */}
                  {/* Main big flame */}
                  <path className="flame-large" d="M105 320 C95 370 105 410 120 430 C135 410 145 370 135 320 Z" fill="url(#flame-gradient)" />
                  
                  {/* Left flowing flame */}
                  <path className="flame-left" 
                    d="M105 330 C85 360 75 390 90 420 C100 400 110 375 105 330 Z" 
                    fill="url(#flame-gradient-left)" 
                  />
                  
                  {/* Right flowing flame */}
                  <path className="flame-right" 
                    d="M135 330 C155 360 165 390 150 420 C140 400 130 375 135 330 Z" 
                    fill="url(#flame-gradient-right)" 
                  />
                  
                  {/* Smaller center flames */}
                  <path className="flame-medium" d="M110 330 C105 360 110 390 120 410 C130 390 135 360 130 330 Z" fill="#F97316" opacity="0.85" />
                  <path className="flame-small" d="M115 340 C112 365 115 385 120 400 C125 385 128 365 125 340 Z" fill="#FBBF24" opacity="0.95" />
                  
                  {/* Launch Pad Fire Reflection */}
                  <ellipse cx="120" cy="430" rx="30" ry="10" fill="url(#reflection-gradient)" opacity="0.7" className="reflection-anim" />
                  
                  {/* Rocket Body - White with better shading */}
                  <rect x="100" y="180" width="40" height="140" fill="url(#body-gradient)" rx="5" />
                  <path d="M120 100 L90 180 L150 180 Z" fill="url(#nose-gradient)" />
                  
                  {/* Rocket Windows */}
                  <circle cx="120" cy="140" r="10" fill="#1E293B" />
                  <circle cx="120" cy="140" r="8" fill="#3B82F6" opacity="0.7" />
                  <circle cx="120" cy="220" r="7" fill="#1E293B" />
                  <circle cx="120" cy="220" r="5" fill="#3B82F6" opacity="0.7" />
                  
                  {/* Rocket Side Boosters */}
                  <path d="M100 230 L80 250 L80 280 L100 280 Z" fill="url(#booster-gradient-left)" />
                  <path d="M140 230 L160 250 L160 280 L140 280 Z" fill="url(#booster-gradient-right)" />
                  
                  {/* Enhanced Rocket Fins - More vibrant orange */}
                  <path d="M100 260 L70 310 L100 310 Z" fill="url(#fin-gradient)" />
                  <path d="M140 260 L170 310 L140 310 Z" fill="url(#fin-gradient)" />
                  
                  {/* Rocket Top Detail */}
                  <rect x="110" y="180" width="20" height="5" fill="#CBD5E1" />
                  
                  {/* Bottom Detail */}
                  <rect x="100" y="305" width="40" height="15" fill="#CBD5E1" rx="2" />
                  <rect x="105" y="315" width="30" height="5" fill="#94A3B8" rx="2" />
                  
                  {/* Adopt Logo On Rocket */}
                  <foreignObject x="105" y="200" width="30" height="30">
                    <div className="h-full w-full flex items-center justify-center">
                      <img src="/images/logo.png" alt="Adopt Logo" className="h-6 w-6" />
                    </div>
                  </foreignObject>
                  
                  {/* Enhanced Smoke Particles */}
                  <circle className="smoke-particle" cx="100" cy="330" r="3" fill="white" opacity="0.3" style={{"--delay": "0s", "--size": "3px", "--duration": "3s"} as React.CSSProperties} />
                  <circle className="smoke-particle" cx="90" cy="350" r="4" fill="white" opacity="0.3" style={{"--delay": "0.5s", "--size": "4px", "--duration": "4s"} as React.CSSProperties} />
                  <circle className="smoke-particle" cx="130" cy="340" r="3.5" fill="white" opacity="0.3" style={{"--delay": "1s", "--size": "3.5px", "--duration": "3.5s"} as React.CSSProperties} />
                  <circle className="smoke-particle" cx="140" cy="360" r="5" fill="white" opacity="0.3" style={{"--delay": "1.5s", "--size": "5px", "--duration": "4.5s"} as React.CSSProperties} />
                  <circle className="smoke-particle" cx="120" cy="370" r="6" fill="white" opacity="0.3" style={{"--delay": "0.2s", "--size": "6px", "--duration": "5s"} as React.CSSProperties} />
                  <circle className="smoke-particle" cx="110" cy="380" r="5" fill="white" opacity="0.3" style={{"--delay": "0.8s", "--size": "5px", "--duration": "4.2s"} as React.CSSProperties} />
                  <circle className="smoke-particle" cx="130" cy="385" r="4" fill="white" opacity="0.3" style={{"--delay": "1.2s", "--size": "4px", "--duration": "3.8s"} as React.CSSProperties} />
                  
                  {/* Enhanced Definitions for gradients */}
                  <defs>
                    {/* Flame gradients */}
                    <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="40%" stopColor="#F97316" />
                      <stop offset="70%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>
                    
                    <linearGradient id="flame-gradient-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="60%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.4" />
                    </linearGradient>
                    
                    <linearGradient id="flame-gradient-right" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="60%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.4" />
                    </linearGradient>
                    
                    <linearGradient id="reflection-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                    </linearGradient>
                    
                    {/* Rocket Body Gradients */}
                    <linearGradient id="body-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8FAFC" />
                      <stop offset="50%" stopColor="#F1F5F9" />
                      <stop offset="100%" stopColor="#E2E8F0" />
                    </linearGradient>
                    
                    <linearGradient id="nose-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F8FAFC" />
                      <stop offset="100%" stopColor="#E2E8F0" />
                    </linearGradient>
                    
                    <linearGradient id="booster-gradient-left" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F1F5F9" />
                      <stop offset="100%" stopColor="#CBD5E1" />
                    </linearGradient>
                    
                    <linearGradient id="booster-gradient-right" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F1F5F9" />
                      <stop offset="100%" stopColor="#CBD5E1" />
                    </linearGradient>
                    
                    <linearGradient id="fin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EA580C" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Updated Zigzag S-shaped Connectors with arrow heads */}
              <div className="s-connector" data-step="1">
                <div className="arrow-head"></div>
              </div>
              <div className="s-connector" data-step="2">
                <div className="arrow-head"></div>
              </div>
              <div className="s-connector" data-step="3">
                <div className="arrow-head"></div>
              </div>
              <div className="s-connector" data-step="4">
                <div className="arrow-head"></div>
              </div>
              <div className="s-connector" data-step="5">
                <div className="arrow-head"></div>
              </div>
              <div className="s-connector" data-step="6">
                <div className="arrow-head"></div>
              </div>
              <div className="s-connector" data-step="7">
                <div className="arrow-head"></div>
              </div>
              
              {/* Step 1 - APPLY (Left) */}
              <div className="absolute top-[120px] left-[10%] sm:left-[15%] md:left-[20%] z-20 space-step" data-step="1">
                <div className="space-step-container" data-step="1">
                  <div className="step-indicator">
                    <div className="step-number">1</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">APPLY</h3>
                    <p className="step-description">Startup can send their updated pitch at deals@Adopt.com</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 - EVALUATE (Right) */}
              <div className="absolute top-[225px] right-[10%] sm:right-[15%] md:right-[20%] z-20 space-step" data-step="2">
                <div className="space-step-container" data-step="2">
                  <div className="step-indicator">
                    <div className="step-number">2</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">EVALUATE</h3>
                    <p className="step-description">Startup can expect a reply within 1-2 weeks once the deal has been evaluated.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 - SCREENING (Left) */}
              <div className="absolute top-[330px] left-[10%] sm:left-[15%] md:left-[20%] z-20 space-step" data-step="3">
                <div className="space-step-container" data-step="3">
                  <div className="step-indicator">
                    <div className="step-number">3</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">SCREENING</h3>
                    <p className="step-description">Shortlisted startups gets further notified for a meeting/call with the team & hence the shortlisting happens.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 - ENGAGE & PITCH (Right) */}
              <div className="absolute top-[435px] right-[10%] sm:right-[15%] md:right-[20%] z-20 space-step" data-step="4">
                <div className="space-step-container" data-step="4">
                  <div className="step-indicator">
                    <div className="step-number">4</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">ENGAGE & PITCH</h3>
                    <p className="step-description">An investment director is assigned followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 - TERM SHEET & DUE DILIGENCE (Left) */}
              <div className="absolute top-[540px] left-[10%] sm:left-[15%] md:left-[20%] z-20 space-step" data-step="5">
                <div className="space-step-container" data-step="5">
                  <div className="step-indicator">
                    <div className="step-number">5</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">TERM SHEET & DUE DILIGENCE</h3>
                    <p className="step-description">Call/Meeting are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 6 - DEAL (Right side) - RELOCATED */}
              <div className="absolute top-[645px] right-[10%] sm:right-[15%] md:right-[20%] z-20 space-step" data-step="6">
                <div className="space-step-container" data-step="6">
                  <div className="step-indicator">
                    <div className="step-number">6</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">DEAL</h3>
                    <p className="step-description">The SSIM document would be signed and an action to call for money gets initiated. The whole process takes 30-60 days.</p>
                  </div>
                </div>
              </div>
              
              {/* Step 7 - SUCCESS (Left side) - RELOCATED */}
              <div className="absolute top-[750px] left-[10%] sm:left-[15%] md:left-[20%] z-20 space-step" data-step="7">
                <div className="space-step-container final-step" data-step="7">
                  <div className="step-indicator">
                    <div className="step-number">7</div>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">SUCCESS</h3>
                    <p className="step-description">Launch your startup to new heights with Adopt Network's funding and resources behind you.</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Asteroids and Space Objects */}
              <div className="asteroid" style={{ "--delay": "5s", "--size": "8px", "--left": "15%", "--top": "20%" } as React.CSSProperties}></div>
              <div className="asteroid" style={{ "--delay": "15s", "--size": "12px", "--left": "80%", "--top": "30%" } as React.CSSProperties}></div>
              <div className="asteroid" style={{ "--delay": "10s", "--size": "6px", "--left": "25%", "--top": "45%" } as React.CSSProperties}></div>
              <div className="asteroid" style={{ "--delay": "8s", "--size": "10px", "--left": "75%", "--top": "60%" } as React.CSSProperties}></div>
              <div className="asteroid" style={{ "--delay": "12s", "--size": "14px", "--left": "20%", "--top": "75%" } as React.CSSProperties}></div>
            </div>
            
            {/* Mobile Version - Simplified */}
            <div className="md:hidden mt-24 space-y-10 px-4">
              {[
                { step: 1, title: "APPLY", desc: "Startup can send their updated pitch at deals@Adopt.com" },
                { step: 2, title: "EVALUATE", desc: "Startup can expect a reply within 1-2 weeks once the deal has been evaluated." },
                { step: 3, title: "SCREENING", desc: "Shortlisted startups gets further notified for a meeting/call with the team & hence the shortlisting happens." },
                { step: 4, title: "ENGAGE & PITCH", desc: "An investment director is assigned followed by signing of the mandate. After approval from the investment committee, startup present at a monthly pitching session." },
                { step: 5, title: "TERM SHEET & DUE DILIGENCE", desc: "Call/Meeting are scheduled with the interested investors to finalize the term sheet. A comprehensive due diligence process takes places for roughly 2-4 weeks." },
                { step: 6, title: "DEAL", desc: "The SSIM document would be signed and an action to call for money gets initiated. The whole process takes 30-60 days." },
                { step: 7, title: "SUCCESS", desc: "Launch your startup to new heights with Adopt Network's funding and resources behind you." }
              ].map((item) => (
                <div key={item.step} className="backdrop-blur-sm bg-gray-900/40 p-6 rounded-xl border border-gray-700/50 shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="relative">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-indigo-600 shadow-lg p-2">
                          <img src="/images/logo.png" alt="Adopt Logo" className="h-8 w-8 animate-pulse" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold">
                          {item.step}
                        </div>
                      </div>
                    </div>
                    <div className="space-step-label">
                      <div className="text-xs text-indigo-400 font-semibold">STEP {item.step}</div>
                      <h3 className="text-xl font-bold  ">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 ml-16">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Apply for funding CTA */}
            <div className="mt-24 text-center">
              <a
                href="#0"
                className="btn inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-indigo-600   font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Apply For Funding</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Updated style definitions for space theme */}
          <style jsx>{`
            /* Space Background */
            .stars-small, .stars-medium, .stars-large {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              display: block;
              background: transparent;
            }
            
            .stars-small {
              background-image: radial-gradient(1px 1px at 20px 30px, white, rgba(0,0,0,0)), 
                radial-gradient(1px 1px at 40px 70px, white, rgba(0,0,0,0)), 
                radial-gradient(1px 1px at 60px 90px, white, rgba(0,0,0,0));
              background-repeat: repeat;
              background-size: 200px 200px;
              animation: twinkle 4s ease-in-out infinite;
              opacity: 0.3;
            }
            
            .stars-medium {
              background-image: radial-gradient(1.5px 1.5px at 120px 40px, white, rgba(0,0,0,0)), 
                radial-gradient(1.5px 1.5px at 80px 130px, white, rgba(0,0,0,0)), 
                radial-gradient(1.5px 1.5px at 140px 80px, white, rgba(0,0,0,0));
              background-repeat: repeat;
              background-size: 300px 300px;
              animation: twinkle 6s ease-in-out infinite;
              opacity: 0.4;
            }
            
            .stars-large {
              background-image: radial-gradient(2px 2px at 180px 100px, white, rgba(0,0,0,0)), 
                radial-gradient(2px 2px at 220px 60px, white, rgba(0,0,0,0)), 
                radial-gradient(2px 2px at 260px 170px, white, rgba(0,0,0,0));
              background-repeat: repeat;
              background-size: 400px 400px;
              animation: twinkle 8s ease-in-out infinite;
              opacity: 0.5;
            }
            
            @keyframes twinkle {
              0% { opacity: 0.3; }
              50% { opacity: 0.8; }
              100% { opacity: 0.3; }
            }
            
            /* Connecting Lines */
            .connector-line {
              position: absolute;
              height: 2px;
              background: linear-gradient(to right, rgba(167, 139, 250, 0.3), rgba(239, 68, 68, 0.3));
              z-index: 10;
            }
            
            /* Spaceship-specific styles */
            .spaceship-central {
              filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.4));
            }
            
            .flame-animation-1 {
              animation: flameFlicker1 2s ease-in-out infinite alternate;
              transform-origin: center bottom;
            }
            
            .flame-animation-2 {
              animation: flameFlicker2 3s ease-in-out infinite alternate;
              transform-origin: center bottom;
            }
            
            @keyframes flameFlicker1 {
              0% { transform: scaleY(0.8) scaleX(0.9); opacity: 0.7; }
              100% { transform: scaleY(1.1) scaleX(1.1); opacity: 0.9; }
            }
            
            @keyframes flameFlicker2 {
              0% { transform: scaleY(0.9) scaleX(0.8); opacity: 0.8; }
              100% { transform: scaleY(1.2) scaleX(1.2); opacity: 0.6; }
            }
            
            .particle-1 {
              animation: moveParticle 20s linear infinite;
            }
            
            .particle-2 {
              animation: moveParticle 15s linear infinite;
              animation-delay: 2s;
            }
            
            .particle-3 {
              animation: moveParticle 25s linear infinite;
              animation-delay: 5s;
            }
            
            .particle-4 {
              animation: moveParticle 18s linear infinite;
              animation-delay: 7s;
            }
            
            .particle-5 {
              animation: moveParticle 22s linear infinite;
              animation-delay: 1s;
            }
            
            @keyframes moveParticle {
              0% { transform: translate(0, 0); opacity: 0.2; }
              25% { transform: translate(10px, 15px); opacity: 0.7; }
              50% { transform: translate(5px, 30px); opacity: 0.5; }
              75% { transform: translate(-5px, 15px); opacity: 0.7; }
              100% { transform: translate(0, 0); opacity: 0.2; }
            }
            
            /* Spaceships and Steps */
            .space-step-container {
              background: rgba(17, 24, 39, 0.85);
              backdrop-filter: blur(8px);
              border-radius: 12px;
              border: 1px solid rgba(107, 114, 128, 0.3);
              padding: 12px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
              width: 240px;
              transition: all 0.3s ease;
              position: relative;
            }
            
            .space-step-container:hover {
              transform: translateY(-5px) scale(1.03);
              box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
              border-color: rgba(239, 68, 68, 0.5);
              z-index: 50;
            }
            
            .final-step {
              background: linear-gradient(135deg, rgba(17, 24, 39, 0.9), rgba(79, 70, 229, 0.2));
              border-color: rgba(239, 68, 68, 0.4);
            }
            
            .step-indicator {
              position: absolute;
              top: -15px;
              left: 20px;
              width: 30px;
              height: 30px;
              background: linear-gradient(135deg, #ef4444, #6366f1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: bold;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            }
            
            .step-number {
              font-size: 16px;
            }
            
            .step-title {
              color: white;
              font-size: 16px;
              font-weight: 700;
              margin: 12px 0 8px 0;
            }
            
            .step-description {
              color: #bfbfbf;
              font-size: 13px;
              line-height: 1.4;
            }
            
            /* Glowing Text */
            .glow-text {
              text-shadow: 0 0 5px #818cf8, 0 0 10px #818cf8, 0 0 15px #ef4444;
              animation: glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes glow {
              from { text-shadow: 0 0 5px #818cf8, 0 0 10px #818cf8, 0 0 15px #ef4444; }
              to { text-shadow: 0 0 10px #818cf8, 0 0 20px #818cf8, 0 0 30px #ef4444; }
            }
            
            /* Asteroids */
            .asteroid {
              position: absolute;
              width: var(--size);
              height: var(--size);
              background-color: #aaa;
              border-radius: 50%;
              left: var(--left);
              top: var(--top);
              filter: blur(1px);
              animation: floatingAsteroid 30s linear infinite;
              animation-delay: var(--delay);
              z-index: 5;
              opacity: 0.5;
            }
            
            @keyframes floatingAsteroid {
              0% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
              50% { transform: translate(30px, 30px) rotate(180deg); opacity: 0.5; }
              100% { transform: translate(0, 0) rotate(360deg); opacity: 0.2; }
            }
            
            /* Slow animations */
            .animate-ping-slow {
              animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
            
            @keyframes ping {
              75%, 100% { transform: scale(1.5); opacity: 0; }
            }
            
            .animate-spin-slow {
              animation: spin 10s linear infinite;
            }
            
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            
            /* S-shaped connectors - updated for new step positions */
            .s-connector {
              position: absolute;
              height: 2px;
              border: none;
              background: transparent;
              z-index: 10;
              opacity: 0.7;
            }
            
            .s-connector[data-step="1"] {
              top: 140px;
              left: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(167, 139, 250, 0.6);
              border-bottom-right-radius: 50px;
              border-top-right-radius: 50px;
              transform: skewY(-20deg);
            }
            
            .s-connector[data-step="2"] {
              top: 245px;
              right: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(239, 68, 68, 0.6);
              border-bottom-left-radius: 50px;
              border-top-left-radius: 50px;
              transform: skewY(20deg);
            }
            
            .s-connector[data-step="3"] {
              top: 350px;
              left: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(167, 139, 250, 0.6);
              border-bottom-right-radius: 50px;
              border-top-right-radius: 50px;
              transform: skewY(-20deg);
            }
            
            .s-connector[data-step="4"] {
              top: 455px;
              right: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(239, 68, 68, 0.6);
              border-bottom-left-radius: 50px;
              border-top-left-radius: 50px;
              transform: skewY(20deg);
            }
            
            .s-connector[data-step="5"] {
              top: 560px;
              left: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(167, 139, 250, 0.6);
              border-bottom-right-radius: 50px;
              border-top-right-radius: 50px;
              transform: skewY(-20deg);
            }
            
            .s-connector[data-step="6"] {
              top: 665px;
              right: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(239, 68, 68, 0.6);
              border-bottom-left-radius: 50px;
              border-top-left-radius: 50px;
              transform: skewY(20deg);
            }
            
            .s-connector[data-step="7"] {
              top: 770px;
              left: calc(50% - 120px);
              width: 140px;
              border-top: 2px dashed rgba(167, 139, 250, 0.6);
              border-bottom-right-radius: 50px;
              border-top-right-radius: 50px;
              transform: skewY(-20deg);
            }
            
            .arrow-head {
              position: absolute;
              right: -6px;
              top: -4px;
              width: 8px;
              height: 8px;
              border-top: 2px solid rgba(239, 68, 68, 0.8);
              border-right: 2px solid rgba(239, 68, 68, 0.8);
              transform: rotate(45deg);
            }
            
            .s-connector[data-step="1"] .arrow-head,
            .s-connector[data-step="3"] .arrow-head,
            .s-connector[data-step="5"] .arrow-head,
            .s-connector[data-step="7"] .arrow-head {
              right: -6px;
              border-color: rgba(167, 139, 250, 0.8);
            }
            
            .s-connector[data-step="2"] .arrow-head,
            .s-connector[data-step="4"] .arrow-head,
            .s-connector[data-step="6"] .arrow-head {
              left: -6px;
              right: auto;
              border-color: rgba(239, 68, 68, 0.8);
              transform: rotate(-135deg);
            }
            
            /* Updated Rocket Animation */
            .flame-large {
              animation: flameFlicker 3s ease-in-out infinite alternate;
              transform-origin: center bottom;
              filter: drop-shadow(0 5px 15px rgba(249, 115, 22, 0.8));
            }
            
            .flame-left {
              animation: flameFlowLeft 2.5s ease-in-out infinite alternate;
              transform-origin: right center;
              filter: drop-shadow(0 5px 10px rgba(249, 115, 22, 0.6));
            }
            
            .flame-right {
              animation: flameFlowRight 2.8s ease-in-out infinite alternate;
              transform-origin: left center;
              filter: drop-shadow(0 5px 10px rgba(249, 115, 22, 0.6));
            }
            
            .flame-medium {
              animation: flameFlicker 2.2s ease-in-out infinite alternate;
              transform-origin: center bottom;
              animation-delay: 0.3s;
              filter: drop-shadow(0 5px 10px rgba(249, 115, 22, 0.7));
            }
            
            .flame-small {
              animation: flameFlicker 1.8s ease-in-out infinite alternate;
              transform-origin: center bottom;
              animation-delay: 0.5s;
              filter: drop-shadow(0 5px 5px rgba(251, 191, 36, 0.8));
            }
            
            .reflection-anim {
              animation: reflectionPulse 2s ease-in-out infinite alternate;
            }
            
            @keyframes flameFlicker {
              0% { transform: scaleY(0.9) scaleX(0.95); opacity: 0.85; }
              100% { transform: scaleY(1.1) scaleX(1.05); opacity: 1; }
            }
            
            @keyframes flameFlowLeft {
              0% { transform: scaleY(0.9) scaleX(0.9) skewX(-5deg); opacity: 0.7; }
              100% { transform: scaleY(1.1) scaleX(1.1) skewX(-10deg); opacity: 0.9; }
            }
            
            @keyframes flameFlowRight {
              0% { transform: scaleY(0.92) scaleX(0.92) skewX(5deg); opacity: 0.75; }
              100% { transform: scaleY(1.08) scaleX(1.08) skewX(10deg); opacity: 0.95; }
            }
            
            @keyframes reflectionPulse {
              0% { opacity: 0.5; transform: scaleX(0.9); }
              100% { opacity: 0.8; transform: scaleX(1.1); }
            }
            
            /* Cloud Animation */
            .cloud-anim {
              animation: cloudMove 8s ease-in-out infinite alternate;
            }
            
            .cloud-anim-2 {
              animation: cloudMove 10s ease-in-out infinite alternate;
              animation-delay: 1s;
            }
            
            @keyframes cloudMove {
              0% { transform: translateX(-10px); opacity: 0.1; }
              100% { transform: translateX(10px); opacity: 0.2; }
            }
            
            /* Enhanced Smoke Particles */
            .smoke-particle {
              animation: enhancedSmokeRise var(--duration) ease-in-out infinite;
              animation-delay: var(--delay);
            }
            
            @keyframes enhancedSmokeRise {
              0% { 
                transform: translateY(0) translateX(0);
                opacity: 0.4; 
                r: var(--size); 
              }
              50% {
                opacity: 0.25;
                r: calc(var(--size) * 2);
              }
              100% { 
                transform: translateY(-80px) translateX(calc(Math.random() * 30px - 15px));
                opacity: 0; 
                r: calc(var(--size) * 4);
              }
            }
            
            /* Adjust the layout size to accommodate the longer path */
            .space-themed-journey {
              min-height: 900px !important;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
