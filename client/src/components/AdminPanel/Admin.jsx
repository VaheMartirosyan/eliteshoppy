import React, { Component } from 'react'
import {sendData} from '../UserFunctions'
import './admin.css'
import uuid from 'uuidv4';
import Home from './Home'
import AddProduct from './AddProduct'
export default class Goods extends Component {
    state = {
      new_arrivals:false, 
      discont:false,
      productCotegory:'',
      goods_name: '',
        description: '',
        img: '',
        price: '',
        cotegory:'',
        productCountInSok:'',
      fileSelected:null,
      navigate:'home',
      } 
      onChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({ [name]: value })
        
      }
      onSubmit=(e)=> {
        e.preventDefault()
            const newGood = {
            new_arrivals:this.state.new_arrivals,
            goods_name:this.state.goods_name,
            description:this.state.description,
            img:this.state.img,
            price:this.state.price,
            cotegory:this.state.cotegory,
            cartId:uuid(),
            stok:this.state.productCountInSok,
            discont:this.state.discont,
            productCotegory:this.state.productCotegory
                  }
        sendData('stok/good',newGood)
        .then(respons=>{
          respons.data.goods.cartId && alert('product registered')
                               
        }).catch(err=>console.log(err))
          }
          onImgSubmit = (e)=>{
             e.preventDefault();
             const formData = new FormData()
             formData.append('file', this.state.fileSelected)
             sendData('stok/imgDownload',formData,{})
             .then(respons=>{
              this.setState({img:respons.data.fileName})
              console.log(this.state.img);
          }).catch(err=>console.log(err))
          }
          swith= (state)=> this.setState({men_products:!this.state.men_products})
          discont=state=>  this.setState({discont:!this.state.discont})
          womenSwith=()=>  this.setState({women_products:!this.state.women_products})
          newAraivle=()=>  this.setState({new_arrivals:!this.state.new_arrivals})
          onChangeimg = e=> this.setState({fileSelected:e.target.files[0]})
          navigate =(text) => this.setState({navigate:text})
          setings = {
            onSubmit:this.onSubmit,
            onImgSubmit:this.onImgSubmit,
            onChangeimg:this.onChangeimg,
            onChange:this.onChange,
            state:this.state,
            swith:this.swith,
            womenSwith:this.womenSwith,
            newAraivle:this.newAraivle
          }
         
    render() {
         
        return (
        <div className="s">
          <div className="navPanel">
            <ul>
              <li onClick={()=>this.navigate('home')}>products</li>
              <li onClick={()=>this.navigate('add product')}>add product</li>
              <li onClick={()=>this.navigate('static')}>static</li>
              <li onClick={()=>this.navigate('seil')}>seils</li>
            </ul>
          </div>
          {(this.state.navigate === 'home')?<Home />
          :(this.state.navigate === 'add product')?<AddProduct setings={this.setings} />:null}
                </div>
        
        )
    }
}
