/* eslint-disable no-unused-vars */
import React from 'react'
import About from './About'
import NewProjectList from './NewProjectList'
import Certificates from './Certificates'
import Skills from './Skills'
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaProjectDiagram, FaCertificate, FaTools } from 'react-icons/fa';

const AllAboutMeComponents = () => {
  return (
    <div style={{backgroundColor:'#001529'}}>
      <ul className="nav nav-pills my-5">
                  <li className="nav-item">
                    <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="Main" spy={true} smooth={true} offset={-70} duration={500}>
                      <FaHome style={{ width: '22px', height: '24px' }} title="Home" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="about" spy={true} smooth={true} offset={-70} duration={500}>
                      <FaUser style={{ width: '22px', height: '24px' }} title="About" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="NewProjectList" spy={true} smooth={true} offset={-70} duration={500}>
                      <FaProjectDiagram style={{ width: '22px', height: '24px' }} title="Projects" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="certificate" spy={true} smooth={true} offset={-70} duration={500}>
                      <FaCertificate style={{ width: '22px', height: '24px' }} title="Certificate" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                      <FaTools style={{ width: '22px', height: '24px' }} title="Skills" />
                    </Link>
                  </li>
                </ul>
    </div>
  )
}

export default AllAboutMeComponents
