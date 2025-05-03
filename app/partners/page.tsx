import React from 'react';

export const metadata = {
  title: 'Partners - Adopt Network',
  description: 'Our strategic partners helping us build the future of investment.',
}

export default function PartnersPage() {
  return (
    <section>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Partners Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
              OUR PARTNERS
            </h2>
            <h1 className="mb-6 font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">
              Working Together to Create Impact
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-10 text-center text-lg text-gray-400">
                We collaborate with industry leaders and innovative organizations to provide the best support and opportunities for our startups and investors.
              </p>
            </div>
          </div>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay={300}>
            {/* Partner Card 1 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 h-16 flex items-center">
                <div className="h-12 w-12 bg-gradient-to-r from-red-500/20 to-indigo-600/20 rounded-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">P1</span>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">Venture Capital Firm</h3>
              </div>
              <p className="text-gray-400 mb-4">A leading venture capital firm specializing in early-stage investments in technology startups.</p>
              <a href="#0" className="text-indigo-500 font-semibold inline-flex items-center group">
                <span>Learn More</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            
            {/* Partner Card 2 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 h-16 flex items-center">
                <div className="h-12 w-12 bg-gradient-to-r from-red-500/20 to-indigo-600/20 rounded-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">P2</span>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">Tech Accelerator</h3>
              </div>
              <p className="text-gray-400 mb-4">An accelerator program helping tech startups scale through mentorship, resources, and funding opportunities.</p>
              <a href="#0" className="text-indigo-500 font-semibold inline-flex items-center group">
                <span>Learn More</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            
            {/* Partner Card 3 */}
            <div className="backdrop-blur-sm bg-gray-900/30 rounded-2xl border border-gray-700/50 p-8 shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-4 h-16 flex items-center">
                <div className="h-12 w-12 bg-gradient-to-r from-red-500/20 to-indigo-600/20 rounded-md flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">P3</span>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">Business Consultancy</h3>
              </div>
              <p className="text-gray-400 mb-4">A consultancy firm providing expert business advice and strategic guidance to growing companies.</p>
              <a href="#0" className="text-indigo-500 font-semibold inline-flex items-center group">
                <span>Learn More</span>
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-20" data-aos="fade-up">
            <div className="backdrop-blur-sm bg-gray-900/40 p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-red-500/20 to-purple-500/20 blur-3xl -z-10" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-600/20 to-blue-500/20 blur-3xl -z-10" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in becoming our partner?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our network of industry leaders and contribute to the growth of innovative startups.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#0"
                  className="btn bg-gradient-to-r from-red-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Become A Partner
                </a>
                <a
                  href="#0"
                  className="btn bg-transparent border border-gray-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:border-white transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
