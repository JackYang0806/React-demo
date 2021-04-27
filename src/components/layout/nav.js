import React, { useState } from "react"
import { Link } from "react-router-dom"
import menuList from "./navdata"
import "./nav.scss"
function Nav(props) {
  const { pathname } = props
  const [status, setStatus] = useState(-1)
  return (
    <div className="nav-content">
      <ul className="nav-list">
        {menuList.map((item, index) => {
          return (
            <li
              key={item.name}
              onMouseEnter={() => {
                setStatus(index)
              }}
              onMouseLeave={() => {
                setStatus(-1)
              }}
              className={pathname === item.path ? "active" : ""}
            >
              <Link to={item.path}>{item.name}</Link>
              {item.children && item.children.length > 0 && (
                <div
                  className={
                    index === status ? "products-list active" : "products-list"
                  }
                >
                  {item.children.map((ele) => {
                    return (
                      <ul key={ele.name}>
                        <li>
                          <span className="title">{ele.name}</span>
                        </li>
                        {ele.children.map((tag) => {
                          return (
                            <li key={tag.name}>
                              {tag.name}
                              {tag.isHot && <span className="hot">HOT</span>}
                            </li>
                          )
                        })}
                      </ul>
                    )
                  })}
                  <ul></ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Nav
