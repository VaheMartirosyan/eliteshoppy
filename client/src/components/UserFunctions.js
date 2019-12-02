import axios from 'axios';

export const register = async newUser => {
    return await axios
      .post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
      })
      
  }
 

  export const login = user => {
    return axios
      .post('users/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
       if(response.data.error) return response.data;
        localStorage.setItem('myusertoken', response.data)
       
        return {islogined:true}
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const sendData =  (url,data) => {
    return axios
      .post(url, data)
      
  }
  

  export const setProduct = async (url,query) => {
    const res = await fetch(url,
    {
        method: query,
    });
    if(!res.ok){
      throw new Error(`Cud not fatch ${url} Resivd ${res.status}`)
    }
    const body = res.json();
    return body
  }
export class GetShopBascket {
   itemsArray = localStorage.getItem('cartId') ? JSON.parse(localStorage.getItem('cartId')) : []
   cart = async (user,path) => {
   
    
    
    return await axios
      .post(path, user)
      .then(response => {
      
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
  deletItem = e=>{
  const item = this.itemsArray.filter(item=> e !== item._id  )
  localStorage.setItem('cartId', JSON.stringify(item))  
  }

   login = admin => {
    return axios
      .post('s/login', {
        first_name: admin.first_name,
        password: admin.password
      })
      .then(response => {
       if(response.data.error) return response.data;
       localStorage.setItem('itemtId',response.data)
          return {islogined:true}
        
      })
      .catch(err => {
        console.log(err)
      })
  }
}
  