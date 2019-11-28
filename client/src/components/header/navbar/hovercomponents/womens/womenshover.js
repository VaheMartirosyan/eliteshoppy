import React from 'react'
import women from "../../navimages/top1.jpg";
import './womenshover.scss'

export default ()=>{
    const mens = {one:['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
        two:['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear']};
    return(
        <div className={'womens'} >

            <div className={'womenstxt'}>
                <div className={'womenstxt1'}>
                    <ul>
                        {mens.one.map((e,i)=>{
                            return(
                                <li key={i}>
                                    <a href="1">{e}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={'womenstxt2'}>
                    <ul>
                        {mens.two.map((e,i)=>{
                            return(
                                <li key={i}>
                                    <a href="1">{e}</a>
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