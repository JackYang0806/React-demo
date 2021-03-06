import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import store from '@/store'
import { Provider } from 'react-redux'
import routes from "./router"
import api from '@/plugin/api'

// 样式
import "antd/dist/antd.css"
import "./index.scss"
//文件
import "@/icons"
window.$api=api;
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
        {renderRoutes(routes)} 
        </Provider>
       </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
