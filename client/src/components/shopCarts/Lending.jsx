import React from 'react';
import './shopCarts.scss'
import {setProduct} from '../UserFunctions'
import Spiner from '../Spiner/Spiner'
import {connect} from 'react-redux'

class Shopcart extends React.Component {
    state={
        products:[],
        loading:true,
        active:null,
        query:'default'
    }
    componentDidMount(){
        setProduct(`http://localhost:5000/stok/${this.state.query}`,"GET")
            .then(body =>{
                this.getProduct(body)
            })
            .catch(err => console.log(err))
    }

    getProduct = body => this.setState({products:body,loading:false});

    activeclass(e,el){
        this.setState({
            active:e,
            query:el

        })
        setProduct(`http://localhost:5000/stok/${el}`,"GET")
            .then(body =>{
                this.getProduct(body)
            })
            .catch(err => console.log(err))
    }
    addToCartHandler = (i, e) => {
        e.preventDefault()
        this.props.magazine.push(i)
    }
    render(){

        if(this.state.loading){
            return <Spiner />
        }

        const ad = ["Mens", "Womens", "Kids"];

        return (
            <div className="shops">
                <h2 className="wthree_text_info">New <span>Arrivals</span></h2>
                <div className="cartNavigate">

                    <ul className="resp-tabs-list">
                        {ad.map((el, i) => {
                            return(
                                <li key={i} onClick={this.activeclass.bind(this,i,el)} className={ i == this.state.active ? 'actives' : 'notactive'}>{el}</li>
                            )
                        })}
                    </ul>

                </div>
                <div className={'shopCartscontainer'}>
                    <div className={'carts'}>
                        {this.state.products.map((item,index)=>{
                            return (

                                <div key={index} className={'shopCarts'}>
                                    <div>
                                        <img src={`./img/${item.img}`} alt="shoose"/>
                                    </div>
                                    <div className={'cartitemname'}>
                                        <h4 className="title">{item.goods_name}</h4>
                                    </div>
                                    <div className={'cartprice'}>
                                        <span>${item.price}</span>
                                    </div>
                                    <span className={'new'}>New</span>
                                    <div className={'cartbutton'} onClick={this.addToCartHandler.bind(this, item)}>
                                   <span className={'cartaddhover'}>
                                       <form >
                                       <fieldset>
                                           <input type="hidden" name="cmd" value={item._id}/>
                                           <input type="hidden" name="add" value="1"/>
                                           <input type="hidden" name="return" value=" "/>
                                           <input type="hidden" name="cancel_return" value=" "/>
                                           <input type="submit" name="submit" value="Add to cart" className="button"/>
                                       </fieldset>
                                   </form>
                                   </span>
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

const mapStateToProps = state => {
    return {
        magazine: state.magazine
    }
}

export default connect(mapStateToProps)(Shopcart)