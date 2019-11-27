import React, { useState, useEffect } from "react"
import axios from 'axios'
import Spiner from '../Spiner/Spiner'
import ProductChaigPage from './ProductChaigPage'
import Prductitems from './Prductitems'


export default function Home(props) {
    
    // const [products, setState] = useState({item:[],loading:true})
    const [productforApdate, chaingState] = useState({item:'',visibl:false})
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage] = useState(1);
    const [postsPerPage] = useState(10);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get('stok/getProduct');
        setPosts(res.data);
        setLoading(false);
      };
      fetchPosts();
         },[]);
// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page

 const getItem = (text)=>{
  
  chaingState({item:text,visibl:true})
  
   }
   if(loading){
     return <Spiner />
   }else if(productforApdate.visibl){
   return <ProductChaigPage prodct={productforApdate.item}/>
   }
   return(
     <>
     <Prductitems products={currentPosts} getItem={getItem} apdateProduct={props.apdateProduct}/>
   
     </>
   )  
}
 
 