import React , {Component} from 'react';
import Wear from "../wear/Wear";


export default class Shop extends Component{
    state={
        shops:[]
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

        console.log(this.state.shops)
        return(
            <div>
                <Wear wear={'OUR SHOP'}/>
                <div>
                    {this.state.shops.length === 0 ? 'Your Basket is empty' : <div>
                        {this.state.shops.map((e,i)=>{
                                return(
                                                <li key={i}>
                                                    <img src={`./img/${e.img}`} alt="shoose"/>
                                                    <h4 >{e.goods_name}</h4>
                                                    <input type="number"/>
                                                    <span>${e.price}</span>
                                                    <span className="delete" >x</span>
                                                </li>
                                            )
                                        })}


                    </div> }
                </div>

            </div>
        )
    }
}