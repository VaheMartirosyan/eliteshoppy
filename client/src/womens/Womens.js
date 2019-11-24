import React, { useState, useEffect } from "react"
import {setProduct} from '../components/UserFunctions'
export default () => {
    let [womenProducts, setStates] = useState('');
    useEffect(()=>{
        setProduct(`stok/womenproduct`,"GET")
        .then(prod=>{
            setStates(womenProducts = prod)
        
      })
    },[])
    console.log(womenProducts)
    return(
        
        <div>
            <h1>Womens</h1>
        </div>
    )
}