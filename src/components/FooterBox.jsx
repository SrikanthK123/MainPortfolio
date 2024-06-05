import React from 'react'
import { Layout } from 'antd'


const { Header, Footer, Content } = Layout;

const FooterBox = () => {
  return (
    <div className='footer' >
      <Footer style={{ textAlign: 'center',backgroundColor:'#001529',color:'white' }}>Portfolio ©2024 Created by Srikanth</Footer>
    </div>
  )
}

export default FooterBox
