import React , {Component} from 'react'
import Wear from "../wear/Wear"
import ShopItems from './shopitems/Shopitem'
import {Link} from 'react-router-dom'
import './Shop.scss'



export default class Shop extends Component{
    state={
        shops:[],
        totprice:0
    }
    componentDidMount() {
        this.shopBasket()
    }

    shopBasket() {
        const shop = localStorage.getItem('cartId');
        const a = JSON.parse(shop)
        let sum = 0;
        a.map(num=> sum = sum + parseInt(num.price) )
             this.setState({
                    shops:a,
                    totprice:sum

        })

    }
    totalpriceCompiler =  sum => this.setState({totprice:sum + this.state.totprice})
    totalincrement = sum => this.setState({totprice:this.state.totprice - sum})
    render() {

       
        return(
            <div className={'shopwindowall'}>
                <Wear wear={'OUR SHOP'}/>
                {this.state.shops.length === 0 ?
                    <div className={'nothing'}>
                        <p>The Basket Is Epmty</p>
                        <p>Add Products To Buy</p>
                        <div className={'shoplinks'}>
                            <Link className={'linkfromshop'} to={'/mens'}>Mens Wear</Link>
                            <Link className={'linkfromshop'} to={'/womens'}>Womens Wear</Link>
                        </div>

                    </div> :
                    <div className={'shopwindow'}>
                        <div className={'totalitems'}>
                            {this.state.shops.map((item,i)=>{
                                return(
                                    <div key={i}>
                                        <ShopItems item ={item} deletehandler={this.props.deletItem} increment = {this.totalincrement} decriment={this.totalpriceCompiler}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={'totalprice'} onClick={this.jhandler}>
                            <p className={'totprice'}>total price</p>
                            <p className={'totsum'}>
                                ${this.state.totprice}
                            </p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}