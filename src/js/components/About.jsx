import React from 'react';
import { Container, Button } from 'react-bootstrap';

const About =() => {
  return (
   <Container id="about" className="my-5">
  <div className="text-start">
    <h1 className="fs-1">About Us</h1>
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
     nostrud exercitation ullamco 
     laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <Button variant="primary">Read more</Button>
  </div>
</Container>


    
  );
}

export default About;