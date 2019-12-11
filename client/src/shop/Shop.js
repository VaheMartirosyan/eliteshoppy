import React , {Component} from 'react'
import Wear from "../wear/Wear"
import ShopItems from './shopitems/Shopitem'
import {Link} from 'react-router-dom'
import './Shop.scss'
import Fixed from "../components/fixed/Fixed";



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
                        <button type="button" className=" stickybtn" data-toggle="modal"
                                data-target=".bd-example-modal-lg">
                            Make Purchases
                        </button>

                        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog"
                             aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className={'c'}>
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputEmail4">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail4"
                                                           placeholder="Email"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputPassword4">Password</label>
                                                    <input type="password" className="form-control" id="inputPassword4"
                                                           placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address</label>
                                                <input type="text" className="form-control" id="inputAddress"
                                                       placeholder="1234 Main St"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress2">Address 2</label>
                                                <input type="text" className="form-control" id="inputAddress2"
                                                       placeholder="Apartment, studio, or floor"/>
                                            </div>


                                            <button type="submit" className="btn btn-primary">Sign in</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                }
                <Fixed/>
            </div>
        )
    }
}