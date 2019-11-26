import React , {Component} from 'react'
import NumericInput from 'react-numeric-input'
import Wear from "../wear/Wear"
import './Shop.scss'


export default class Shop extends Component{
    state={
        shops:[],
        a:true,
        b:0,
        c:55

    }
    componentDidMount() {
        this.shopBasket()
    }

    changeQuantity=(a,i,e)=>{

        a.price = this.state.c * e
        this.setState({})

        console.log(this.state.shops)
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
                <div>
                    {this.state.shops.length === 0 ? 'Your Basket is empty' : <div>
                        {this.state.shops.map((e,i)=>{
                                return(
                                                <li key={i}>
                                                    <img src={`./img/${e.img}`} alt="shoose"/>
                                                    <h4 >{e.goods_name}</h4>

                                                    <NumericInput  min={0} max={e.stok}  onChange={this.changeQuantity.bind(this,e,i)}/>
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