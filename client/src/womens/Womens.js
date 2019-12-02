import React, { Component } from "react"
import {GetShopBascket, setProduct} from '../components/UserFunctions'
import Wear from "../wear/Wear";
import FilterWear from "../wear/filterwear/FilterWear";
import Spiner from "../components/Spiner/Spiner";
import QuickView from "../components/quickview/QuickView";
import {connect} from "react-redux";



class Womens extends Component {

    state = {
        wearTitle: 'MEN\'S WEAR',
        products: [],
        loading: true,
        QuickCards:''
    }
    componentDidMount(){
        setProduct(`stok/womenproduct`,"GET")
            .then(body =>{
                this.setState({products:body})
                this.getProduct(body)

            })
            .catch(err => console.log(err))
    }
    getProduct = body => this.setState({products:body, loading:false})

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
        if(this.state.loading) {
            return  <Spiner />
        }

        return(
            <div>
                <Wear wear={'Womens Wear'} />
                <FilterWear imgone={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner4.jpg'}
                            imgtwo={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner3.jpg'}
                            imgthree={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner1.jpg'}
                            imgfour={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/bb1.jpg'}
                />
                <div className="container">
                    <div className={'cardwears'}>
                        <QuickView setitem = {this.props.setitem} BtnQuickView={this.BtnQuickView} QuickCards={this.state.QuickCards}/>
                        <div className={'shopCartscontainer'}>
                            <div className={'carts'}>
                                {this.state.products.map((item,index)=>{
                                    return (
                                        <div key={index} className={'shopCarts'}>
                                            <div className={'imgquick'}>
                                                <img src={`./img/${item.img}`} alt="shoose"/>
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        magazine: state.magazine.initmagazine,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shopOpen: () => {
            dispatch({type: 'shopChange'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Womens)