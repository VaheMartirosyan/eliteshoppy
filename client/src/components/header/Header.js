import React,{Component} from 'react';
import signpic from './images/signpic.jpg';
import HeaderBottom from './headerbottom/HeaderBottom';
import Navbar from './navbar/Navbar'
import {login,register} from '../UserFunctions'


import './Header.scss';
import jwt_decode from 'jwt-decode'

export default class Header extends Component{

    state={
        headup:[
            {txt:'Sign In', i:'fa fa-unlock'},
            {txt:'Sign Up', i:"fa fa-pencil-square-o"},
            {txt:'Call : 01234567898',i:'fa fa-phone'},
            {txt:'info@example.com',i:"fa fa-envelope-o"}
            ],

        /// FOR SIGN IN & SIGNUP WINDOWS
        openSign: false,
        openUp: false,
        signName: false,
        email:false,
        signupconfirm:false,
        signuppass:false,
        emails: '',
        password: '',
        errors: '',
        first_name: '',
        confirmPassword: '',
        myemail: '',
        mypassword: '',
        user:''

    };

/// FUNCTION FOR OPEN SIGNIN OR SIGN UP WINDOWS HANGED ON THEIR NUMBERS

    signin(e,a){

        a.preventDefault();
        if(e === 0){
            this.setState({
                openSign:true,
                modal:"#myModal"
            })
        }
        else if(e === 1){
            this.setState({
                openUp:true,
                openSign:false,
                modal:"#myModal"
            })
        }else{
            this.setState({
                openSign:false,
                openUp:false,
            })
        }

            window.onscroll = function () { window.scrollTo(0, 0); };



    }

    /// FUNCTION FOR CLOSING THAT WINDOWS

    closewindow=()=>{
        this.setState({
            openSign:false,
            openUp:false
        })
        window.onscroll = function () { window.scrollTo(); };
    }


    ///FUNCTION FOR LABELS (GO UP AND DOWN)

    addClassUpToTopHandler = (type, e) => {
        switch (type) {
            case 0 : return this.setState({signName:true, email:false, signupconfirm:false, signuppass:false});
            case 1 : return this.setState({signName:false, email:true, signupconfirm:false, signuppass:false});
            case 2 : return this.setState({signName:false, email:false, signupconfirm:false, signuppass:true});
            case 3 : return this.setState({signName:false, email:false, signupconfirm:true, signuppass:false});
        }
        console.log(e.target.value)
    }

    /// FUNCTION FOR LABELS GO DOWN

    deleteClass = (e,type) => {
        if(type.target.value.length === 0) {
            this.setState({
                email: false,
                signName:false,
                signupconfirm:false,
                signuppass:false
            })
        }
        console.log(e)
    }


    onChange=(e)=> {
        this.setState({ [e.target.name]: e.target.value })
        
      }
      onSubmit=(e)=> {
        e.preventDefault()
      
        const user = {
          email: this.state.emails,
          password: this.state.password
        }
       
        login(user).then(res => {
          
          if (!res.error) {
            // this.props.history.push(`/`)
           this.getuser()
           
          }
        }).catch(this.setState(state => ({ errors:'such user does not exist' })) );
       
      }
      getuser = ()=> {
        const token = localStorage.usertoken;
        if(token !== undefined){
         const decoded = jwt_decode(token)
      this.setState({user:decoded})
      }
    }
      onSubmits=(e)=> {
        e.preventDefault()
            // this.setState({errors:''})
        const newUser = {
            first_name:this.state.first_name,
            last_name:"zat",
            email:this.state.myemail,
            password:this.state.confirmPassword,
            created: Date.now 
        }
        register(newUser).then(res => {
     
            if (!res.data.error) {
                // this.props.history.push(`/login`)
                alert('you successfully registred')
                }
            
              }).catch((err)=> console.log(err))
          }

    render() {
     
        return(
            <div>
                <div className={'headup'}>
                    <div className={'headupcontainer'}>
                        <ul>

                            {this.state.headup.map((e,i)=>{
                                return(
                                    <li  key={i} onClick={this.signin.bind(this,i)}>
                                        <i className={e.i}/>
                                        <a href="">{e.txt}</a>
                                    </li>
                                )
                            })}

                        </ul>



                    </div>

                </div>

                    {this.state.openSign ? <div className={'absolute'} >


                        <div className={'inpabsolute'} >
                            <div className={"inpabsone"}>
                                <p className={'signp'}><b>Sign In</b> Now</p>
                                <form onSubmit={this.onSubmit}>
                                    <div className={'signinform'}>
                                        <input type="password"  className={"signname"} onFocus={this.addClassUpToTopHandler.bind(this,0 )}
                                               onBlur={this.deleteClass.bind(this,0)} onChange={this.onChange} name="password"/>
                                        <label onClick={this.addClassUpToTopHandler.bind(this,0 )} htmlFor="" style={this.state.signName ?
                                            {top:'-40%',transition:'0.5s',color:'#2BDABA' } : {transition:'0.5'}}>Password</label>
                                        <span></span>
                                    </div>
                                    <div className={'signinform'}>
                                        <input type="email" className={"signname"}  onFocus={this.addClassUpToTopHandler.bind(this,1)}
                                               onBlur={this.deleteClass} name="emails" onChange={this.onChange} />
                                        <label onClick={this.addClassUpToTopHandler.bind(this,1 )} htmlFor="" style={this.state.email ?
                                            {top:'-40%',transition:'0.5s',color:'#2BDABA' } : {transition:'0.5'}}>Email</label>
                                        <span></span>
                                    </div>
                                    <input type="submit" value={'Sign In'} className={'signbutton'}/>
                                </form>
                                <div className={'signcontacts'}>
                                    <ul>
                                        <li>
                                            <i className="fa fa-facebook firstfb" aria-hidden="true"/>
                                        </li>
                                        <li>
                                            <i className="fa fa-twitter twit" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-instagram ig" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                </div>
                                <p className={'unes'}>Don`t have an account?</p>
                            </div>
                            <div className={"inpabstwo"}>
                                <img src={signpic} alt=""/>
                            </div>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.closewindow}>×</button>

                        </div>


                    </div>: this.state.openUp ?  <div className={'absolute'} >


                        <div className={'inpabsolute'}>
                            <div className={"inpabsone"}>
                                <p className={'signp'}><b>Sign Up</b> Now</p>
                                <form onSubmit={this.onSubmits}>
                                    <div className={'signinform'}>

                                        <input type="text"  className={"signname"} onFocus={this.addClassUpToTopHandler.bind(this,0 )}
                                               onBlur={this.deleteClass} onChange={this.onChange} name="first_name"/>
                                        <label onClick={this.addClassUpToTopHandler.bind(this,0 )} htmlFor="" style={this.state.signName ?
                                            {top:'-40%',transition:'0.5s',color:'#2BDABA' } : {transition:'0.5'}}>Name</label>
                                        <span></span>

                                    </div>
                                    <div className={'signinform'}>

                                        <input type="email" className={"signname"}  onFocus={this.addClassUpToTopHandler.bind(this,1)}
                                               onBlur={this.deleteClass} name="myemail" onChange={this.onChange}/>
                                        <label onClick={this.addClassUpToTopHandler.bind(this,1 )} htmlFor="" style={this.state.email ?
                                            {top:'-40%',transition:'0.5s',color:'#2BDABA' } : {transition:'0.5'}}>Email</label>
                                        <span></span>

                                    </div>
                                    <div className={'signinform'}>

                                        <input type="password" className={"signname"}  onFocus={this.addClassUpToTopHandler.bind(this,2)}
                                               onBlur={this.deleteClass} onChange={this.onChange} name="mypassword"/>
                                        <label onClick={this.addClassUpToTopHandler.bind(this,2 )} htmlFor="" style={this.state.signuppass ?
                                            {top:'-40%',transition:'0.5s',color:'#2BDABA' } : {transition:'0.5'}}>Password</label>
                                        <span></span>

                                    </div>
                                    <div className={'signinform'}>

                                        <input type="password" className={"signname"}  onFocus={this.addClassUpToTopHandler.bind(this,3)}
                                               onBlur={this.deleteClass} onChange={this.onChange} name="confirmPassword"/>
                                        <label onClick={this.addClassUpToTopHandler.bind(this,3 )} htmlFor="" style={this.state.signupconfirm ?
                                            {top:'-40%',transition:'0.5s',color:'#2BDABA' } : {transition:'0.5'}}>Confirm Password</label>
                                        <span></span>

                                    </div>
                                    <input type="submit" value={'Sign In'} className={'signbutton'}/>
                                    <div className={'signcontacts'}>
                                        <ul>
                                            <li>
                                                <i className="fa fa-facebook firstfb" aria-hidden="true"/>
                                            </li>
                                            <li>
                                                <i className="fa fa-twitter twit" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-instagram ig" aria-hidden="true"></i>
                                            </li>
                                            <li>
                                                <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <p className={'unes'}>By clicking register, I agree to your terms</p>
                                </form>
                            </div>
                            <div className={'inpabstwo'}>
                                <img src={signpic} alt=""/>
                            </div>

                            <button type="button" className="close" data-dismiss="modal" onClick={this.closewindow}>×</button>
                        </div>

                    </div>:null}
                    <HeaderBottom/>
                    <Navbar getuser={this.state.user}/>
                </div>





        )
    }
}