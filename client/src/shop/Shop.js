import React , {Component} from 'react'

import Wear from "../wear/Wear"
import ShopItems from './shopitems/Shopitem'



export default class Shop extends Component{
    state={
        shops:[],
    }
    componentDidMount() {
        this.shopBasket()
    }
    itemsDeleteHandler = (e) =>{
        let itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : [];
        let a = itemsArray.filter(a=> a._id!== e)
        itemsArray = a
        localStorage.setItem('cartId',JSON.stringify(itemsArray))
        this.state.shops = itemsArray
        this.setState({

        })

        console.log(a)
    }
    shopBasket() {
        const shop = localStorage.getItem('cartId');
        const a = JSON.parse(shop)
        this.setState({
            shops:a
        })

    }
    render() {
  

        return(
            <div>
                <Wear wear={'OUR SHOP'}/>
                {this.state.shops.map((item,key)=>{
                    return(
                        <div key={key}>
                            <ShopItems item ={item} deletehandler={this.itemsDeleteHandler}/>
                        </div>
                    )
                })}
                   
            </div>
        )
    }
}