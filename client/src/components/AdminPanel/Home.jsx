import React, { Component } from 'react'
import {setProduct} from '../UserFunctions'
import Spiner from '../Spiner/Spiner'
export default class Home extends Component {
    state={
        products:[],
        loading:true
    }
    componentDidMount(){
        setProduct('stok/getProduct',"GET")
        .then(body =>{
            this.getProduct(body)
        })
        .catch(err => console.log(err))
       
    }

    getProduct = body => this.setState({products:body,loading:false});
   
    render() {
      if(this.state.loading){
          return <Spiner />
      }
     
        return (
            <div>
            <table className="table table-hover">
  <thead>
  <tr>
      <th scope="col">Img</th>
      <th scope="col">ID</th>
      <th scope="col">Brend</th>
      <th scope="col">Prodct count</th>
      <th scope="col">Product Type</th>
      <th scope="col">Price</th>
    </tr>   
  </thead>
  <tbody>
  {this.state.products.map((item,i)=>{
   return <tr key={i} className="table-active">
      <th scope="row"><img src={`./img/${item.img}`}
      width="50px" height="50px" alt={item.category}/></th>
      <th >{item._id}</th>
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
}
