// import './App.css';
import 'antd/dist/antd.css';
import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { Button, PageHeader, Input, Layout, Descriptions } from 'antd'
import { QrcodeOutlined } from '@ant-design/icons'

const { Footer, Content } = Layout;
const salt = '-*методы цифровой трансформации в действии!/-'

function App() {
  const [qrString, setQrString] = useState('')

  function handleQRChange(e) {
    setQrString(e.target.value)
  }
  return (
    <>
      <PageHeader
        ghost={false}
        title="QR виджет"
        subTitle="сервис по переводу текста в QR-код на лету"
        extra={[
          <Button key="2">Тема</Button>,
          <Button key="1" type="primary">Печатать</Button>,
        ]}
      >
        <Descriptions size="small" column={2}>
          <Descriptions.Item label="Created from stratch by">Sbmart</Descriptions.Item>
          <Descriptions.Item label="Creation Time">2021-May-08</Descriptions.Item>
          <Descriptions.Item label="Кодируемая строка">
            <>{qrString}</>
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>

      <Layout style={{ padding: '0 24px 24px' }}>

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >

          <Input value={qrString} onChange={handleQRChange} size="large" placeholder="Введите строку для кодирования" prefix={<QrcodeOutlined />} />
          <br></br>
          <h2>Кодируем строку с солью: {qrString}</h2>
          <h3>Захардкоденная соль: {salt}</h3>
          <br></br>
          <QRCode size={256} value={salt + qrString} />

        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
