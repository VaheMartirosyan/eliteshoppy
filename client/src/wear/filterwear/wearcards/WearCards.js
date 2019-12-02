import React , {Component}from 'react'
import QuickViewCat from "./Quickviewforcategories/QuickViewCat";
import {connect} from 'react-redux'
import {GetShopBascket, setProduct} from "../../../components/UserFunctions"


class WearCards extends Component{

    state={
        quick:'',
        query:'default'
        
    }

    openQuickview=(e)=>{
         this.setState({quick:e})
       console.log(this.state.quick)
    }

    onSubmit= (e)=>{
        e.preventDefault();
console.log(e)
        const getShopBascket = new GetShopBascket();
        getShopBascket.cart({id:e.target.name},'stok/cartVew')
            .then(body =>{
                const setitem = this.props.setitem;
                setitem(body)
            })
            .catch(err => console.log(err))
        

    };
    render() {
    
        return(
            <div>
                <div className={'shopCarts'}>
                    <div className={'imgquick'}>
                        <img src={`./img/${this.props.itemimg}`} alt="shoose"/>
                        <div className={'quickdiv'}>
                            <button className={'quickbtn'} name={this.props.all._id}onClick={this.openQuickview.bind(this,this.props.all)} data-toggle="modal" data-target="#exampleModal">Quick View</button>
                        </div>
                        <QuickViewCat props = {this.state.quick}/>
                    </div>

                    <div className={'cartitemname'}>
                        <h4 className="title">{this.props.item}</h4>
                    </div>
                    <div className={'cartprice'}>
                        <span>${this.props.price}</span>
                    </div>
                    <span className={'new'}>New</span>
                    <div className={'cartbutton'} onClick = {this.props.shopOpen}>
                                   <span className={'cartaddhover'}>
                                       <form  >
                                       <fieldset>
                                           <input type="hidden" name="cmd" value={this.props.item}/>
                                           <input type="hidden" name="add" value="1"/>
                                           <input type="hidden" name="return" value=" "/>
                                           <input type="hidden" name="cancel_return" value=" "/>
                                           <input type="submit" name={this.props.all._id} value="Add to cart" className="button" onClick={this.onSubmit}/>
                                       </fieldset>
                                   </form>
                                   </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(WearCards)