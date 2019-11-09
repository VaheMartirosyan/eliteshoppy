import React from 'react'
import Slider from '../components/slider/Slider';
import SliderBottom from '../components/sliderbottom/SliderBottom';
import Middle from '../components/middle/Middle';
import Fixed from '../components/fixed/Fixed'
import ShopCart from'../components/shopCarts/Lending'

export default () => {
    return(
        <div>
            <Slider/>
            <SliderBottom/>
            <Middle />
            <ShopCart />
            <Fixed />

        </div>
    )
}