import React, { useState } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import QuickView from "./components/quickview/QuickView";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Admin from './components/AdminPanel/Admin'
import './App.css';
import Home from './home/Home'
import About from './about/About'
import Mens from './mens/Mens'
import Womens from './womens/Womens'
import Contact from './contact/Contact'
import FooterTop from './components/footer/footertop/FooterTop'
import Shop from './shop/Shop'


function App(){

    let itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : [];
    let [shopProduct, setStates] = useState({itemsArray:itemsArray,key:1});


    var setitem = (item)=>{

        const arr = itemsArray.find( arr=>arr._id === item._id);
        if(arr){

        }else{
            itemsArray.push(item);
            localStorage.setItem('cartId', JSON.stringify(itemsArray));
            setStates({itemsArray:itemsArray,key:1});
        }
    }

    var deletItem = e=>{
        const item = itemsArray.filter(item=> e !== item._id  );
        localStorage.setItem('cartId', JSON.stringify(item))  ;
        itemsArray = item
        setStates({itemsArray:itemsArray})

    }





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
                <Route path='/shop' component={Shop}/>
                <Route exact path='/quickview' component={QuickView}/>

                <footer>
                    <FooterTop/>
                    <Footer/>
                </footer>

            </div>
        </Router>
    );
}

export default App;
