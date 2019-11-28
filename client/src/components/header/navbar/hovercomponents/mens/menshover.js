import React from 'react'
import men from "../../navimages/top2.jpg";
import {Link} from 'react-router-dom'
import './menshover.scss'

export default ()=>{
    const mens = {one:['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
        two:['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear']};
    return(
        <div  className={'mens'}>
            <div className={'mensimg'}>
                <img src={men} alt=""/>
            </div>
            <div className={'menstxt'}>
                <div className={'menstxt1'}>
                    <ul className={'mentxtul1'}>
                        {mens.one.map((e,i)=>{
                            return(
                                <li key={i}>
                                   <Link to={`mens/${e}`}>{e}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={'menstxt2'}>
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
        </div>
    )
}