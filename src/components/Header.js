import React from 'react';
import Typed from 'react-typed';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='overlay'>
        <div className='main-info'>
          <h1>Isaac Kimsey</h1>
          <Typed
            className='typed-text'
            strings={[
              'Web Developer',
              'Software Engineer',
              'Front-end Developer',
              'Lifelong Student'
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <div className='social-media'>
            <div className='linkedin social'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/jordan-kimsey-bab62949/'
                alt='linkedin link'
              >
                {/* <FaLinkedin fontSize='70px' color='white' /> */}
                <TiSocialLinkedinCircular fontSize='60px' color='white'/>
              </a>
            </div>
            <div className='github social'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/jordankimsey'
                alt='github link'
              >
                <FaGithub fontSize='50px' color='white' />
              </a>
            </div>
            <div className='facebook social'>
              <a
                href='https://www.facebook.com/jordan.kimsey'
                target='_blank'
                rel='noopener noreferrer'
                alt='facebook link'
              >
                <FaFacebook fontSize='50px' color='white' />
              </a>
            </div>
          </div>
          {/* <a href='#' className='btn-main-offer'>
            About Me
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
