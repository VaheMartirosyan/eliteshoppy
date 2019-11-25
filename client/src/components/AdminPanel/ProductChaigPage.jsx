import React, { useState, useEffect } from "react"
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const ProductChaigPage = ({prodct}) => {
    let [apdProduct,setstate] = useState({apdProduct:'',visibl:false})
    const classes = useStyles();
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
               <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue={item.goods_name}
          className={classes.textField}
          margin="normal"
          variant="filled"
             />
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
    console.log(apdProduct);
    return product() 
  }
  
 return(
    <span>oo</span>
 )
    
}

export default ProductChaigPage;


