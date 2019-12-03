import React, { useState, useEffect } from "react"
import axios from 'axios'
import TextInput from './material UI/TextInput'
import Select from './material UI/SelectInput'


const ProductChaigPage = ({prodct}) => {
    let [apdProduct,setstate] = useState({apdProduct:'',visibl:false})
    const products = ['onChangeimg', 'Wallets', 'Footwear', 'Watches', 'Accessories', 'Bags', 'Swimwear',
    ' Caps & Hats', 'Jewellery', 'One', 'Sunglasses', 'Perfumes', 'Beauty', 'Shirts', 'Sunglasses']
  const productCotegory = ['womensProduct','meanProduct','chaiildrenProduct'] ;
    useEffect(()=>{
        axios
      .post('stok/getSinglProduct', {
          product:prodct
      }).then(prod=>{
        if(prod.data.res === null){
          return null
        }
       else{
        setstate({apdProduct:[prod.data.res],visibl:true})
       }

      })
    },[])
    const product = ()=>{
      return (

        <div>
        <span>{apdProduct.apdProduct.cartId}</span>
         {apdProduct.visibl &&  <div> {apdProduct.apdProduct.map((item,i)=>{

            return  <div className='divWraper' key={i}>
               <div className="myinputs">
                  <TextInput item={item}/>
                  <Select prodcts={products} />
               </div>
               <div className="myinputs">

               </div>
            </div>

          })}
     </div>     }
                  </div>



     )
    }
  if(apdProduct !== ''){
    
    return product()
    
  }

 return(
    <span>oo</span>
 )

}

export default ProductChaigPage;


