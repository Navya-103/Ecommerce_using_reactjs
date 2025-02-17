import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from "react-router-dom"
const Fridge = () => {
    const firstFiveImages=fridgeData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
        <h2>Fridges</h2>
    </div>
      <div className="proSection">
        {
          firstFiveImages.map((item)=>{
             return(
                <div key={item.id} className="imgBox">
                  
                  <img className="proImage" src={item.image} alt=""/>
                  
                  </div>
             )
          })
        }
      </div>
      </>
  )
}

export default Fridge
