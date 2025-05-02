"use client";

import { useState, useEffect, useRef } from "react";

export default function HeroHome() {
  // For the counter animation
  const [countedUp, setCountedUp] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const stats = [
    { value: 85, label: "Portfolio Companies", icon: "portfolio" },
    { value: 5, label: "Exits", icon: "exits" },
    { value: 2000, label: "Investor Network", icon: "network" },
    { value: 85, label: "Cr+ Funds Deployed", icon: "funds" }
  ];
  
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

  const [typedText, setTypedText] = useState("");
  const fullText = "IDEATE INNOVATE INVEST";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 150); 

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              {typedText}
            </h1>
            <div className="mx-auto max-w-3xl">
              
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      buttnn
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    login
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-4" 
            data-aos="fade-up" 
            data-aos-delay={800}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-3xl border-2 border-[#3d2b2b] bg-clip-border p-8 shadow-xl transition-transform hover:scale-[1.05] hover:shadow-2xl"
              >
                {/* Decorative background element */}
                <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/30 to-indigo-500/20 blur-3xl" />
                
                {/* SVG Icon based on stat type */}
                <div 
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl p-4 shadow-lg"
                  style={{
                    border: "1px solid #3d2b2b",
                    background: "#2e292a",
                  }}
                >
                  {stat.icon === 'portfolio' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  )}
                  
                  {stat.icon === 'exits' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  )}
                  
                  {stat.icon === 'network' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  )}
                  
                  {stat.icon === 'funds' && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                
                {/* Count with animation */}
                <div className="mb-2 font-semibold">
                  <span className="relative inline-flex text-3xl font-extrabold text-white">
                    {countedUp ? (
                      <CountUpAnimation
                        end={stat.value}
                        duration={2000}
                      />
                    ) : (
                      "0"
                    )}
                    {stat.value === 85 && stat.icon === 'portfolio' && "+"}
                    {stat.value === 5 && stat.icon === 'exits' && "+"}
                    {stat.value === 2000 && stat.icon === 'network' && "+"}
                  </span>
                </div>
                
                {/* Label */}
                <p className="text-lg font-medium text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// Animation component for counting up
interface CountUpAnimationProps {
  end: number;
  duration: number;
}

function CountUpAnimation({ end, duration }: CountUpAnimationProps) {
  const [count, setCount] = useState(0);
  const stepTime = Math.abs(Math.floor(duration / end));
  
  useEffect(() => {
    if (count < end) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 1, end));
      }, stepTime);
      
      return () => clearTimeout(timer);
    }
  }, [count, end, stepTime]);
  
  return <>{count}</>;
}
