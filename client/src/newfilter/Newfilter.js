import React, {Component} from 'react'
import axios from 'axios'

export default class Newfilter extends Component {
    state = {
        products:[]
    }
    componentDidMount(){
        this.cart()

    }
    cart = async user => {
        let query = this.props.match.params.frommens;
        if(query == undefined) query = this.props.match.params.fromwomens;
        
        const prod = JSON.stringify(query);
        return await axios
          .get(`filterProduct/${JSON.parse(prod)}`)
          .then(response => {
          
           if(response.status === 200){
               this.setState({products:response.data})
           }
            return response.data
          })
          .catch(err => {
            console.log(err)
          })
      }

    render() {
        console.log(this.state.products)
        return(
            <div>

                {this.props.match.params.frommens}
                {this.props.match.params.fromwomens}

                <h2>sdlvs</h2>
            </div>
        )
    }
}