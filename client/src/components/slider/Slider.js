import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import pic1 from './slideimg/banner1.jpg';
import pic2 from './slideimg/banner2.jpg';
import pic3 from './slideimg/banner3.jpg';
import pic4 from './slideimg/banner4.jpg';
import pic5 from './slideimg/banner5.jpg';
import './Slider.css'



export default class GSlider extends Component{
    state = {
        slide1:[
            {img:pic1,txtwhite:'THE BIGGEST',txtblue:'SALE',txtgold:'Special for today'},
            {img:pic2,txtwhite:'SUMMER',txtblue:'COLLECTION',txtgold:'New arrivals on sale'},
            {img:pic3,txtwhite:'THE BIGGEST',txtblue:'SALE',txtgold:'Special for today'},
            {img:pic4,txtwhite:'SUMMER',txtblue:'COLLECTION',txtgold:'New arrivals on sale'},
            {img:pic5,txtwhite:'THE BIGGEST',txtblue:'SALE',txtgold:'Special for today'}
        ],


    }


          render() {
            return(
                <div className={'v'}>
                    <Carousel >

                            {this.state.slide1.map((e,i)=>{
                                return(

                                        <Carousel.Item key={i}>
                                            <div className={'opacitydiv'} style={{backgroundImage:`url(${e.img})`}}>
                                                <div className={'op'}>
                                                    <Carousel.Caption >
                                                        <div className={'carouseltxt'}>
                                                            <h3 >{e.txtwhite} <span>{e.txtblue}</span></h3>
                                                            <p>{e.txtgold}</p>
                                                            <span className={"shopnow"}>
                                                                 <a className='ah' href="mens.html">Shop Now </a>
                                                            </span>

                                                        </div>
                                                    </Carousel.Caption>
                                                </div>

                                            </div>
                                        </Carousel.Item>


                                )
                            })}

                    </Carousel>
                </div>
            )
        }
}