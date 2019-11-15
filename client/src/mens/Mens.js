import React, {Component} from 'react'
import Wear from "../wear/Wear";
<<<<<<< HEAD
import Person from "../wear/person/Person";
=======
import {setProduct} from '../components/UserFunctions'
>>>>>>> 48375b2e5ee738fb051863887a3254ce20b443dd

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
                <Person />
            </div>
        )
    }

}