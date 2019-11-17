import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Admin from './components/AdminPanel/Admin'
import './App.css';
import Home from './home/Home'
import About from './about/About'
import Mens from './mens/Mens'
import Womens from './womens/Womens'
import Contact from './contact/Contact'

<<<<<<< HEAD
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

     this.itemsArray.push(item);
     console.log(this.itemsArray);
      for(let i = 0; i < this.itemsArray.length; i++){
          // if(this.itemsArray[i]._id === a._id) {
          //     console.log(1)
          // }
          // console.log(this.itemsArray[i]._id, "item" + item._id )

           }
    localStorage.setItem('cartId', JSON.stringify(this.itemsArray))
    this.setState({shopProduct:this.itemsArray,key:this.state.key + 1})

  };

  componentDidCatch(){
    this.setState({hasError:true})
      }

  deletItem = e=>{
        const item = this.itemsArray.filter(item=> e !== item._id  )
=======
function App(){
  let itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : [];
  let [shopProduct, setStates] = useState({itemsArray:itemsArray,key:1});
  
 var setitem = (item)=>{
    itemsArray.push(item)
    localStorage.setItem('cartId', JSON.stringify(itemsArray))
    setStates({itemsArray:itemsArray,key:1});
  }
  
 var deletItem = e=>{
        const item = itemsArray.filter(item=> e !== item._id  )
>>>>>>> app on react  hooks
        localStorage.setItem('cartId', JSON.stringify(item))  
        itemsArray = item
        setStates({itemsArray:itemsArray})
        }

<<<<<<< HEAD
render(){

  if(this.state.hasError) {
    return 
      }
     
=======
>>>>>>> app on react  hooks
  return (
    <Router>
    <div>
        <header key={shopProduct.key}>
            <Header shopProduct={shopProduct.itemsArray } deletItem={deletItem}/>
        </header>
        <Route exact path='/' render = {()=><Home setitem={setitem} />} />
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

export default App;
