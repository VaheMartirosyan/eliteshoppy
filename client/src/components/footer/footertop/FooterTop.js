import React from 'react';
import './FooterTop.scss'
import './MediaFooterTop.scss'

export default ()=>{
    return(
        <div className={'foottop'}>
            <div>
                <div className={'ictxtdiv'}>
                    <div className={'footicondiv'}>
                        <i className="fa fa-truck" aria-hidden="true"></i>
                    </div>
                    <div className={'foottoptxt'}>
                        <h3>free shipping</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
                <div className={'ictxtdiv'}>
                    <div className={'footicondiv'}>
                        <i className="fa fa-headphones" aria-hidden="true"></i>
                    </div>
                    <div className={'foottoptxt'}>
                        <h3>24/7 support</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className={'ictxtdiv'}>
                    <div className={'footicondiv'}>
                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    </div>
                    <div className={'foottoptxt'}>
                        <h3>money back guarantee</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
                <div className={'ictxtdiv'}>
                    <div className={'footicondiv'}>
                        <i className="fa fa-gift" aria-hidden="true"></i>
                    </div>
                    <div className={'foottoptxt'}>
                        <h3>free gift coupons</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}