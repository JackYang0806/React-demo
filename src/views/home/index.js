import React from "react"
import { Button } from 'antd'
import {connect} from 'react-redux'
function homepage(props) {

  const clickHandle=()=>{
    console.log(props)
   
  }
  return (
    <div>
      <h4> Home </h4>
        <Button onClick={()=>clickHandle()}>打印store</Button>
    </div>
  )
}
const Home=connect(state=>({...state}))(homepage)
export default Home
