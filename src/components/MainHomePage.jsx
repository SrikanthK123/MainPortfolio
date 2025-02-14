/* eslint-disable no-unused-vars */
import { Layout, Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-scroll';
import AllAboutMeComponents from './AllAboutMeComponents';
import About from './About';
import NewProjectList from './NewProjectList';
import Certificates from './Certificates';
import Skills from './Skills';
import { FaHome, FaUser, FaProjectDiagram, FaCertificate, FaTools } from 'react-icons/fa';
import Test from './Test';
import AnimationMain from "../Images/AnimationMain.gif"
const MainHomePage = () => {
  return (
    <div className='HomePage' id=''>
      <Layout>
        <Content>
          <Row justify="center" align="middle" style={{ minHeight: '100vh', backgroundColor: '#001529' }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Test/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="responsive-col">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src='https://static.vecteezy.com/system/resources/previews/011/153/368/original/3d-website-developer-working-on-laptop-illustration-png.png' style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '15px' }} />
                </div>
                <About />
                <NewProjectList />
                <Certificates />
                <Skills />
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default MainHomePage;
