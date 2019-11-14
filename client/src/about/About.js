import React, { Component } from 'react'
import {divWithClassName} from "react-bootstrap/esm/utils/divWithClassName";
import Wear from "../wear/Wear";
import Abouttxt from "./aboutcomponents/second/Abouttxt";
import SliderBottom from "../components/sliderbottom/SliderBottom";
import Fixed from "../components/fixed/Fixed";
import Middle from "../components/middle/Middle";


// export default class About extends Component  {
//     state = {
//         selectedCart:''
//     }
//    componentDidMount(){
//    setTimeout(()=>{
//     const token = localStorage.cartId
//     if(token !== undefined){
//      const selectedCart = JSON.parse(token);
//       this.setState({selectedCart:selectedCart})
//
//    }
//    },1000)
//
// }
// render(){
//    const cart = this.state.selectedCart;
//     return(
//         <div>
//             <h1> {cart.goods_name}</h1>
//             <img src={`./img/${cart.img}`} alt="good"/>
//         </div>
//     )
// }
// }


export default () =>{
    return(
        <div>
            <Wear wear={"ABOUT US"} />
            <Abouttxt/>
            <SliderBottom/>
            <Middle/>
            <Fixed/>
        </div>
    )
}