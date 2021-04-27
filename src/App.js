import "./app.scss"
import React from "react"
import { renderRoutes } from "react-router-config"
import { Layout } from "antd"
import Myheader from '@/components/layout/header'
import Nav from '@/components/layout/nav'
const { Header, Content } = Layout
function App(props) {
  const { route,location } = props;
  return (
    <div className="App">
      <Layout>
        <Header className="app-header">
         <Myheader></Myheader>
        </Header>
        <Nav {...location}></Nav>
          <Content> {renderRoutes(route.routes)} </Content>
      </Layout>
    </div>
  )
}
export default App
