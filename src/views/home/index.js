import React from "react"
import { useSelector } from "react-redux"
function Home(props) {
  console.log(props)
  const keyword=useSelector(state=>state.keyword)
  return (
    <div>
      <h4 style={{color:'#333',fontSize:'40px'}}> current keyword from header input:{keyword}</h4>
    </div>
  )
}
export default Home
