import React from 'react'
import './Compare.scss'

export default () => {
    return(
        <div className={'headcompare'}>
            <div className="comp">
                <div className={'sortby'}>
                    <span>Sort By</span>
                    <select name="" id="">
                        <option value="">Default</option>
                        <option value="">Name A-Z</option>
                        <option value="">Name Z-A</option>
                        <option value="">Price(High-Low)</option>
                        <option value="">Model(A-Z)</option>
                    </select>
                </div>
                <div className={'showing'}>
                    <span>Showing</span>
                    <select name="" id="">
                        <option value="">7</option>
                        <option value="">14</option>
                        <option value="">28</option>
                        <option value="">35</option>
                    </select>
                </div>
            </div>
        </div>
    )
}