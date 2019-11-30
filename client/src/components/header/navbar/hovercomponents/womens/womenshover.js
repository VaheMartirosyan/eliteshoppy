import React from 'react'
import women from "../../navimages/top1.jpg";
import './womenshover.scss'
<<<<<<< Updated upstream
import {withRouter, Link} from 'react-router-dom'
=======
import {withRouter} from 'react-router-dom'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
                                    <Link to={`/womens/${e}`} className={'links'}> {e} </Link>
=======
                                    <span>{e}</span>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                                    <Link to={`/womens/${e}`} className={'links'}> {e} </Link>
=======
                                    <span>{e}</span>
>>>>>>> Stashed changes
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