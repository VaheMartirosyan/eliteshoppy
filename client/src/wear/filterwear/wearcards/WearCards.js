import React , {Component}from 'react'
import QuickViewCat from "./Quickviewforcategories/QuickViewCat";
export default class WearCards extends Component{
    state={
        quick:''
    }

    openQuickview=()=>{
        this.state.quick = this.props.all
        this.setState({})
    }
    render() {
        return(
            <div>
                <div className={'shopCarts'}>
                    <div className={'imgquick'}>
                        <img src={`./img/${this.props.itemimg}`} alt="shoose"/>
                        <div className={'quickdiv'}>
                            <button className={'quickbtn'} name={this.props.all._id} onClick={this.openQuickview} data-toggle="modal" data-target="#exampleModal">Quick View</button>
                        </div>
                        <QuickViewCat props = {this.props.all}/>
                    </div>

                    <div className={'cartitemname'}>
                        <h4 className="title">{this.props.item}</h4>
                    </div>
                    <div className={'cartprice'}>
                        <span>${this.props.price}</span>
                    </div>
                    <span className={'new'}>New</span>
                    <div className={'cartbutton'}>
                                   <span className={'cartaddhover'}>
                                       <form  >
                                       <fieldset>
                                           <input type="hidden" name="cmd" value={this.props.item}/>
                                           <input type="hidden" name="add" value="1"/>
                                           <input type="hidden" name="return" value=" "/>
                                           <input type="hidden" name="cancel_return" value=" "/>
                                           <input type="submit" name={this.props.item} value="Add to cart" className="button"/>
                                       </fieldset>
                                   </form>
                                   </span>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
}
// export default ({item,itemimg,price}) => {
//     return(

//     )
// }