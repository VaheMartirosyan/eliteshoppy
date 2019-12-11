import React,{Component} from 'react';
import './QuickView.scss'
import {GetShopBascket} from "../UserFunctions";




export default class QuickView extends Component{
    onSubmit= (e)=>{
        e.preventDefault();

        const getShopBascket = new GetShopBascket();
        getShopBascket.cart({id:e.target.name},'stok/cartVew')
            .then(body =>{
               if(!body){
                return console.log('somthing bead hepends');
               }
               const setitem = this.props.setitem;
               setitem(body)
              
            })
            .catch(err => console.log(err))

    };



    render(){
        return(

   

            <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className={'quickall'}>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className={'Xclose'} aria-hidden="true">&times;</span>
                            </button>
                            <div>

                                <img src={`/img/${this.props.QuickCards.img}`} alt=""/>
                            </div>
                            <div>
                                <div>
                                    <h2>{this.props.QuickCards.goods_name}</h2>
                                    <p className={'priCe'}>${this.props.QuickCards.price}</p>
                                </div>
                                <div>


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
                                        <div>
                                            <h3>Description</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, labore?</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, labore?</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-dismiss="modal">Close
                                            </button>
                                            <button type="button" name = {this.props.QuickCards._id} className="btn btn-primary" onClick={this.onSubmit}>
                                                Add Product
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}