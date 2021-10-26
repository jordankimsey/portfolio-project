import React, { useState, useRef } from 'react';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const emailForm = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    emailjs
      .sendForm(
        'service_4r7mne8',
        'template_l2s5hzy',
        emailForm.current,
        'user_YrWDiBCmXb5vTPRHcIykD'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='container '>
      <Form
        ref={emailForm}
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h2>Contact Me</h2>
        <Row className='mb-3'>
          <Form.Group as={Col} md='4' controlId='validationCustom01'>
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type='text'
              name='first_name'
              placeholder='First name'
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
            />
            <Form.Control.Feedback type='invalid'>
              Please provide a Subject.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              name='message'
              as='textarea'
              placeholder='Write your message'
              rows={3}
            />
          </Form.Group>
        </Row>
        <Button className='button-submit' type='submit' value='Send'>
          Submit form
        </Button>
      </Form>
      <div className='social-media'>
        <div className='linkedin social'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/jordan-kimsey-bab62949/'
            alt='linkedin link'
          >
            <FaLinkedin fontSize='60px' color='rgb(24, 39, 76)' />
          </a>
        </div>
        <div className='github social'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/jordankimsey'
            alt='github link'
          >
            <FaGithubSquare fontSize='60px' color='rgb(24, 39, 76)' />
          </a>
        </div>
        <div className='facebook social'>
          <a
            href='https://www.facebook.com/jordan.kimsey'
            target='_blank'
            rel='noopener noreferrer'
            alt='facebook link'
          >
            <FaFacebookSquare fontSize='60px' color='rgb(24, 39, 76)' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
