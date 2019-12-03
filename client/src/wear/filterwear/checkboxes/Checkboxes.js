import React,{Component} from 'react'
import './Checkboxes.css'
const axios = require('axios')

export default class  Checkboxes extends Component{
    CheckHandler = (e) =>{
      
        console.log(e.target.value)
        axios.post('stok/cheqckBoxFilter',{data:e.target.value})
        .then(respnce=>{
            if(respnce.status === 200){
            
              this.props.getProduct(respnce.data)
            }
        })
       
       
    }
    render() {
        return(
            <form>
                <div className={'control'}>
                    <div className="control-group">
                        <label className="control control-radio">
                            {this.props.lower}
                            <input type="radio" name="radio" value={this.props.lower} onClick={this.CheckHandler}/>
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            {this.props.track}
                            <input type="radio" name="radio" value={this.props.track} onClick={this.CheckHandler}/>
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            {this.props.bigger}
                            <input type="radio" name="radio" value={this.props.bigger} onClick={this.CheckHandler}/>
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            {this.props.colors}
                            <input type="radio" name="radio" value={this.props.colors} onClick={this.CheckHandler}/>
                            <div className="control_indicator"></div>
                        </label>
                        <label className="control control-radio">
                            {this.props.backmoney}
                            <input type="radio" name="radio" value={this.props.colors}onClick={this.CheckHandler}/>
                            <div className="control_indicator"></div>
                        </label>
                    </div>
                </div>
            </form>
        )
    }


}






