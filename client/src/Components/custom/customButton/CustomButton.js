import React from 'react'
import "./CustomButton.css"

const CustomButton = (props) => {
  return (
    <>
    <button onClick={props.handleSubmit} style={{width:`${props.width}`,height:`${props.height}`}} className={` fw-bold custom-btn m-0 p-0 ${props.btnWidth}`}>{props.name}</button>
    </>
  )
}

export default CustomButton