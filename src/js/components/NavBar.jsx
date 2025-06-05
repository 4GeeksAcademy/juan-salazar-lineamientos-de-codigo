import React, { useState, useRef } from 'react';
import { Navbar, Nav, Container,  } from 'react-bootstrap';

const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const navbarCollapseRef = useRef(null); 

    const handleNavLinkClick = (sectionId) => {
        
        setActiveSection(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

       
        if (navbarCollapseRef.current) {
            navbarCollapseRef.current.classList.remove('show');
        }
    };

    return (
        <Navbar bg="dark" expand="lg"data-bs-theme="dark">

        <Container>
             <Navbar.Brand href="#home">My Landing Page</Navbar.Brand>
             <Navbar.Toggle  aria-controls="basic-navbar-nav" />
             <Navbar.Collapse  ref={navbarCollapseRef} id="basic-navbar-nav">
                 <Nav className="me-auto  ">
                     <Nav.Link className='text-light' onClick={() => handleNavLinkClick('home')}>Home</Nav.Link>
                     <Nav.Link className='text-light' onClick={() => handleNavLinkClick('about')}>About</Nav.Link>
                     <Nav.Link className='text-light' onClick={() => handleNavLinkClick('services')}>Services</Nav.Link>
                     <Nav.Link className='text-light' onClick={() => handleNavLinkClick('contact')}>Contact</Nav.Link>
                 </Nav>
             </Navbar.Collapse>
             
             </Container>

     </Navbar>



);
        
};

export default NavigationBar;