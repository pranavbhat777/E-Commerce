import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer_panel1" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="footer_panel2">
        <p style={{color: 'orange'}}>Made with </p>
        <p style={{color: 'red'}}>&hearts;</p>
        <p style={{color: 'white'}}>by Pranav</p>
        <p style={{color: 'rgb(101, 255, 101)'}}>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
