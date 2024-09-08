import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from "react-router-dom"
const Furniture = () => {
    const firstFiveImages=furnitureData.slice(0,5)
  return (
    <>
  <div className='proTitle'>
        <h2>Furniture</h2>
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

export default Furniture
