/* eslint-disable no-unused-vars */
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaNodeJs, FaDatabase, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { AiOutlineCode } from 'react-icons/ai';
import { DiDjango } from 'react-icons/di'; // Import the Django icon from 'react-icons/di'

const SkillsInfo = [
  { icon: <FaHtml5 size={50} />, name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <FaCss3Alt size={50} />, name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <FaJava size={50} />, name: 'Java', url: 'https://dev.java/' },
  { icon: <FaReact size={50} />, name: 'ReactJS', url: 'https://legacy.reactjs.org/docs/getting-started.html' },
  { icon: <FaPython size={50} />, name: 'Python', url: 'https://www.python.org/' },
  { icon: <SiExpress size={50} />, name: 'Express.js', url: 'https://expressjs.com/' },
  { icon: <FaNodeJs size={50} />, name: 'Node.js', url: 'https://nodejs.org/en/docs' },
  { icon: <FaDatabase size={50} />, name: 'Database', url: 'https://dev.mysql.com/doc/' },
  { icon: <FaJsSquare size={50} />, name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/javascript' },
  { icon: <AiOutlineCode size={50} />, name: 'C-language', url: 'https://learn.microsoft.com/en-us/cpp/c-language/?Learn=msvc-170' },
  { icon: <DiDjango size={50} />, name: 'Django', url: 'https://docs.djangoproject.com/en/4.2/' }, 
];

const Skills = () => {
  return (
    <div id='skills'>
      <Layout style={{ backgroundColor: '#001529' }}>
        <Content>
          <h3 className='text-center fw-bold text-white my-5' style={{ fontSize: '30px', fontFamily: 'cursive' }}>Skills</h3>
          <Row justify="sub-element align center">
            {SkillsInfo.map((skill, index) => (
              <Col className="text-white mb-3 skillsShow text-center p-2" style={{borderRadius:'15px'}}  span={6} key={index}>
                <a  href={`${skill.url}`}  style={{color:'white',textDecoration:'none'}}>{skill.icon}
                <div>{skill.name}</div>
                </a>
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Skills;