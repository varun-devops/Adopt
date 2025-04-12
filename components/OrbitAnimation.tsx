"use client";

import React from 'react';

const OrbitAnimation = () => {
  return (
    <div className="dashboard">
      <div className="starfield"></div>
      <div className="center-icon">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="#3950A3" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/>
          <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        </svg>
      </div>

      {/* Orbit 1: Plan */}
      <div className="orbit orbit1">
        <div className="avatar">
          <div className="avatar-container">
            <span className="text-xs font-bold text-white">01</span>
          </div>
        </div>
      </div>
      <div className="label plan">Plan</div>

      {/* Orbit 2: Prototype */}
      <div className="orbit orbit2">
        <div className="avatar">
          <div className="avatar-container">
            <span className="text-xs font-bold text-white">02</span>
          </div>
        </div>
      </div>
      <div className="label prototype">Prototype</div>

      {/* Orbit 3: Projects */}
      <div className="orbit orbit3">
        <div className="avatar">
          <div className="avatar-container">
            <span className="text-xs font-bold text-white">03</span>
          </div>
        </div>
      </div>
      <div className="label projects">Projects</div>

      {/* Orbit 4: Execute */}
      <div className="orbit orbit4">
        <div className="avatar">
          <div className="avatar-container">
            <span className="text-xs font-bold text-white">04</span>
          </div>
        </div>
      </div>
      <div className="label execute">Execute</div>
    </div>
  );
};

export default OrbitAnimation;
