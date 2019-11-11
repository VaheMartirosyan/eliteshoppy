import React, { Component } from 'react'


export default class About extends Component  {
    state = {
        selectedCart:''
    }
   componentDidMount(){
   setTimeout(()=>{
    const token = localStorage.cartId
    if(token !== undefined){
     const selectedCart = JSON.parse(token);
      this.setState({selectedCart:selectedCart})
        
   }
   },1000)
   
}
render(){
   const cart = this.state.selectedCart;
    return(
        <div>
            <h1> {cart.goods_name} </h1>
            <img src={`./img/${cart.img}`} alt="good"/>
        </div>
    )
}
}