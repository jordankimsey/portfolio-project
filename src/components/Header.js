import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
          <div className='overlay'>
        <div className='main-info'>
                  <h1>Front-End Engineer and Web Developer</h1>
                  <Typed
                      className="typed-text"
                      strings={["Web Developer", "Software Engineer", "Front-end Developer"]}
                      typeSpeed={40}
                      backSpeed={60}
                      loop
                  />
                  <a href="#" className="btn-main-offer">About Me</a>
        </div>
          </div>
 </div>
    
  );
};

export default Header;
