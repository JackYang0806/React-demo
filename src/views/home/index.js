import React, {useState, useEffect } from "react"
import { Button } from "antd"
import { connect } from "react-redux"
import store from "@/store"
function Home() {

  const [word,setWord]=useState('');
  const clickHandle = () => {
    console.log(store.getState())
  }

  useEffect(() => {
    store.subscribe(() => {
      setWord(store.getState()['keyword'])
    })
  }, [])
  return (
    <div>
      <h4> Home from header search input:{word}</h4>
      <Button onClick={() => clickHandle()}>打印store</Button>
    </div>
  )
}
export default connect()(Home)
