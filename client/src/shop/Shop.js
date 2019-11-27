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
                {this.state.shops.map((item,i)=>{
                    return(
                        <div key={i}>
                            <ShopItems item ={item} deletehandler={this.props.deletItem}/>
                        </div>
                    )
                })}
                   
            </div>
        )
    }
}