"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = 
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Organization: ${formData.organization}%0A` +
      `Message: ${formData.message}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918448945837?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section>
      {/* Background bubbles for glassmorphism effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32">
        {/* Contact content */}
        <div className="py-12 md:py-20">
          {/* Contact heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold uppercase text-indigo-500">
              GET IN TOUCH
            </h2>
            <h1 className="mb-6 font-nacelle text-4xl font-semibold text-gray-100 md:text-5xl">
              LET'S START <span className="text-red-500">WORK TOGETHER</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-center text-lg text-gray-400">
                We're excited to hear from you and explore potential collaborations. 
                Fill out the form below and our team will get back to you soon.
              </p>
            </div>
          </div>

          {/* Contact form and details */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50 shadow-xl" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">What's your name?</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">What's your email?</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="john@doe.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-gray-300 mb-2">What's the name of your organization?</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Doe Corp"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Hello FAAD, Can you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
                >
                  <FaWhatsapp className="mr-2 text-xl" /> Send via WhatsApp
                </button>
              </form>
            </div>
            
            {/* Contact Details */}
            <div className="lg:pl-10" data-aos="fade-left">
              <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50 shadow-xl mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Office Address</h3>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">
                    CoWrks, 5th Floor, Building Tower 10 A, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122002
                  </p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50 shadow-xl mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Details</h3>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@faad.in" className="text-gray-300 hover:text-white">info@faad.in</a>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl border border-gray-700/50 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Socials</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </div>
                    LinkedIn
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </div>
                    Facebook
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </div>
                    Twitter
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    Instagram
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white">
                    <div className="bg-gradient-to-r from-red-500/20 to-indigo-600/20 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </div>
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
