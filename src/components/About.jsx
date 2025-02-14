/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Layout, { Content } from 'antd/es/layout/layout';
import React from 'react';

const About = () => {
  return (
    <div className="HomePage" style={{ height: 'auto' }} id="about">
      <Layout style={{ backgroundColor: '#001529' }}>
        <Content
          style={{
            margin: '24px 16px',
            padding: 10,
            minHeight: 280,
          }}
        >
          <div style={{
            fontFamily: 'monospace',
            borderRadius: '10px',
            fontSize: '20px',
            padding: '15px',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            backgroundColor: 'white',
          }}>
            <h3 className="text-center fw-bold responsive-text" style={{ fontSize: '30px', fontFamily: 'cursive, monospace' }}>About Us</h3>
            <div>
              <p className="aboutPara responsive-text">Hey there! I'm Srikanth, a passionate web developer with a love for creating engaging and user-friendly websites. 💻 With expertise in HTML, CSS, JavaScript, and more, I thrive on turning ideas into reality through code.</p>
              <p className="aboutPara responsive-text">Driven by a desire to learn and grow, I'm constantly exploring new technologies and techniques to stay ahead in this ever-evolving field. 🚀 From building dynamic web applications to solving complex coding challenges, I'm always up for a new adventure in the world of web development. Let's create something amazing together! 🌟</p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default About;
