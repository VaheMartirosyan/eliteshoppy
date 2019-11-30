import React , {Component} from 'react'
import Wear from "../wear/Wear"
import ShopItems from './shopitems/Shopitem'
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
<<<<<<< HEAD
        this.setState({
=======
             this.setState({
>>>>>>> b0e20aaed5b4e5a01ce88fe529a44b756ad4a184
            shops:a,totprice:sum

        })

    }
    totalpriceCompiler =  sum => this.setState({totprice:sum + this.state.totprice})
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
                                    <ShopItems item ={item} deletehandler={this.props.deletItem} decriment={this.totalpriceCompiler}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={'totalprice'} onClick={this.jhandler}>
<<<<<<< HEAD
                        <p className={'totprice'}>total price</p>
                        <h1 style={{textAlign:"center",color:"red"}}>{this.state.totprice}</h1>
=======
                       <p className={'totprice'}>total price</p>
                       <h1 style={{textAlign:"center",color:"red"}}>{this.state.totprice}</h1>
>>>>>>> b0e20aaed5b4e5a01ce88fe529a44b756ad4a184
                        <p>
                            {}
                        </p>
                    </div>
                </div>



            </div>
        )
    }
}