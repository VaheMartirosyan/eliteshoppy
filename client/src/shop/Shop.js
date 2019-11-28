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
    jhandler=()=>{
        console.log(this.state.shops)
    }
    render() {


        return(
            <div className={'shopwindowall'}>
                <Wear wear={'OUR SHOP'}/>
                <div className={'shopwindow'}>
                    <div className={'totalitems'}>
                        {this.state.shops.map((item,i)=>{
                            return(
                                <div key={i}>
                                    <ShopItems item ={item} deletehandler={this.props.deletItem}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={'totalprice'} onClick={this.jhandler}>
                       <p className={'totprice'}>total price</p>
                        <p>
                            {}
                        </p>
                    </div>
                </div>


                   
            </div>
        )
    }
}