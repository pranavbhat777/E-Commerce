import React from 'react';

const Hero = () => {
  return (
    <div className="hero animated-bg">
      <div className="floating-elements">
        <div className="floating-icon floating-1">🧸</div>
        <div className="floating-icon floating-2">🎈</div>
        <div className="floating-icon floating-3">⭐</div>
        <div className="floating-icon floating-4">🎨</div>
        <div className="floating-icon floating-5">🚀</div>
      </div>
      <div className="hero-content">
        <h1>Welcome to Kidz Zone</h1>
        <p>Everything your little ones need, all in one place</p>
        <div className="hero-features">
          <div className="feature">
            <i className="fa-solid fa-truck-fast"></i>
            <span>Fast Delivery</span>
          </div>
          <div className="feature">
            <i className="fa-solid fa-shield-halved"></i>
            <span>Safe Products</span>
          </div>
          <div className="feature">
            <i className="fa-solid fa-heart"></i>
            <span>Made with Love</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
