import React, {useState } from "react"
import { Button } from "antd"
import { useSelector } from "react-redux"
function Home() {
  const keyword=useSelector(state=>state.keyword)
  const [word,setWord]=useState('');
  const clickHandle = () => {
    setWord(keyword)
  }
 
  return (
    <div>
      <h4> click Button get current keyword:{word}</h4>
      <Button onClick={() => clickHandle()}>获取keyword</Button>
    </div>
  )
}
export default Home
