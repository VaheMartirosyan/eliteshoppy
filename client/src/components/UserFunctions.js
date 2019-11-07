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
        localStorage.setItem('usertoken', response.data)
       
        return response.data
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