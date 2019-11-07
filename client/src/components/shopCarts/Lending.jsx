import React from 'react'
import './shopcarts.css'
import {setProduct} from '../UserFunctions'
import Spiner from '../Spiner/Spiner'

export default class Shopcart extends React.Component {
    state={
        products:[],
        loading:true
    }
    componentDidMount(){
        setProduct("http://localhost:5000/stok/getProductCarts","GET")
        .then(body =>{
            this.getProduct(body)
        })
        .catch(err => console.log(err))
       
    }

    getProduct = body => this.setState({products:body,loading:false});
   
   render(){
       if(this.state.loading){
           return <Spiner />
       }
       return (
           <div className="shopitm_wrap">
           <h3 className="wthree_text_info">New <span>Arrivals</span></h3>
           <div className="cartNavigate">
           <ul className="resp-tabs-list">
							<li className="resp-tab-item resp-tab-active" aria-controls="tab_item-0" role="tab"> Men's</li>
							<li className="resp-tab-item" aria-controls="tab_item-1" role="tab"> Women's</li>
							<li className="resp-tab-item" aria-controls="tab_item-2" role="tab"> Bags</li>
							<li className="resp-tab-item" aria-controls="tab_item-3" role="tab"> Footwear</li>
						</ul>
           </div>
           <div className='shopItem'>
      
          {this.state.products.map((item,index)=>{
              return  <div className="wrap" key={index}>
               <div className="imgConteiner"><img src={`./img/${item.img}`} alt="shoose"/>
              <div className="item-info-product">
              <span className="product-new-top">New</span>
               <h4 className="title">{item.goods_name}</h4>
               <div className="info-product-price">
                   <span>${item.price}</span>
               </div>
               <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
              <form >
                        <fieldset>
                        <input type="hidden" name="cmd" value={item._id}/>
                            <input type="hidden" name="add" value="1"/>
                            <input type="hidden" name="business" value=" "/>
                            <input type="hidden" name="item_name" value="Formal Blue Shirt"/>
                            <input type="hidden" name="amount" value="30.99"/>
                            <input type="hidden" name="discount_amount" value="1.00"/>
                            <input type="hidden" name="currency_code" value="USD"/>
                            <input type="hidden" name="return" value=" "/>
                            <input type="hidden" name="cancel_return" value=" "/>
                            <input type="submit" name="submit" value="Add to cart" className="button"/>
                        </fieldset>
                    </form>
                </div>
               </div>
              
              </div>
             
           </div>
          })}
        
        </div>
           </div>
       
      
    )
}
}
