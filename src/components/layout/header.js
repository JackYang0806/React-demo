import React, { useEffect } from "react"
import { Row, Col, Input, Button } from "antd"
import { getMenu } from "./api"
import logo from "@/assets/images/logo.png"
import "./header.scss"
import {useDispatch} from 'react-redux'
function Header() {
  const { Search } = Input;
  const dispath=useDispatch();
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
            onSearch={(val) => dispath({type:"update_keyword",value:val})}
            placeholder="精品协同人事管理"
          ></Search>
          <Button> 政务 </Button> <Button> 注册 </Button>
          <Button type="primary"> 登录 </Button>
        </Col>
      </Row>
    </div>
  )
}
export default Header
