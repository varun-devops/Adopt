"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Team member data structure
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedIn: string;
  bio: string;
}

// Partner/Advisor data structure
interface Partner {
  id: number;
  name: string;
  role: string;
  image: string;
  company: string;
}

// Team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "KARAN VERMA",
    position: "Co-Founder & Director",
    image: "/images/team/karan-verma.jpg", 
    linkedIn: "https://linkedin.com/in/karanverma",
    bio: "Karan Verma is an Engineer by Education but an Entrepreneur by heart. He started his career as a field-core sales person in a SME and has handled B2B, Retail and E-commerce sales at Synergy Electronics Ltd. After his short stint in Sales he started his entrepreneurship journey with Adopt Network. Karan is passionate about networking and responsible for growing the investor community and manages relationships with various stakeholders. His expertise lies in Deal Structuring, Operations, Business Development and fostering Entrepreneurship amongst youth."
  },
  {
    id: 2,
    name: "DR. DINESH SINGH",
    position: "Co-Founder & Director",
    image: "/images/team/dr-dinesh-singh.jpg",
    linkedIn: "https://linkedin.com/in/drdineshsingh",
    bio: "Dr. Dinesh Singh is a Serial Entrepreneur, with a decade of experience in healthcare domain.He started his career as a medical practitioner, later he forayed into the hospitality sector working as a health consultant with the likes of Hilton, Marriott, and many more. From there he moved to working with corporates & PSU like HPCL, IOCL, and DNV group. JP/CNH etc. ADOPT has allowed him to interact with numerous startups, evaluate business models and help them scale with his vast experience in diverse domains."
  },
  {
    id: 3,
    name: "ADITYA ARORA",
    position: "CEO",
    image: "/images/team/aditya-arora.jpg",
    linkedIn: "https://linkedin.com/in/adityaarora",
    bio: "Aditya has been recognized as a Successful Young Entrepreneur and Achiever on various National and International platforms. He has been invited to speak and deliver guest lectures at 300+ Institutions globally and has won many prestigious awards for his work. Some of them include Parliamentary Awards, Microsoft Top 15 Change-makers of India, REX Karmaveer Chakra by United Nations, National Entrepreneurship Award by the Govt. of India, 'Young Entrepreneur of the Year' Award among several others. Currently, he is the CEO at Adopt Network Pvt.LTD."
  },
  {
    id: 4,
    name: "SANJAY AGRAWAL",
    position: "Chief Strategy Officer",
    image: "/images/team/sanjay-agrawal.jpg",
    linkedIn: "https://linkedin.com/in/sanjayagrawal",
    bio: "Sanjay is a finance professional turned entrepreneur who has worked in Media & Entertainment, Telecom, and Finance Industries. He has held different senior-level management positions in corporates like ESPN, Nokia, RHI Sports, and Tati Global NZ. He has 25+ years of extensive experience in financial operations, strategic and transformation and reforms in creating value through partnerships & innovation. Sanjay also brings experience and understanding of all aspects of business strategy and funding along with the experience of building Supply chain from Auckland, New Zealand."
  },
  {
    id: 5,
    name: "APOORV GUPTA",
    position: "Investment Officer",
    image: "/images/team/apoorv-gupta.jpg",
    linkedIn: "https://linkedin.com/in/apoorvgupta",
    bio: "Apoorv Gupta is a Chartered Accountant, previously held a Certified Practising Accountant (CPA) membership with the CPA Australia, regulatory body of Chartered Accounts in Australian jurisdiction. He is extremely passionate about finance and entrepreneurship. As a co-founder with Training Business Management Private Limited, he has shown again and again that he is the brain trust on all things accounting and advisory. His entrepreneurial journey has seen him build a powerful professional practice that guides clients through Private Limited's processes and help the business take the most prudent financial decisions. After completing an education in Bachelors in Finance and CA in 2012, He began his career working in KPMG Industry and then in tax consulting role with PwC."
  },
  {
    id: 6,
    name: "HARSHIKA PALIWAL",
    position: "Principal",
    image: "/images/team/harshika-paliwal.jpg",
    linkedIn: "https://linkedin.com/in/harshikapaliwal",
    bio: "Harshika Paliwal is the Principal at Adopt and has been associated with the VC Industry for 4 years now, she has worked with family offices and Accelerators earlier to this. At Adopt she looks at strategic partnerships with family offices and next round of Fundraising for the portfolio startups. She is active an Angel Investor as well."
  }
];

// Partners/Advisors data
const partners: Partner[] = [
  {
    id: 1,
    name: "AKSHAY CHATURVEDI",
    role: "Advisor & Investor",
    image: "/images/partners/akshay-chaturvedi.jpg",
    company: "Founder & CEO, Leverage Edu"
  },
  {
    id: 2,
    name: "ABHISHEK GUPTA",
    role: "Advisor & Investor",
    image: "/images/partners/abhishek-gupta.jpg",
    company: "Managing Partner, Turbosun Energy"
  },
  {
    id: 3,
    name: "MALAY SAURABH",
    role: "Advisor & Investor",
    image: "/images/partners/malay-saurabh.jpg",
    company: "Co-Founder, Obverse"
  },
  {
    id: 4,
    name: "RAHUL GUPTA",
    role: "Advisor & Investor",
    image: "/images/partners/rahul-gupta.jpg",
    company: "Co-Founder and Managing Director, Elevation Capventures"
  },
  {
    id: 5,
    name: "SHREYANS JAIN",
    role: "Advisor & Investor",
    image: "/images/partners/shreyans-jain.jpg",
    company: "Director - Prabhat Capital"
  },
  {
    id: 6,
    name: "SMRITI TOMAR",
    role: "Advisor & Investor",
    image: "/images/partners/smriti-tomar.jpg",
    company: "Founder & CEO, Stack"
  }
];

export default function AboutPage() {
  // For any animations or counters if needed
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
          {/* About Us Top Section */}
          <div className="text-center" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
              WHO WE ARE
            </h2>
            <h1 className="mb-6 font-nacelle text-3xl font-semibold  md:text-5xl">
              THE FUTURE OF PRIVATE INVESTING
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-10 text-center text-lg text-gray-400">
                Our zeal to become the bridge between a proposal and a golden opportunity makes us stand apart in the crowd. 
                Hence, with the idea of nurturing the entrepreneurship skills of the country, our goal is to become the future 
                of private investment and startups. With a wide range of networks across the geographic tunnel, we aim at 
                creating a massive network of investing.
              </p>
            </div>
            
            {/* Center illustration */}
            <div className="flex justify-center mb-16" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative">
                <div className="absolute -top-10 left-1/2 w-80 h-80"></div>
                <div className="relative z-10">
                  <img
                    src="/img/about.svg" 
                    alt="Investment Universe"
                    className="max-w-full h-auto"
                    style={{ minHeight: "320px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Investment Cards */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8" 
            data-aos="fade-up" 
            data-aos-delay={500}
          >
            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-clip-border p-6 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/30 to-indigo-500/20 blur-3xl"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold  ">Stages</h3>
              </div>
              <p className="text-gray-400">Seed to Pre Series A</p>
            </div>
            
            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-clip-border p-6 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/30 to-indigo-500/20 blur-3xl"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold  ">Ticket size</h3>
              </div>
              <p className="text-gray-400">USD 50k to USD 500k</p>
            </div>
            
            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-clip-border p-6 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/30 to-red-500/20 blur-3xl"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold  ">Min. Cheque size</h3>
              </div>
              <p className="text-gray-400">USD 7k per investor</p>
            </div>
            
            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-clip-border p-6 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02]">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/30 to-indigo-500/20 blur-3xl"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold  ">Network</h3>
              </div>
              <p className="text-gray-400">2000+ investors (Angels/HNI'S/VC'S)</p>
            </div>
            
            {/* Card 5 */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 bg-clip-border p-6 shadow-xl backdrop-blur-sm bg-gray-900/30 transition-transform hover:scale-[1.02] md:col-span-2 lg:col-span-1">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/30 to-red-500/20 blur-3xl"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-indigo-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold  ">Investor Presence</h3>
              </div>
              <p className="text-gray-400">India, Singapore, Dubai, USA, UK & Canada</p>
            </div>
          </div>
          
          {/* Team Members Section */}
          <div className="mt-32" data-aos="fade-up">
            <div className="text-center mb-16">
              <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
                OUR TEAM
              </h2>
              <h1 className="mb-6 font-nacelle text-3xl font-semibold md:text-4xl">
                The amazing team behind <span className="text-red-500">ADOPT</span>
              </h1>
              <p className="mx-auto max-w-3xl text-center text-lg text-gray-400">
                Get acquainted with our diverse and talented team members, each bringing their unique expertise and passion to foster meaningful connections and drive innovation. Discover their backgrounds, skills, and shared vision,
                as they work tirelessly to create an exceptional networking experience for our valued visitors.
              </p>
            </div>
            
            {/* Team grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl transition-transform hover:scale-[1.02]"
                  data-aos="fade-up"
                  data-aos-delay={member.id * 100}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-red-500/30"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <a 
                      href={member.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5  " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold  ">{member.name}</h3>
                    <p className="text-indigo-400 mb-4">{member.position}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Partners & Visionaries Section */}
            <div className="mt-32" data-aos="fade-up">
              <div className="text-center mb-16">
                <h2 className="mb-4 text-xl font-semibold uppercase text-red-500">
                  PARTNERS AND VISIONARIES
                </h2>
                <h1 className="mb-6 font-nacelle text-3xl font-semibold md:text-4xl">
                  Investors & Advisors
                </h1>
                <p className="mx-auto max-w-3xl text-center text-lg text-gray-400">
                  Introducing our esteemed roster of accomplished investors and advisors. Explore this section to learn more about the individuals shaping the future of our platform and discover the invaluable insights they bring to our community.
                </p>
              </div>


                {/* Bottom illustration */}
            <div className="mt-24 flex justify-center">
              <div className="relative max-w-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-500/20 to-indigo-600/20 blur-3xl" />
                <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-600/20 to-red-500/20 blur-3xl" />
                <div className="illustration-container">
                  <img
                    src="/img/file5.svg"
                    alt="Galaxy Connection"
                    className="relative z-10 max-w-full h-auto"
                    style={{ minHeight: "230px" }}
                  />
                </div>
              </div>
            </div>
              
              {/* Partners grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner) => (
                  <div 
                    key={partner.id} 
                    className="backdrop-blur-sm bg-gray-900/30 rounded-xl border border-gray-700/50 p-6 shadow-lg flex items-center gap-4 transition-transform hover:scale-[1.02]"
                    data-aos="fade-up"
                    data-aos-delay={partner.id * 100}
                  >
                    <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-red-500/20"></div>
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold  ">{partner.name}</h3>
                      <p className="text-indigo-400 text-sm">{partner.role}</p>
                      <p className="text-gray-400 text-sm">{partner.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
}
