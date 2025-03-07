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
            <h3 className="text-center fw-bold responsive-text" style={{ fontSize: '30px', fontFamily: 'cursive, monospace' }}>About Me</h3>
            <div>
              <p className="aboutPara responsive-text">Hey there! I'm Srikanth, a passionate web developer and aspiring data engineer with a love for creating engaging and user-friendly websites and efficient data solutions. 💻 With expertise in HTML, CSS, JavaScript, Python, and more, I thrive on turning ideas into reality through code.</p>
              <p className="aboutPara responsive-text">As a fresher in data engineering, I'm building skills in big data technologies like Apache Spark, PySpark, and Hadoop. I’m familiar with cloud platforms like Microsoft Azure (Azure Data Lake, Azure Data Factory, Databricks) and working with data pipelines and ETL processes. 🚀 My goal is to design scalable data solutions and ensure data quality and efficiency in every project I work on. Let’s create something amazing together! 🌟</p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default About;
