import React from 'react'
import "./Loader.scss"
import loader from "../../images/loader.gif"
const Loader = () => {
  return (
    <div className="container">
      <div className="loader flex align-center  justify-center ">
    <img src={loader} alt="Loader"/>
    </div>
    
  </div>
  )
}

export default Loader
