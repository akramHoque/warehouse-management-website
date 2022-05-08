import React from 'react';
import { Accordion } from 'react-bootstrap';
const Faqs = () => {
    return (
        <div className='container my-5'>
        <div className="row d-flex">
        <div className="col-sm-12 col-lg-6 col-md-6 align-items-center justify-content-center ">
        <img className='w-50 gym-image'  src='' alt="" />
        </div>
        <div className="gym-content col-sm-12 col-lg-6 col-md-6 align-items-center justify-content-center px-3">
        
        <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        </div>
        </div>
        
        
    
    );
};

export default Faqs;