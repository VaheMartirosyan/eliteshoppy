import React, {Component} from 'react'
import axios from 'axios'
import QuickView from "../components/quickview/QuickView";
import {GetShopBascket} from "../components/UserFunctions";
import Wear from "../wear/Wear";

export default class Newfilter extends Component {
    state = {
        products:[],
        QuickCards:''
    }
    componentDidMount(){
        this.cart()

    }
    cart = async user => {
        let query = this.props.match.params.frommens;
        if(query == undefined) query = this.props.match.params.fromwomens;
        
        const prod = JSON.stringify(query);
        return await axios
          .get(`filterProduct/${JSON.parse(prod)}`)
          .then(response => {
          
           if(response.status === 200){
               this.setState({products:response.data})
           }
            return response.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    onSubmit= (e)=>{
        e.preventDefault();

        const getShopBascket = new GetShopBascket();
        getShopBascket.cart({id:e.target.name})
            .then(body =>{
                const setitem = this.props.setitem;
                setitem(body)
            })
            .catch(err => console.log(err))

    };

    BtnQuickView=(i)=>{
        this.state.QuickCards = i
        this.setState({})

    }

    render() {
        console.log(this.props.match)
        return(
            <div>
                <Wear wear = {`${this.props.match.params.frommens ? 'MENS' : 'WOMENS'}`}/>
                <QuickView setitem = {this.props.setitem} BtnQuickView={this.BtnQuickView} QuickCards={this.state.QuickCards}/>
                <div className={'shopCartscontainer'}>
                    <div className={'carts'}>
                        {this.state.products.map((item,index)=>{
                            return (
                                <div key={index} className={'shopCarts'}>
                                    <div className={'imgquick'}>
                                        <img src={`../img/${item.img}`} alt="shoose"/>
                                        <div className={'quickdiv'}>
                                            <button className={'quickbtn'} name={item._id} onClick={this.BtnQuickView.bind(this,item)} data-toggle="modal" data-target="#exampleModal">Quick View</button>
                                        </div>
                                    </div>
                                    <div className={'cartitemname'}>
                                        <h4 className="title">{item.goods_name}</h4>
                                    </div>
                                    <div className={'cartprice'}>
                                        <span>${item.price}</span>
                                    </div>
                                    <span className={'new'} >New</span>
                                    <div >
                                        <div className={'cartbutton'} onClick = {this.props.shopOpen} >
                                   <span className={'cartaddhover'}>
                                       <form  >
                                       <fieldset>
                                           <input type="hidden" name="cmd" value={item._id}/>
                                           <input type="hidden" name="add" value="1"/>
                                           <input type="hidden" name="return" value=" "/>
                                           <input type="hidden" name="cancel_return" value=" "/>
                                           <input type="submit" name={item._id} value="Add to cart" className="button" onClick={this.onSubmit}/>
                                       </fieldset>
                                   </form>
                                   </span>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}