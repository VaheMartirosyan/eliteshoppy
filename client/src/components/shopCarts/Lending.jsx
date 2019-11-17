import React from 'react';
import './shopCarts.scss'
import {setProduct,GetShopBascket} from '../UserFunctions'
import Spiner from '../Spiner/Spiner'
import {connect} from 'react-redux'
// import {  } from 'react-router-dom';

class Shopcart extends React.Component {
    state={
        products:[],
        loading:true,
        active:null,
        query:'default',
        b:true
    }
    componentDidMount(){
        setProduct(`http://localhost:5000/stok/${this.state.query}`,"GET")
            .then(body =>{
                this.getProduct(body)
            })
            .catch(err => console.log(err))
    }
    quickvew = ()=>{
        
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

    getProduct = body => this.setState({products:body,loading:false});

    activeclass(e,el){
        this.setState({
            active:e,
            query:el

        });
        setProduct(`http://localhost:5000/stok/${el}`,"GET")
            .then(body =>{
                this.getProduct(body)
            })
            .catch(err => console.log(err))
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
                                <li key={i} onClick={this.activeclass.bind(this,i,el)} className={ i === this.state.active ? 'actives' : 'notactive'}>{el}</li>
                            )
                        })}
                    </ul>

                </div>
                <div className={'shopCartscontainer'}>
                    <div className={'carts'}>
                        {this.state.products.map((item,index)=>{
                            return (

                                <div key={index} className={'shopCarts'}>
                                    <div className={'imgquick'}>
                                        <img src={`./img/${item.img}`} alt="shoose"/>
                                        <div className={'quickdiv'}>
                                            <button className={'quickbtn'} onClick={this.quickvew}>Quick View</button>
                                        </div>
                                    </div>

                                    <div className={'cartitemname'}>
                                        <h4 className="title">{item.goods_name}</h4>
                                    </div>
                                    <div className={'cartprice'}>
                                        <span>${item.price}</span>
                                    </div>
                                    <span className={'new'}>New</span>
                                    {/* onClick={this.addToCartHandler.bind(this, item)} */}
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
        magazine: state.magazine.initmagazine
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shopOpen: () => {
            dispatch({type: 'shopChange'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopcart)