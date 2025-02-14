/* eslint-disable no-unused-vars */
import React from 'react'
import { CertificateList } from './Data';
import { Image, Row, Col } from 'antd';

const Certificates = () => {
  return (
    <div className='' id='certificate' >
      <div style={{ padding: '10px', minHeight: 'auto' }}>
        <h3 className='text-center fw-bold text-white my-2' style={{ fontSize: '30px', fontFamily: 'cursive,monspace' }}>Certificates</h3>
        <Row gutter={[16, 16]}>
          {CertificateList.map((certificate, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={24} style={{ display: 'flex', justifyContent: 'center',margin:'10px' }}>
              <Image 
                width={350} 
                height={150} 
                src={certificate.TitleName} 
                alt={`Certificate ${index + 1}`}
                style={{ objectFit: 'cover' ,borderRadius:'12px'}} 
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Certificates
