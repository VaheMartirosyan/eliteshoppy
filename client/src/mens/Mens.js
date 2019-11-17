import React, {Component} from 'react'
import Wear from "../wear/Wear";
import {setProduct} from '../components/UserFunctions'
import FilterWear from "../wear/filterwear/FilterWear";

export default class Mens extends Component {
    state = {
        wearTitle: 'MEN\'S WEAR',
        products:''
    }
    componentDidMount(){
        setProduct(`stok/menproduct`,"GET")
            .then(body =>{
                this.setState({products:body})
            })
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state)
       const {wearTitle} = this.state
        return(
            <div>
                <Wear wear={wearTitle} />
                <FilterWear />
            </div>
        )
    }

}