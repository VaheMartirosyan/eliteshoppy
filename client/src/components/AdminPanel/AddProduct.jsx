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
          <FormWrap onChange={this.props.setings.onChange} apdeitProduct = {this.props.setings.apdateProduct} />
              </div>
              <div className="right">
                <FormWrap2 state={this.props.setings} />
               </div>
               </form>
        </div>
    );
   }
}

export default AddProduct;
