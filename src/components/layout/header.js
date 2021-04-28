import React, { useEffect } from "react"
import { Row, Col, Input, Button } from "antd"
import { getMenu, queryCases } from "./api"
import logo from "@/assets/images/logo.png"
import "./header.scss"
import {connect} from 'react-redux'
function Header(props) {
  const { Search } = Input
  useEffect(() => {
    getMenu({
      systemId: "1290815299041501184",
    }).then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <Row className="header-content">
        <Col span={4}>
          <img src={logo} alt="logo" />
        </Col>
        <Col span={20} className="search-content">
          <Search
            className="keywords"
            enterButton
            onSearch={(val) => props.searchHandle(val)}
            placeholder="精品协同人事管理"
          ></Search>
          <Button> 政务 </Button> <Button> 注册 </Button>
          <Button type="primary"> 登录 </Button>
        </Col>
      </Row>
    </div>
  )
}
const updateKeyword=(dispatch)=>{
  return {
    searchHandle:(val)=>{
      dispatch({
        type:"update_keyword",
        value:val
      })
    }
  }
}
const Myheader=connect(null,updateKeyword)(Header)

export default Myheader
