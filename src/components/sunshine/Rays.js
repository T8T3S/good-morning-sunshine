import React from 'react'
import './ray.css'

const Rays =()=>{
  return(
    <>
      <div className="Ray" style={{transformOrigin: 'rotate(15deg)'}}/>
      <div className="Ray2"style={{transformOrigin: 'rotate(30deg)'}}/>
      {/* <div className="Ray"style={{transform: 'rotate(90deg)'}}/>
      <div className="Ray2"style={{transform: 'rotate(120deg)'}}/> */}
    </>
  )
}

export default Rays