import React , {Component} from 'react';
import Wear from "../wear/Wear";


export default class Shop extends Component{
    state={
        shops:[],
        a:true,
        b:1,


    }
    componentDidMount() {
        this.shopBasket()
    }
    changeQuantity=(i,index, a)=>{

        i.__v = a.target.value * i.price

       this.setState({
          b:this.state.shops[index].__v,
           a:false
       })

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
                                                    <input type="number" min={1} max={e.stok}   onChange={this.changeQuantity.bind(this,e,i)}/>

                                                    <span>${ e.__v}</span>
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