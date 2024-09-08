import React,{useState} from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
const MensPage = () => {
  const [selectedProduct, setSelectedProduct]=useState([])
  const companyHandler=(mango)=>{
       if(selectedProduct.includes(mango)){
        setSelectedProduct(selectedProduct.filter(item=>item!==mango))
       }
       else{
        setSelectedProduct([...selectedProduct,mango])     /*to get the all selected items of a checkbox not only one we can select any numbers*/
       }
      
  }
  const filteredProduct=selectedProduct.length===0?
       menData:menData.filter((orange)=>selectedProduct.includes(orange.company))
    
    return (
        <>
        <Navbar/>
        <div className="fullpage">
       <div className="pro-selected">
      {menData.map((phone)=>{
        return(
          <div className="pro-input">
            <label>
              <input type="checkbox" 
              checked={selectedProduct.includes(phone.brand)}
              onChange={()=>companyHandler(phone.brand)}
              />
             {phone.brand}
            </label>
            </div>
        )
      })}
    </div>
        <div className='pageSection'>
          {selectedProduct.map((item)=>{
            return(
                <div>
                  <Link to={`/mens/${item.id}`}>
                    <div key={item.id} className='pageImg'>
                        <img src={item.image} alt=""/>
                    </div>
                    </Link>
                    <div className="proModel">
                        {item.brand}, {item.model}
                    </div>
                </div>
            )
          })}
        </div>
        </div>
        </>
      )
}

export default MensPage
