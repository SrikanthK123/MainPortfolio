import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" style={{ position: 'fixed', width: '100%', zIndex: '1000', backgroundColor: '#001529', top: '0' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none mx-4">
          <img
            src="https://th.bing.com/th/id/R.63b11adaab3f2c0ef8ad4e94908556ff?rik=vKBLozvNt3JpWQ&riu=http%3a%2f%2fwww.theges.com%2fwp-content%2fthemes%2fges%2fimages%2fportfolio-icon-2.png&ehk=dwnOWY7nP9GjkobvmH3wk4iaMkZRHMJdskt1skp0gY4%3d&risl=&pid=ImgRaw&r=0"
            alt="Logo"
            style={{ width: '50px', height: '50px' }}
          />
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item"><Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="about" spy={true} smooth={true} offset={-70} duration={500}>About-Me</Link></li>
          <li className="nav-item"><Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
          <li className="nav-item"><Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="certificate" spy={true} smooth={true} offset={-70} duration={500}>Certificate</Link></li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
