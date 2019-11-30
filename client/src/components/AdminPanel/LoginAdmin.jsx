
import React, { useState,useEffect} from "react"
import './adminlogin.css'
import {GetShopBascket} from '../UserFunctions'

const LoginAdmin = (props) => {
    let [seterror, setStates] = useState('');

    useEffect(() => {
     if(seterror){
         setTimeout(()=>setStates(seterror = ''),5000)
     }
      });

    var login = '';
    let password = '';

    const onChange=(e)=> {
      login = e.target.value
        }
    const getpassword = (e)=>{
        password = e.target.value
    }    
    const loginsender = (e)=>{
        e.preventDefault()
       const admins = {
            first_name:login,
            password:password
        }

       const mylogin = new GetShopBascket().login
       mylogin(admins)
       .then(admin=>{
           if(!admin.error){
            props.admin(admin)
           }else{
            setStates(seterror = admin.error)
           }
    
       })
       .catch(err=>props.admin(null))
      
    }    
    return (
        <div className='logindiv'>
           
        <div className="errorDiv">
               {seterror && <div className="alert alert-dismissible alert-warning">
                <h4 className="alert-heading">{seterror}!</h4></div>}  
        </div>
        <div className="logform">
        <form onSubmit={loginsender}>
  <input type="text" name="login" className="question" onChange={onChange} required autoComplete="off" />
  <label htmlFor="nme"><span className="sp">login</span></label>
  <input type="password" name="password" className="question" onChange={getpassword} required autoComplete="off" />
  <label htmlFor="msg"><span className="sp">password</span></label>
  <input type="submit" value="Submit!" className="sub"/>
</form> 
     </div>
        </div>
    );
}

export default LoginAdmin;
