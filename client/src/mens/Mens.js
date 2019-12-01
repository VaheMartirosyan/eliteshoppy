import React, {Component} from 'react'
import Wear from "../wear/Wear";
import './Mens.scss'
import {setProduct} from '../components/UserFunctions'
import FilterWear from "../wear/filterwear/FilterWear";
import WearCards from "../wear/filterwear/wearcards/WearCards";
import Spiner from '../components/Spiner/Spiner'

export default class Mens extends Component {
    state = {
        wearTitle: 'MEN\'S WEAR',
        products: [],
        loading: true
    }
    componentDidMount(){
        setProduct(`stok/menproduct`,"GET")
            .then(body =>{
                this.setState({products:body})
                this.getProduct(body)

            })
            .catch(err => console.log(err))
    }
    getProduct = body => this.setState({products:body, loading:false})

    render() {
        if(this.state.loading) {
            return <Spiner />
        }
      
        const {wearTitle} = this.state
        return(
            <div>
                <Wear wear={wearTitle} />
                <FilterWear imgone={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner2.jpg'}
                            imgtwo={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner5.jpg'}
                            imgthree={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner2.jpg'}
                            imgfour={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/bb2.jpg'}
                />
                <div className="container">
                    <div className={'cardwears'}>
                        {this.state.products.map((elem, index) => {

                            return(
                                <div key={index} className={'imgwear'}>
                                    <WearCards itemimg={elem.img} item={elem.goods_name} price={elem.price} all = {elem}/>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }

}