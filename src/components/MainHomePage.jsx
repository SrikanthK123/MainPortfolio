import { Layout, Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import About from './About';
import NewProjectList from './NewProjectList';
import Certificates from './Certificates';
import Skills from './Skills';

const MainHomePage = () => {
  return (
    <div className='HomePage' id='Main'>
      <Layout>
        <Content>
          <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: '#001529' }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div style={{ height: '100%', padding: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 className='text-white' style={{ textAlign: 'center', marginBottom: '20px' }}>I'm Srikanth, a web developer who loves making cool websites. 🚀</h2>
                <p className='text-white' style={{ textAlign: 'center', fontSize: '17px' }}>I started because I wanted to bring my ideas to life online. Let's make the web awesome together!</p>
                <div>
                  <div className="row my-3">
                    <div className="col text-white">
                      <a href="https://www.linkedin.com/in/srikanth-kondapaka-257130218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='LinkedInID'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                    </div>
                    <div className="col text-white">
                      <a href="https://github.com/SrikanthK123" className='GitHubID'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                    <div className="col text-white">
                      <a href="https://instagram.com/srikanth.kondapaka?igshid=NGVhN2U2NjQ0Yg==" className='InstaID'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.232s-.009 2.39-.047 3.233c-.036.78-.166 1.203-.276 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.6c-.281.109-.705.24-1.485.275-.843.038-1.096.046-3.233.046s-2.388-.008-3.231-.046c-.78-.036-1.204-.166-1.486-.276a2.5 2.5 0 0 1-.92-.599 2.5 2.5 0 0 1-.598-.92c-.11-.281-.24-.705-.276-1.485-.038-.843-.046-1.096-.046-3.233s.009-2.39.047-3.233c.036-.78.166-1.203.276-1.485a2.5 2.5 0 0 1 .598-.92 2.5 2.5 0 0 1 .92-.599c.282-.11.705-.24 1.485-.275.738-.034 1.024-.045 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="Main" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="about" spy={true} smooth={true} offset={-70} duration={500}>About-Me</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="NewProjectList" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="certificate" spy={true} smooth={true} offset={-70} duration={500}>Certificate</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={{ cursor: 'pointer', color: 'white' }} to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="responsive-col">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src='https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974884-2488459.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <div id="about"><About /></div>
                <div id="NewProjectList"><NewProjectList /></div>
                <div id="certificate"><Certificates /></div>
                <div id="skills"><Skills /></div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default MainHomePage;
