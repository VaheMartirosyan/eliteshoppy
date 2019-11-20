import React, { useState, useEffect } from "react"
import {setProduct} from '../UserFunctions'
import Spiner from '../Spiner/Spiner'
import ProductChaigPage from './ProductChaigPage'

export default function Home() {
    
    let [products, setState] = useState({item:[],loading:true})
    let [productforApdate, chaingState] = useState({item:'',visibl:false})
  
    useEffect(() => {
        setProduct('stok/getProduct',"GET")
        .then(body =>{
           
           getProduct(body)
        })
        .catch(err => console.log(err))
         },[]);

   const getProduct = body => setState({item:body,loading:false,visibl:false});
      const ww = ()=>{
       const pagecount = products.item.length / 3
       let pages = [];
       for(let i=1; i<pagecount; i++){
        pages.push(i)
       }
       return pages
   }
  
 const getItem = (text)=>{
  chaingState({item:text,visibl:true})
   }
   return(
  
    <div> {products.loading &&  <Spiner /> }
    { productforApdate.item && <ProductChaigPage prodct={productforApdate.item}/>}
    <div className="pagination">
    <ul class="pagination">
    <li class="page-item disabled" key={800}>
      <a class="page-link" href="#">&laquo;</a>
    </li>
        {ww().map((item,i)=>{
        return  <li class="page-item " key={i}>
      <a class="page-link" href="#">{i}</a>
    </li>
        })}
        <li class="page-item" ey={802}>
      <a class="page-link" href="#">&raquo;</a>
    </li>
        </ul>
    </div>
    <table className="table table-hover">
<thead>
<tr>
<th scope="col">Img</th>
<th scope="col">productCotegory</th>
<th scope="col">Brend</th>
<th scope="col">Prodct count</th>
<th scope="col">Product Type</th>
<th scope="col">Price</th>
</tr>   
</thead>
<tbody>
{products.item.map((item,i)=>{
return <tr key={i} className="table-active" onClick={()=>getItem(item._id)}>
<th scope="row"><img src={`./img/${item.img}`}
width="50px" height="50px" alt={item.category}/></th>
<th >{item.productCotegory}</th>
<td>{item.goods_name}</td>
<td>{item.stok}</td>
<td>{item.cotegory}</td>
<td>{item.price}$</td>
</tr>
})}
</tbody>
</table>
    </div>
   )  
}
