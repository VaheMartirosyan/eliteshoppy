import React, {Component} from 'react'
import './Person.scss'

export default class Person extends Component {

    render() {
        return(
            <div className={'container'}>
                <div className="filter">
                    <div className={'price'}>
                        <div className="byprice">
                            <h3> FILTER BY <span>PRICE</span></h3>
                        </div>
                        <div>
                            <input type="range"/>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                        <div>
                            <div>
                                <h3>Categories</h3>
                                <ul>
                                    <li> Men's Wear </li>
                                    <li> Best Collections </li>
                                    <li> Best Offers </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'product'}>
                        <h2>sdvlskjd</h2>
                        <h3> PRODUCT <span>COMPARE(0)</span></h3>
                    </div>
                </div>
            </div>
        )
    }
}