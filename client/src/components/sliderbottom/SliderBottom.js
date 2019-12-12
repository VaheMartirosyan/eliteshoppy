import React from 'react';
import pic1 from './sliderbottomimg/bottom1.jpg';
import pic2 from './sliderbottomimg/bottom2.jpg';
import './SliderBottom.css';
import './MediaSliderBottom.scss'


export default ()=>{
    return(
        <div className={'botall'}>
            <div className="test">
                <figure className="figure-hover">
                    <img src={pic1} alt=" Night and snow" className={'d'}/>
                    <div className={'h'}>
                        <h3><span>F</span>ALL AHEAD</h3>
                    </div>
                    <figcaption>

                        <p>New Arrivals</p>
                    </figcaption>
                </figure>
            </div>
            <div className="test">
                <figure className="figure-hover gh">
                    <img src={pic2} alt=" Night and snow" className={'d'}/>
                    <div className={'h'}>
                        <h3><span>F</span>ALL AHEAD</h3>
                    </div>
                    <figcaption>

                        <p>New Arrivals</p>
                    </figcaption>
                </figure>
            </div>
        </div>

    )
}