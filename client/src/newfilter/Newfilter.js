import React, { useState, useEffect } from "react"
import axios from 'axios'
import QuickView from "../components/quickview/QuickView";
import {GetShopBascket} from "../components/UserFunctions";
import Spiner from '../components/Spiner/Spiner'
import Wear from "../wear/Wear";
import './Newfilter.scss'


export default function Newfilter(props){


    const [productforApdate, chaingState] = useState({data:[],loaded:false})
    const [QuickCards, quickState] = useState('')
    let itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : [];
    useEffect(()=>{
        cart()
    },[props.match.params])
    
  const cart = async user => {
        let query = props.match.params.frommens;
        if(query === undefined) query = props.match.params.fromwomens;
        
        const prod = JSON.stringify(query);
        return await axios
          .get(`filterProduct/${JSON.parse(prod)}`)
          .then(response => {
          
           if(response.status === 200){
            chaingState({data:response.data,loaded:true})
           }
            return response.data
          })
          .catch(err => {
            console.log(err)
          })
      }
      const setitem = (item)=>{

        const arr = itemsArray.find( arr=>arr._id === item._id)
        if(arr){
           console.log('catch');
        }else{
          
            itemsArray.push(item)
            localStorage.setItem('cartId', JSON.stringify(itemsArray));
           
        }
    }
  const onSubmit= (e)=>{
        e.preventDefault();

        const getShopBascket = new GetShopBascket();
        getShopBascket.cart({id:e.target.name},'cartVew')
            .then(body =>{
              
                setitem(body)
            })
            .catch(err => console.log(err))

    };
    

  const  BtnQuickView=(i)=>{
    quickState(i)
        

    }
    if(!productforApdate.loaded){
        return <Spiner />
    }

        return(
            <div>
                <Wear wear = {`${props.match.params.frommens ? 'MENS' : 'WOMENS'}`}/>
                <QuickView setitem = {props.setitem} BtnQuickView={BtnQuickView} QuickCards={QuickCards}/>
                <h2 className={'newfilth'}>F<span>ind</span> Y<span>our</span>  P<span>roduct</span> H<span>ere</span></h2>
                <div className={'newfilt'}>
                    <div className={'shopCartscontainer'}>
                        <div className={'carts'}>
                            {productforApdate.data.map((item,index)=>{
                                return (
                                    <div key={index} className={'shopCarts'}>
                                        <div className={'imgquick'}>
                                            <img src={`../img/${item.img}`} alt="shoose"/>
                                            <div className={'quickdiv'}>
                                                <button className={'quickbtn'} name={item._id} onClick={BtnQuickView.bind(this,item)} data-toggle="modal" data-target="#exampleModal">Quick View</button>
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
                                            <div className={'cartbutton'} onClick = {props.shopOpen} >
                                   <span className={'cartaddhover'}>
                                       <form  >
                                       <fieldset>
                                           <input type="hidden" name="cmd" value={item._id}/>
                                           <input type="hidden" name="add" value="1"/>
                                           <input type="hidden" name="return" value=" "/>
                                           <input type="hidden" name="cancel_return" value=" "/>
                                           <input type="submit" name={item._id} value="Add to cart" className="button" onClick={onSubmit}/>
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
        )
    
}