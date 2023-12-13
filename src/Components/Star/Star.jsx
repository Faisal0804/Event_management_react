import React, { Fragment } from 'react'
import { FaStar } from "react-icons/fa";

const Star = ({ filled, onClick }) => {
  return (
    <Fragment>
        
        <FaStar
            color={filled ? "orange" : "lightgray"} 
            onClick={onClick}      
        />
    </Fragment>
  )
}

export default Star