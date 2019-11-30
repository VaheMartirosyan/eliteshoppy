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
        return await axios
          .get(`filterProduct/${this.props.match.params.esiminj}`)
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
        console.log(this.state.products);
        return(
            <div>
                {this.props.match.params.esiminj}
                <h2>sdlvs</h2>
            </div>
        )
    }
}