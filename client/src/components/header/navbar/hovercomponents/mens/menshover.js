import React from 'react'
import men from "../../navimages/top2.jpg"
<<<<<<< Updated upstream
import {Link, withRouter} from 'react-router-dom'
=======
import {withRouter} from 'react-router-dom'
>>>>>>> Stashed changes
import './menshover.scss'

const MensHover =  (props)=>{
    const mens = {one:['Caps','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
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
                                <li key={i} onClick={() => props.history.push(e)}>
<<<<<<< Updated upstream
                                    <Link to={`/mens/${e}`} className={'links'}> {e} </Link>
=======
                                   <span>{e}</span>
>>>>>>> Stashed changes
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={'menstxt2'}>
                    <ul>
                        {mens.two.map((e,i)=>{
                            return(
                                <li key={i} onClick={() => props.history.push(e)}>
<<<<<<< Updated upstream
                                    <Link to={`/mens/${e}`} className={'links'}> {e} </Link>
=======
                                    <span>{e}</span>
>>>>>>> Stashed changes
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MensHover)