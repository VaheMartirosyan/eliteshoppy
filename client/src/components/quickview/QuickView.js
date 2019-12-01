import React from 'react';
import './QuickView.scss'

export default props=>{
    return(
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div className={'quickall'}>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className={'Xclose'} aria-hidden="true">&times;</span>
                                </button>
                                <div>

                                    <img src={`/img/${props.QuickCards.img}`} alt=""/>
                                </div>
                                <div>
                                    <div>
                                        <h2>{props.QuickCards.goods_name}</h2>
                                        <p className={'priCe'}>${props.QuickCards.price}</p>
                                    </div>
                                    <div>
                                        <span>Check delivery, payment options and charges to your location</span>
                                        <div className={'inpChek'}>
                                            <input className={'InpTxt'} type="text"/>
                                            <input className={'InpSub'} type="submit"/>
                                        </div>
                                        <div className={'SelectOp'}>
                                            <p>Select Your Esiminch : </p>
                                            <select name="" id="">
                                                <option>40</option>
                                                <option>41</option>
                                                <option>42</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input className={'ToShop'} type="submit" value='Go To Shop'/>
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
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                        data-dismiss="modal">Close
                                                </button>
                                                <button type="button" className="btn btn-primary">
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