import { useState } from 'react'
import { Layout, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import classes from './Journal.module.css'
import { Content } from 'antd/es/layout/layout'
import Navbar from '../components/Navbar/Navbar'
import MyJournal from '../components/MyJournal'
import MyHistory from '../components/MyHistory'
import MyFavorite from '../components/MyFavorite'

const Journal = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('journal')

  const componentSwitch = (key: string) => {
    switch (key) {
      case 'journal':
        return <MyJournal />
      case 'history':
        return <MyHistory />
      case 'favorite':
        return <MyFavorite />
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
            <Menu.Item key="journal">Journal</Menu.Item>
            <Menu.Item key="history">Workout History</Menu.Item>
            <Menu.Item key="favorite">My Favorite</Menu.Item>
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

export default Journal
