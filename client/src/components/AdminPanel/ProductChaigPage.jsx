import React, { useState, useEffect } from "react"
import axios from 'axios'





const ProductChaigPage = ({prodct}) => {
    let [apdProduct,setstate] = useState('')
    useEffect(()=>{
        axios
      .post('stok/getSinglProduct', {
          product:prodct
      }).then(prod=>{
       chaing(prod.data.res)
        
      })
    },[])
    const chaing = (text)=>{
        setstate(apdProduct = text)
    }
    console.log(apdProduct)
    return (
      <span>ll</span>
//       apdProduct?<div></div>:<div>
//       {apdProduct.map(item=>{
//         return <div>
//              <h1>{item.description}</h1>
//           <img src={`./img/${item.img}`} />
//         </div>  
         
//       })}
//  </div>     
           
        
    );
}

export default ProductChaigPage;
