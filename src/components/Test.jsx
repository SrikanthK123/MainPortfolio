
import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

const Test = () => {
  return (
    <div>
      <Layout>
    <Header style={{ backgroundColor: '#001529', padding: '0 50px' }}>
      <Row justify="space-between" align="middle">
        <Col >
          <div className="logo" >
            <img
              src="https://th.bing.com/th/id/R.63b11adaab3f2c0ef8ad4e94908556ff?rik=vKBLozvNt3JpWQ&riu=http%3a%2f%2fwww.theges.com%2fwp-content%2fthemes%2fges%2fimages%2fportfolio-icon-2.png&ehk=dwnOWY7nP9GjkobvmH3wk4iaMkZRHMJdskt1skp0gY4%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo"
              style={{ width: '50px', height: '50px' }}
            />
          </div>
        </Col>
        <Col className="menu-col" >
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link style={{ textDecoration: 'none' }} to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link style={{ textDecoration: 'none' }} to="/projects">Projects</Link>
            </Menu.Item>
            
            <Menu.Item key="4">
              <Link style={{ textDecoration: 'none' }} to="/certificates">Certificates</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  </Layout>
    </div>
  )
}

export default Test
