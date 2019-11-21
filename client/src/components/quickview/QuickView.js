import React,{Component} from 'react';
import './QuickView.scss'

export default class QuickView extends Component{
    state ={
            a:{
                _id: '5dc5c34be8939c1a94a5b780',
                cartId: "15dad972-40b5-43ad-a57f-7d4bd131f04a",
                discont: false,
                goods_name: "Corsa",
                description: "wotchs",
                img: "c6ddedd6-3731-47a3-a07d-6ee73a4598cf.jpg",
                price: "31",
                cotegory: "Watches",
                stok: "18",
                productCotegory: "chaiildrenProduct",
                }

    }
    render() {
        return(
            <div className={'quickall'}>
                <div>
                    <img src={`/img/${this.state.a.img}`} alt=""/> 
                </div>
                <div>
                    <div>
                        <h2>{this.state.a.goods_name}</h2>
                        <p>${this.state.a.price}</p>
                    </div>
                   <div>
                       <span>Check delivery, payment options and charges to your location</span>
                       <div>
                           <input type="text"/>
                           <input type="submit"/>
                       </div>
                       <div>
                           <p>Select Your Esiminch : </p>
                           <select name="" id="">
                               <option>40</option>
                               <option>41</option>
                               <option>42</option>
                           </select>
                       </div>
                       <div>
                           <input type="submit" value='Go To Shop'/>
                       </div>
                       <div className={'footericons'}>
                           <ul>
                               <li>
                                   <i className="fa fa-facebook firstfb" aria-hidden="true"/>
                               </li>
                               <li>
                                   <i className="fa fa-twitter twit" aria-hidden="true"></i>
                               </li>
                               <li>
                                   <i className="fa fa-instagram ig" aria-hidden="true"></i>
                               </li>
                               <li>
                                   <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
                               </li>
                           </ul>
                       </div>
                   </div>
                </div>
            </div>
        )
    }
}