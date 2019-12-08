import React, { useState, useEffect } from "react"
import axios from 'axios'
import Spiner from '../Spiner/Spiner'
import Pagination from './Pagination'
import Prductitems from './Prductitems'


export default function Home(props) {
    
    // const [products, setState] = useState({item:[],loading:true})
  
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
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
const paginate = pageNumber => setCurrentPage(pageNumber);
const deletItem = async id=>{
  setLoading(true);
  const url = 'stok/deletProduct'
    const res = await axios.post(url,{token:`Bearer ${localStorage.itemtId}`,id:id});
    if(res.status === 200){
           setPosts(res.data);
    }else{
      alert('can not delet this.product')
    }
    setLoading(false);
}

   if(loading){
     return <Spiner />
   }
    return(
    <div>
    <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Prductitems products={currentPosts} apdateProduct={props.apdateProduct} deletItem={deletItem}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
    
   
   
    )
  
}
 
 