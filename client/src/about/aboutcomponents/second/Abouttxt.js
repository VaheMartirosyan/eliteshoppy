import React from 'react';
import pic from './img/ab_pic.jpg'
import './Abouttxt.scss';


export default () =>{
    return(
        <div className={'aboutour'}>

                <img className={'aboutuspic'} src={pic} alt=""/>

            <div className={'aboutourtxt'}>
                <h2><span>About our elite</span> shoppy</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor..</p>
                <p>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    )
}