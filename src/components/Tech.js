import React, {useState} from 'react';
import stanley from './images/stanley.png';
import { Modal } from 'react-bootstrap';


const Tech = () => {
    const [showProject, setShowProject] = useState(false);

    const showProjectHandler = (e) => {
        e.preventDefault();

        setShowProject(true)
    }

    return (
      <div className='tech-container'>
        <h2>Projects</h2>
        <div className='project-card'>
                <a onClick={ showProjectHandler} className='card w-25'href=''>
            <img src={stanley} alt='' />
          </a>
        </div>
        <Modal
          size='lg'
          show={showProject}
          onHide={() => setShowProject(false)}
          aria-labelledby='example-modal-sizes-title-lg'
        >
          <Modal.Header closeButton>
            <Modal.Title id='example-modal-sizes-title-lg'>
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </div>
    );
}

export default Tech
