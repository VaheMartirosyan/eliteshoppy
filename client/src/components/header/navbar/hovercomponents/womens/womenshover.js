import React from 'react'
import women from "../../navimages/top1.jpg";
import './womenshover.scss'

import {withRouter, Link} from 'react-router-dom'


const WomensHover = (props)=>{
    const mens = {one:['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
        two:['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear']};
    return(
        <div className={'womens'} >

            <div className={'womenstxt'}>
                <div className={'womenstxt1'}>
                    <ul>
                        {mens.one.map((e,i)=>{
                            return(
                                <li key={i} onClick={() => props.history.push(e)}>

                                    <Link to={`/womens/${e}`} className={'links'}> {e} </Link>

                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={'womenstxt2'}>
                    <ul>
                        {mens.two.map((e,i)=>{
                            return(
                                <li key={i} onClick={() => props.history.push(e)}>
                                    <Link to={`/womens/${e}`} className={'links'}> {e} </Link>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={'womensimg'}>
                <img src={women} alt="#"/>
            </div>
        </div>
    )
}

export default withRouter(WomensHover)