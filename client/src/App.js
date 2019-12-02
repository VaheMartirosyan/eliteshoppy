import React, { useState } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Admin from './components/AdminPanel/Admin'
import './App.css'
import Home from './home/Home'
import About from './about/About'
import Mens from './mens/Mens'
import Womens from './womens/Womens'
import Contact from './contact/Contact'
import FooterTop from './components/footer/footertop/FooterTop'
import Shop from './shop/Shop'
import Newfilter from "./newfilter/Newfilter"


function App(){
    let itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : [];
    let [shopProduct, setStates] = useState({itemsArray:itemsArray,key:1})

    const setitem = (item)=>{

        const arr = itemsArray.find( arr=> arr._id === item._id)
        if(arr){

        }else{
            itemsArray.push(item)
            localStorage.setItem('cartId', JSON.stringify(itemsArray));
            setStates({itemsArray:itemsArray,key:1})
        }
    }

    const deletItem = e=>{
        const item = itemsArray.filter(item=> e !== item._id  );
        localStorage.setItem('cartId', JSON.stringify(item))  ;
        itemsArray = item
        setStates({itemsArray:itemsArray,key:shopProduct.key + shopProduct.key})
          
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
                <Route exact path='/mens' render = {()=><Mens setitem={setitem} />} />
                <Route exact path={'/mens/:frommens'}  component={Newfilter}/>
                <Route exact path='/womens' render = {()=><Womens setitem={setitem} />}  />
                <Route exact path='/womens/:fromwomens'  component={Newfilter} />
                <Route path='/contact' component={Contact} />
                <Route path='/shop' render={()=><Shop  key={shopProduct.key + 1} deletItem={deletItem}/>}/>


                <footer>
                    <FooterTop/>
                    <Footer/>
                </footer>

            </div>
        </Router>
    );
}

export default App
