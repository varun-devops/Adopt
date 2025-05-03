"use client";

import { useState, useRef, useEffect } from "react";

// CountUp animation component for statistics
function CountUpAnimation({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        setCount(Math.min(Math.floor((progress / duration) * end), end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return <>{count}</>;
}

// Sample portfolio companies data
const portfolioCompanies = [
  {
    id: 1,
    name: "TechNova",
    image: "/images/portfolio/company1.svg",
    category: "AI & Machine Learning",
    funding: "$2.5M Seed",
    year: 2022
  },
  {
    id: 2,
    name: "GreenEnergy",
    image: "/images/portfolio/company2.svg",
    category: "CleanTech",
    funding: "$4.2M Series A",
    year: 2021
  },
  {
    id: 3,
    name: "HealthPulse",
    image: "/images/portfolio/company3.svg",
    category: "HealthTech",
    funding: "$1.8M Seed",
    year: 2023
  },
  {
    id: 4,
    name: "FinEdge",
    image: "/images/portfolio/company4.svg",
    category: "FinTech",
    funding: "$3.7M Series A",
    year: 2022
  },
  {
    id: 5,
    name: "RetailFlow",
    image: "/images/portfolio/company5.svg",
    category: "Retail Tech",
    funding: "$2.1M Seed",
    year: 2021
  },
  {
    id: 6,
    name: "EduSpark",
    image: "/images/portfolio/company6.svg",
    category: "EdTech",
    funding: "$1.5M Seed",
    year: 2023
  },
  {
    id: 7,
    name: "LogiTech",
    image: "/images/portfolio/company7.svg",
    category: "Supply Chain",
    funding: "$3.3M Series A",
    year: 2022
  },
  {
    id: 8,
    name: "RoboInnovate",
    image: "/images/portfolio/company8.svg",
    category: "Robotics",
    funding: "$5.2M Series A",
    year: 2021
  },
  {
    id: 9,
    name: "CloudSecure",
    image: "/images/portfolio/company9.svg",
    category: "Cybersecurity",
    funding: "$2.7M Seed",
    year: 2023
  },
];

export default function PortfolioPage() {
  // For the counter animation
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
      
      {/* Starfield background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="starfield"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Portfolio Top Section */}
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
              POWERFUL COLLABORATIONS
            </h2>
            <h1 className="mb-6 font-nacelle text-3xl font-semibold text-gray-100 md:text-5xl">
              ADOPT PORTFOLIO
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-10 text-center text-lg text-gray-400">
                Collaboration comes with power! Adopt network takes pride in collaborating with over 85+ companies 
                and completing 10000+ startup evaluations. Adopt's global presence helps businesses establish 
                themselves in the global market.
              </p>
            </div>
            
            {/* Center illustration */}
            <div className="flex justify-center mb-16" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative">
                <div className="absolute -top-10 left-1/2 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl transform -translate-x-1/2"></div>
                <div className="relative z-10 backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
                  <img
                    src="/images/universe-portfolio.svg" 
                    alt="Portfolio Universe"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" 
            data-aos="fade-up" 
            data-aos-delay={500}
          >
            {/* Stat 1 */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#3d2b2b] bg-clip-border p-8 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/30 to-indigo-500/20 blur-3xl"></div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <span className="relative inline-flex text-4xl font-extrabold text-white">
                  {countedUp ? <CountUpAnimation end={10} duration={2000} /> : "0"}
                  <span>%</span>
                </span>
              </div>
              <p className="text-lg font-medium text-gray-400">Partial exits</p>
            </div>
            
            {/* Stat 2 */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#3d2b2b] bg-clip-border p-8 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/30 to-indigo-500/20 blur-3xl"></div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="relative inline-flex text-4xl font-extrabold text-white">
                  {countedUp ? <CountUpAnimation end={20} duration={2000} /> : "0"}
                  <span>%</span>
                </span>
              </div>
              <p className="text-lg font-medium text-gray-400">Follow on rounds</p>
            </div>
            
            {/* Stat 3 */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-[#3d2b2b] bg-clip-border p-8 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/30 to-red-500/20 blur-3xl"></div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-indigo-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <div>
                <span className="relative inline-flex text-4xl font-extrabold text-white">
                  {countedUp ? <CountUpAnimation end={30} duration={2000} /> : "0"}
                  <span>%</span>
                </span>
              </div>
              <p className="text-lg font-medium text-gray-400">Closing the follow on rounds</p>
            </div>
          </div>
          
          {/* Portfolio Companies Section */}
          <div className="mt-24" data-aos="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-xl font-semibold uppercase text-red-500">
                OUR PORTFOLIO
              </h2>
              <h1 className="mb-6 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
                Companies We've Invested In
              </h1>
              <p className="mx-auto max-w-3xl text-center text-lg text-gray-400">
                We partner with innovative startups across various sectors, providing not just capital but strategic guidance to help them scale and succeed.
              </p>
            </div>
            
            {/* Portfolio grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCompanies.map((company) => (
                <div 
                  key={company.id} 
                  className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-6 shadow-xl transition-transform hover:scale-[1.02]"
                  data-aos="fade-up"
                  data-aos-delay={company.id * 100}
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-red-500/10 to-indigo-600/10 p-4">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{company.name}</h3>
                  <p className="mb-4 text-indigo-400">{company.category}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{company.funding}</span>
                    <span>Founded {company.year}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All button */}
            <div className="mt-16 text-center">
              <a
                href="#0"
                className="btn inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>View All Portfolio</span>
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
                    src="/images/universe-connection.svg"
                    alt="Universe Connection"
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
