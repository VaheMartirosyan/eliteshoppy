import React , {Component} from 'react'
import Wear from "../wear/Wear"
import ShopItems from './shopitems/Shopitem'
import './Shop.scss'



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
                <div className={'shopwindow'}>
                    <div>
                        {this.state.shops.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <ShopItems item ={item} deletehandler={this.props.deletItem}/>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h1>hello</h1>
                    </div>
                </div>


                   
            </div>
        )
    }
}