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
        console.log(this.state.products + 'app');
        return(
            <div>
                {this.props.match.frommens}
                {this.props.match.fromhome}
                {this.props.match.fromwomens}
                <h2>sdlvs</h2>
            </div>
        )
    }
}