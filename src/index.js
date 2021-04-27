import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import routes from "@/router"

// 样式
import "antd/dist/antd.css"
ReactDOM.render(
  <React.StrictMode>
    <HashRouter> {renderRoutes(routes)} </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
