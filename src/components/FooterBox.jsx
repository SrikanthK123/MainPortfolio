import { Layout } from 'antd'


const { Footer } = Layout;

const FooterBox = () => {
  const Year = new Date().getFullYear();
  return (
    <div className='footer' >
      <Footer style={{ textAlign: 'center',backgroundColor:'#001529',color:'white' }}>Portfolio ©{Year} Created by Srikanth</Footer>
    </div>
  )
}

export default FooterBox
