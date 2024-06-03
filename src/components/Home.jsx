import React from 'react';
import { Col, Layout, Row } from 'antd';
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';

const { Content } = Layout;

const Home = () => {
  return (
    <div className='HomePage' id='home'>
      <Content style={{  minHeight: '85vh',marginTop:'35px' }}>
        {/*<Row justify="center" align="middle" style={{ height: '100%' }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div style={{ height: '70%', padding: '10%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h2 className='text-white' style={{ textAlign: 'center', marginBottom: '20px' }}> I'm Srikanth, a web developer who loves making cool websites. 🚀</h2>
              <p className='text-white' style={{ textAlign: 'center', fontSize: '17px' }}>I started because I wanted to bring my ideas to life online. Let's make the web awesome together!</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div style={{ height: '70%', padding: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src='https://cdni.iconscout.com/illustration/premium/thumb/web-development-2974884-2488459.png' style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          </Col>
  </Row>*/}
  <div className='container col-xxl-8 px-4 py-5 aos-init aos-animate'>
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-12 col-sm-8 col-lg-6">
        <img src="https://www.modulesgarden.com/client-area/templates/market_place/assets/img/services/development.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold  lh-1 mb-3 text-white" style={{fontFamily:'sans-serif'}}> I'm <spna style={{color:'#79c2d0'}}>Srikanth</spna>, a web developer who loves making cool websites. 🚀</h1>
        <p class="lead text-white" style={{fontFamily:'monospace'}}>I started because I wanted to bring my ideas to life online. Let's make the web awesome together!</p>
       {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
</div>*/}
      </div>
    </div></div>
        
      </Content>
    </div>
  );
};

export default Home;
