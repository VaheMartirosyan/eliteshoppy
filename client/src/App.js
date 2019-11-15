import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import jwt_decode from 'jwt-decode'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Admin from './components/AdminPanel/Admin'
import './App.css';
import Home from './home/Home'
import About from './about/About'
import Mens from './mens/Mens'
import Womens from './womens/Womens'
import Contact from './contact/Contact'

class App extends Component {
  state = {
    hasError:false,
    shopProduct:'',
    key:1
  }
  itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : [];
 componentDidMount(){
 
 this.setState({shopProduct:this.itemsArray})
 
 
 }
  setitem = (item)=>{
    this.itemsArray.push(item)
    localStorage.setItem('cartId', JSON.stringify(this.itemsArray))
    this.setState({shopProduct:this.itemsArray,key:this.state.key + 1})
  }
  componentDidCatch(){
    this.setState({hasError:true})
      }
  deletItem = e=>{
        const item = this.itemsArray.filter(item=> e !== item._id  )
        localStorage.setItem('cartId', JSON.stringify(item))  
        this.itemsArray = item
        this.setState({shopProduct:this.itemsArray, key:this.state.key + 1})
       
        }    

render(){
  console.log(this.state.shopProduct);
  if(this.state.hasError) {
    return 
      }
     
  return (
    <Router>
    <div>
        <header key={this.state.key}>
            <Header shopProduct={this.state.shopProduct } deletItem={this.deletItem}/>
        </header>
        <Route exact path='/' render = {()=><Home setitem={this.setitem} />} />
        <Route exact path="/admin" component={Admin} />
        <Route path='/about' component={About} />
        <Route path='/mens' component={Mens} />
        <Route path='/womens' component={Womens} />
        <Route path='/contact' component={Contact} />
      <footer>
          <Footer/>
      </footer>

    </div>
    </Router>
  );
}
}

export default App;
