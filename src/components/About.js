import React from 'react';
import AboutImg from './images/about.jpeg';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import reactImg from './images/react.png';
import mongo from './images/mongodb.png';
import node from './images/node.png'

const About = () => {
    return (
      <div className='container'>
        <div className='skills'>
          <h2>Skills</h2>
          <div className='skills-images'>
            <div className='html'>
              <img src={html} alt='html logo' />
            </div>
            <div className='css'>
              <img src={css} alt='css logo' />
            </div>
            <div className='js'>
              <img src={js} alt='js logo' />
            </div>
            <div className='react'>
              <img src={reactImg} alt='react logo' />
            </div>
            <div className='mongodb'>
              <img src={mongo} alt='mongodb logo' />
            </div>
            <div className='node'>
              <img src={node} alt='node.js logo' />
            </div>
          </div>
        </div>
        <div className='about-container'>
          <div className='about-description'>
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              ratione aut distinctio autem id neque cupiditate quam ipsa. Quos
              ratione recusandae quia. Aliquam id debitis deserunt quos tenetur
              laboriosam consequuntur. Iste similique ratione voluptatibus
              maiores quae debitis totam commodi optio eveniet perferendis odio
              cumque, illo reprehenderit hic distinctio officia recusandae!
              Voluptatum, magni dolore totam reiciendis quis rem aperiam
              quibusdam voluptate.
            </p>
          </div>
          <div className='about-img'>
            <img src={AboutImg} alt='' />
          </div>
        </div>
      </div>
    );
};

export default About;
