import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import SliderBottom from './components/sliderbottom/SliderBottom';
import Middle from './components/middle/Middle';
import Fixed from './components/fixed/Fixed'
import ShopCart from'./components/shopCarts/Lending'
import Admin from './components/AdminPanel/Admin'
import './App.css';

class App extends Component {
  state = {
    hasError:false,
    shopClient:''
  }
 
  
  componentDidCatch(){
    this.setState({hasError:true})
      }
//   getUser = ()=>{
//     const token = localStorage.usertoken
//     if(token !== undefined){
//      const decoded = jwt_decode(token)
//      this.setState({shopClient:decoded})
//   } 
// }
render(){
  if(this.state.hasError) {
    return 
      }
  return (
    <Router>
    <div>
        <header>
            <Header getUser={this.state.shopClient}/>
        </header>
        <Slider />
        <SliderBottom />
        <Middle />
        <ShopCart />
        <Route exact path="/admin" component={Admin} />
        <Fixed/>
      <footer>
          <Footer/>
      </footer>

    </div>
    </Router>
  );
}
}

export default App;
