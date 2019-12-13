import React from 'react';
import './Middle.css'
import './MediaMiddle.scss'
import img from './middleimg/mid.jpg'

export default ()=>{
    return(
        <div className={'midall'}>

            <div className={'midimgdiv'}>
                <img src={img} alt=""/>
            </div>

            <div className={'midtextdiv'}>
                <div className={'midtxt'}>
                    <h3>Save up to <span>50%</span> in this week</h3>
                    <p className={'midtxtp'}>Suspendisse varius turpis efficitur erat laoreet dapibus.
                        Mauris sollicitudin scelerisque commodo.Nunc dapibus mauris sed metus finibus posuere.</p>
                    <div className={'counter'}>
                        <div className={'counterdivs'}>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <p className={'countp'}>Customers</p>
                            <p className={'countnum'}>142</p>
                        </div>
                        <div className={'counterdivs'}>
                            <i className="fa fa-calendar-o" aria-hidden="true"></i>
                            <p className={'countp'}>Events</p>
                            <p className={'countnum'}>112</p>
                        </div>
                        <div className={'counterdivs'}>
                            <i className="fa fa-shield" aria-hidden="true"></i>
                            <p className={'countp'}>Awards</p>
                            <p className={'countnum'}>7</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}