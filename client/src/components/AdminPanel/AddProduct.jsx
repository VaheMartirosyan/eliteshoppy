import React, { Component } from 'react'
import ImgLogin from './ImgLoad'
import FormWrap from './FormWrap'
import FormWrap2 from './FormWrap-2'

class AddProduct extends Component {
   render(){
    return (
        <div>
        <form onSubmit={this.props.setings.onSubmit} >
             <div className="left">
          <ImgLogin  onImgSubmit={this.props.setings.onImgSubmit} onChangeimg={this.props.setings.onChangeimg}/>
          <FormWrap onChange={this.props.setings.onChange} />
              </div>
              <div className="right">
                <FormWrap2 state={this.props.setings.state} swith={this.props.setings.swith } onChange={this.props.setings.onChange}
                                  womenSwith={this.props.setings.womenSwith} newAraivle={this.props.setings.newAraivle}/>
               </div>
               </form>
        </div>
    );
   }
}

export default AddProduct;
