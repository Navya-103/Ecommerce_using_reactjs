import React from 'react'
import { tvData } from '../data/tv'
import { Link } from "react-router-dom"
const Tv = () => {
    const firstFiveImages=tvData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
        <h2>Tv</h2>
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

export default Tv
