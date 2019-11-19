import React from 'react';
import './adminlogin.css'

const LoginAdmin = () => {
    var login = '';
    let password= '';

    const onChange=(e)=> {
      login = e.target.value
        }
    const getpassword = (e)=>{
        password = e.target.value
    }    
    const loginsender = (e)=>{
        e.preventDefault()
        console.log(login,password);
    }    
    return (
        <div className='logindiv'>
        <form className="logform" onSubmit={loginsender}>
  <input type="text" name="login" className="question" onChange={onChange} required autoComplete="off" />
  <label htmlFor="nme"><span>login</span></label>
  <input type="password" name="password" className="question" onChange={getpassword} required autoComplete="off" />
  <label htmlFor="msg"><span>password</span></label>
  <input type="submit" value="Submit!" className="sub"/>
</form>
        </div>
    );
}

export default LoginAdmin;
