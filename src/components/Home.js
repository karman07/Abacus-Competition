import React, {useEffect} from 'react'
import Navbar from './Navbar'
import Login from './Login'
import Main from './Main'
import Entry from './Main/Entry'

const Home = () => {
  return (
    <div>
      {/* {localStorage.clear()} */}
      {localStorage.setItem("correct", 0)}
      {localStorage.setItem("wrong", 0)}
      {localStorage.setItem("left", 0)}
     <Navbar/>
    </div>
  )
}

export default Home
