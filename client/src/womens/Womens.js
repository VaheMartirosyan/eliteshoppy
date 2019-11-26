import React, { Component } from "react"
import {setProduct} from '../components/UserFunctions'
import Wear from "../wear/Wear";
import FilterWear from "../wear/filterwear/FilterWear";
import WearCards from "../wear/filterwear/wearcards/WearCards"
import Spiner from "../components/Spiner/Spiner";

// let [womenProducts, setStates] = useState('');
// useEffect(()=>{
//     setProduct(`stok/womenproduct`,"GET")
//     .then(prod=>{
//         setStates(womenProducts = prod)
//   })
// },[])
// console.log(womenProducts + 'womens')

export default class Womens extends Component {

    state = {
        wearTitle: 'MEN\'S WEAR',
        products: [],
        loading: true
    }
    componentDidMount(){
        setProduct(`stok/womenproduct`,"GET")
            .then(body =>{
                this.setState({products:body})
                this.getProduct(body)

            })
            .catch(err => console.log(err))
    }
    getProduct = body => this.setState({products:body, loading:false})
    render() {
        if(this.state.loading) {
            return  <Spiner />
        }
        return(
            <div>
                <Wear wear={'Womens Wear'} />
                <FilterWear imgone={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner4.jpg'}
                            imgtwo={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner3.jpg'}
                            imgthree={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner1.jpg'}
                            imgfour={'https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/bb1.jpg'}
                />
                <div className="container">
                    <div className={'cardwears'}>
                        {this.state.products.map((elem, index) => {

                            return(
                                <div key={index}>
                                    <WearCards itemimg={elem.img} item={elem.goods_name} price={elem.price}/>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </div>
        )
    }
}