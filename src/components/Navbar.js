import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from './images/logo-crop.jpg';



const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-custom'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img src={logo} alt='Isaac Kimsey logo' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <AiOutlineMenu className='hamburger' />
            {/* <span className='navbar-toggler-icon'></span> */}
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto text-center mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About Me
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar
