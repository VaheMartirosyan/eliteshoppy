import React from 'react'
import './Wear.scss'
import {NavLink} from 'react-router-dom'

export default ({wear}) => {
    return(
        <div className={'wear'}>
            <div className="shadow">
                <div className={'wearTitle'}>
                    <h2> {wear} </h2>
                </div>
                <div className="container">
                    <div className="gohome">
                        <NavLink to={'/'} activeClassName={'activehome'}> HOME </NavLink>
                        <i className="borderBetween"></i>
                        <span> {wear} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}