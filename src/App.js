// import './App.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { Input, Layout, Typography } from 'antd'
// const { Title } = Typography
import { QrcodeOutlined } from '@ant-design/icons'

const { Header, Footer, Content } = Layout;
const salt = '-*методы цифровой трансформации в действии!/-'

function App() {
  const [qrString, setQrString] = useState('')

  function handleChange(event) {
    setQrString(event.target.value)
  }
  return (
    <>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Header>
          <Typography.Title level={3}>h3. Ant Design</Typography.Title>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >

          <Input value={qrString} onChange={handleChange} size="large" placeholder="Введите строку для кодирования" prefix={<QrcodeOutlined />} />

          <h2>Кодируем строку с солью: {qrString}</h2>
          <h3> Соль: {salt}</h3>
          <QRCode value={salt + qrString} />

        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
