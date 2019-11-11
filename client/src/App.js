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
import ShortCode from './shortCode/ShortCode'
import Contact from './contact/Contact'

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
        <Route exact path='/' component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route path='/about' component={About} />
        <Route path='/mens' component={Mens} />
        <Route path='/womens' component={Womens} />
        <Route path='/codes' component={ShortCode} />
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
