import React, { useState, useRef } from 'react';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa'
import { BiMap } from 'react-icons/bi';

// const result = () => {
//     return (
//         <p>Your message successfully sent</p>
//     )
// }

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
   
    const handleSubmit = (event) => {

        const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
        event.stopPropagation();
        }
        
 emailjs
   .sendForm(
     'service_4r7mne8',
     'template_l2s5hzy',
     event.target,
     'user_YrWDiBCmXb5vTPRHcIykD'
   )
   .then(
     (result) => {
       console.log(result.text);
       setValidated(true);
     },
     (error) => {
       console.log(error.text);
       setValidated(false);
     }
   );
        setValidated(true);
      event.target.reset();
      
  };

    
    return (
      <>
        <div className='contactHeader'>
          <h2>Get in Touch</h2>
        </div>
        <div className='container' id='connect'>
          <div className='contact-info'>
            <div className='email'>
              <div className='contact-container'>
                <MdOutlineEmail fontSize='35px' color='rgb(24, 39, 76)' />
                <h4>Email Me</h4>
              </div>
              <a href='mailto:jordankimsey@gmail.com'>Jordankimsey@gmail.com</a>
            </div>
            <div className='Call'>
              <div className='contact-container'>
                <FaPhone fontSize='30px' color='rgb(24, 39, 76)' />
                <h4>Call</h4>
              </div>
              <a href='tel:+'>(770) 862-1160</a>
            </div>

            <div className='visit'>
              <div className='contact-container'>
                <BiMap fontSize='35px' color='rgb(24, 39, 76)' />
                <h4>Visit</h4>
              </div>
              <address>Atlanta, GA</address>
            </div>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* <h2>Get in Touch</h2>
        <div className='contact-info'>
          <div className='email'>
            <div className='contact-container'>
              <MdOutlineEmail fontSize='35px' />
              <h4>Email Me</h4>
            </div>
            <a href='mailto:jordankimsey@gmail.com'>Jordankimsey@gmail.com</a>
          </div>
          <div className='Call'>
            <div className='contact-container'>
              <FaPhone fontSize='30px' />
              <h4>Call</h4>
            </div>
            <a href='tel:+'>(770) 862-1160</a>
          </div>

          <div className='visit'>
            <div className='contact-container'>
              <BiMap fontSize='35px' />
              <h4>Visit</h4>
            </div>
            <address>Atlanta, GA</address>
          </div>
        </div> */}
            <Row className='mb-3'>
              <Form.Group as={Col} md='4' controlId='validationCustom01'>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='first_name'
                  placeholder='First name'
                  min='1'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' controlId='validationCustom02'>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type='text'
                  name='last_name'
                  placeholder='Last name'
                  min='1'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md='4' controlId='validationCustomUsername'>
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id='inputGroupPrepend'>@</InputGroup.Text>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Email'
                    aria-describedby='inputGroupPrepend'
                    required
                    min='2'
                  />
                  <Form.Control.Feedback type='invalid'>
                    Please enter valid email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group as={Col} md='6' controlId='validationCustom03'>
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  required
                  min='2'
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a Subject.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name='message'
                  as='textarea'
                  placeholder='Write your message'
                  rows={3}
                  min='5'
                />
              </Form.Group>
            </Row>
            <Button className='button-submit' type='submit' value='Send'>
              Submit form
            </Button>
          </Form>
        </div>
      </>
    );
};

export default ContactForm;
