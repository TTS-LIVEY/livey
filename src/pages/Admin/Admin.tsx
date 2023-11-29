import { useState } from 'react'
import classes from './Admin.module.css'

import MyContent from '../../components/MyContent'
import { Layout, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import MyAsset from '../../components/MyAsset'
import MyDashboard from '../../components/MyDashboard'
import Navbar from '../../components/Navbar/Navbar'

const Admin = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard')
  const componentSwitch = (key: string) => {
    switch (key) {
      case 'dashboard':
        return <MyDashboard />
      case 'content':
        return (
          <>
            <MyContent />
          </>
        )

      case 'asset':
        return <MyAsset />
    }
  }

  return (
    <div>
      <Navbar />
      <Layout>
        <Sider width={'20vw'} className={classes.sider} breakpoint="md">
          <Menu
            mode="inline"
            onClick={(e) => setSelectedMenuItem(e.key)}
            style={{ height: '100%', borderRight: 0, fontSize: '1.1vw' }}
          >
            <Menu.Item key="dashboard">Dashboard</Menu.Item>
            <Menu.Item key="content">Manage Contents</Menu.Item>
            <Menu.Item key="asset">Asset</Menu.Item>
          </Menu>
        </Sider>
        <Content
          className={classes.content}
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          <div className={classes.contentTitle}></div>
          <div>{componentSwitch(selectedMenuItem)}</div>
        </Content>
      </Layout>
    </div>
  )
}

export default Admin
