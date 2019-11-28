import React, { Component } from 'react'
import {sendData} from '../UserFunctions'
import './admin.scss'
import uuid from 'uuidv4';
import Home from './Home'
import AddProduct from './AddProduct'
import LoginAdmin from './LoginAdmin'
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
      navigation:[{id:1,text:'home'},{id:2,text:'add product'},{id:3,text:'static'},{id:4,text:'exit'}],
      adminISLogined:'',
      selectedId:null,
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
               this.setings.apdateProduct = respons;
              this.setState({img:respons.data.fileName})
              console.log(this.state.img +  this.setings.apdateProduct);
          }).catch(err=>{
            this.setings.apdateProduct = err 
            console.log(err)})
          
          }
          reset = ()=>{this.setings.apdateProduct  = ''; console.log(this.setings.apdateProduct)}
          swith= (state)=> this.setState({men_products:!this.state.men_products})
          discont=state=>  this.setState({discont:!this.state.discont})
          womenSwith=()=>  this.setState({women_products:!this.state.women_products})
          newAraivle=()=>  this.setState({new_arrivals:!this.state.new_arrivals})
          onChangeimg = e=> this.setState({fileSelected:e.target.files[0]})
          navigate =(item) => {
                     this.setState({navigate: item.item.text,selectedId:item.item.id})
         
          }
          apdateProduct = product =>{
              this.setings.apdateProduct = product
             this.setState({navigate:'add product'})
             
          }
          admin = (admin)=>this.setState({adminISLogined:admin})
          setings = {
            onSubmit:this.onSubmit,
            onImgSubmit:this.onImgSubmit,
            onChangeimg:this.onChangeimg,
            onChange:this.onChange,
            state:this.state,
            swith:this.swith,
            womenSwith:this.womenSwith,
            newAraivle:this.newAraivle,
            apdateProduct:'',
            reset:this.reset
          }
    
    render() {
     
      let admin = this.state.adminISLogined.islogined;
           if(admin){
        return <LoginAdmin admin={this.admin}/>
      }
     return(
     <div className="s">
      <div className="navPanel">
        <ul>{this.state.navigation.map((item,i)=>{
          let classes = ['list'];
          if (item.id === this.state.selectedId){
            classes.push('text-succsess')
          }
        return  <li key={i} className={classes.join(' ')}
                     onClick={()=>this.navigate({item},{i})}>{item.text}</li>
          })}
         
          
        </ul>
      </div>
      {(this.state.navigate === 'home')?<Home apdateProduct={this.apdateProduct} />
      :(this.state.navigate === 'add product')?<AddProduct setings={this.setings} />:null}
    
            </div>     
     )
}
}