import React from 'react';

const Links = () => {
  const navLinks = ['Services', 'Projects', 'About'];

  return (
    <div className="links">
      {navLinks.map((link, index) => (
        <a href={`#${link.toLowerCase()}`} key={index}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default Links;
