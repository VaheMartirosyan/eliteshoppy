import React , {Component} from 'react';
import Wear from "../wear/Wear";


export default class Shop extends Component{
    state={
        shops:[],
        a:0,
        b:0

    }
    componentDidMount() {
        this.shopBasket()
    }
    changeQuantity=(i,e)=>{
        console.log(e.target.value);
        var a = this.state.shops.find(a=>a._id === i._id);
        this.state.a = a.price * e.target.value;
        
        this.setState({a:a.price})
        console.log(this.state.a)
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
                                                    <input type="number" min={0} max={e.stok}   onChange={this.changeQuantity.bind(this,e)}/>

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