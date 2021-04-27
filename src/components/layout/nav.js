import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./nav.scss"
function Nav(props) {
  const { pathname } = props
  const [status, setStatus] = useState(false)
  return (
    <div className="nav-content">
      <ul className="nav-list">
        <li className={pathname === "/home" ? "active" : ""}>
          <Link to="/home">首页</Link>
        </li>
        <li
          className={pathname === "/products" ? "active" : ""}
          onMouseEnter={() => {
            setStatus(true)
          }}
          onMouseLeave={() => {
            setStatus(false)
          }}
        >
          <Link to="/products">产品与解决方案</Link>
          <div className={status ? "products-list active" : "products-list"}>
            <ul>
              <li>
                <span className="title">中小企业应用</span>
              </li>
              <li>
                A6+Clound<span className="hot">HOT</span>
              </li>
              <li>
                精品协同人事管理<span className="hot">HOT</span>
              </li>
              <li>合同管理</li>
              <li>费用管理</li>
              <li>资产管理</li>
              <li>项目管理</li>
              <li>更多</li>
            </ul>
            <ul>
              <li>
                <span className="title">大型集团解决方案</span>
              </li>
              <li>A8+协同平台</li>
              <li>三重一大</li>
              <li>业财一体化</li>
              <li>更多</li>
            </ul>
            <ul>
              <li>
                <span className="title">行业领域云</span>
              </li>
              <li>建筑云</li>
              <li>人力薪税云</li>
            </ul>
            <ul>
              <li>
                <span className="title">工具组件</span>
              </li>
              <li>表单模板</li>
              <li>组件</li>
            </ul>
          </div>
        </li>
        <li className={pathname === "/case" ? "active" : ""}>
          <Link to="/case">客户案例</Link>
        </li>
      </ul>
    </div>
  )
}
export default Nav
