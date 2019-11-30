import React, { Component } from 'react'
import ImgLogin from './ImgLoad'
import FormWrap from './FormWrap'
import FormWrap2 from './FormWrap-2'

class AddProduct extends Component {
    
   render(){
  console.log();
    return (
        <div className={'AddProd'}>
        <form onSubmit={this.props.setings.onSubmit} >


             <div className="FW1">
                 <div className={'SelCom1'}>
                     <ImgLogin  onImgSubmit={this.props.setings.onImgSubmit} onChangeimg={this.props.setings}/>
                 </div>
                 <div className={'SelCom2'}>
                     <FormWrap onChange={this.props.setings.onChange} apdeitProduct = {this.props.setings.apdateProduct} />
                 </div>

              </div>
              <div className="">
                <FormWrap2 state={this.props.setings} />
               </div>
               </form>
        </div>
    );
   }
}

export default AddProduct;
