import React,{Component} from 'react';
import signpic from './images/signpic.jpg';
import HeaderBottom from './headerbottom/HeaderBottom';
import Navbar from './navbar/Navbar'
import {login,register} from '../UserFunctions'



import './Header.scss';
import jwt_decode from 'jwt-decode'

export default class Header extends Component{

    state = {
        headup:[
            {txt:'Sign In', i:'fa fa-unlock'},
            {txt:'Sign Up', i:"fa fa-pencil-square-o"},
            {txt:'Call : 01234567898',i:'fa fa-phone'},
            {txt:'info@example.com',i:"fa fa-envelope-o"}
        ],

        /// FOR SIGN IN & SIGNUP WINDOWS
        openSign: false,
        openUp: false,
        errors: '',
        first_name: '',
        confirmPassword: '',
        regemail: '',
        user:'',
        props:this.props.shopProduct,

        //Login Form Check

        logpassword:'',
        logemail:'',
        formError:{email:'',password:'',regname:'',regemail:'',regpass:'',regpassconf:''},
        emailvalid:false,
        passvalid:false,
        formValid:false,

        //Register Form Check
        regpassword:'',
        regconfirm:'',
        regmail:'',
        regname:'',
        namevalid:false,
        regmailvalid:false,
        regpassvalid:false,
        regpassconfirm:false,
        regFormvalid:false,




    };

/// FUNCTION FOR OPEN SIGNIN OR SIGN UP WINDOWS HANGED ON THEIR NUMBERS
    componentWillReceiveProps(prevProps,nextProps) {
        if (this.props !== nextProps) {
            this.setState({props:prevProps.shopProduct})

        }
    }


    signin(e,a){

        a.preventDefault();
        if(e === 0){
            this.setState({
                openSign:true,

            })
        }
        else if(e === 1){
            this.setState({
                openUp:true,
                openSign:false,

            })
        }else{
            this.setState({
                openSign:false,
                openUp:false,
            })
        }

        window.onscroll = function () { window.scrollTo(0, 0); };
    }


    closewindow=()=>{
        this.setState({
            openSign:false,
            openUp:false
        })
        window.onscroll = function () { window.scrollTo(); };
    }

    onChange=(e)=> {
    const name = e.target.name;
    const value = e.target.value;

        this.setState({
            [name]:value
        },
            () => {this.validateField(name,value)}
        )
    if(this.state.formValid){
        this.setState({
            disabled:false
        })
    }
    else{
        this.setState({
            disabled:true
        })
    }

    }


    validateField = (fieldName,fieldvalue) =>{
        let formerror = this.state.formError;
        let emailvalid = this.state.emailvalid;
        let passvalid = this.state.passvalid;
        let namevalid = this.state.namevalid;
        let regmailvalid = this.state.regmailvalid;
        let regpassvalid = this.state.regpassvalid;
        let regpassconfirmvalid = this.state.regpassconfirm;
        switch(fieldName){
            case 'logemail' : emailvalid = fieldvalue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            formerror.email = emailvalid ? '' : 'redborder';
            break;
            case 'logpassword' : passvalid = fieldvalue.length > 5;
            formerror.password = passvalid ? '' : 'redborder';
            break;
            case 'first_name' : namevalid = fieldvalue.length < 16;
            formerror.regname = namevalid ? '' : 'redborder';
            break;
            case 'regemail' : regmailvalid = fieldvalue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            formerror.regemail = regmailvalid ? '' : 'redborder';
            break;
            case 'regpassword' : regpassvalid= fieldvalue.length > 5;
            formerror.regpass = regpassvalid ? '' : 'redborder';
            break;
            case 'regconfirmPassword' : regpassconfirmvalid = fieldvalue === this.state.regpassword;
            formerror.regpassconf = regpassconfirmvalid ? '' : 'redborder';
            break;


            default:break;

        }
      
        this.setState({
            formError: formerror,
            namevalid:namevalid,
            emailvalid: emailvalid,
            passvalid: passvalid,
            regmailvalid: regmailvalid,
            regpassvalid: regpassvalid,
            regpassconfirm: regpassconfirmvalid
        },
            this.validateForm)
        if(this.state.regFormvalid){
            this.setState({
                disabledreg:false
            })
        }

    }

    validateForm=()=>{
        this.setState({
            formValid: this.state.emailvalid && this.state.passvalid,
            regFormvalid: this.state.namevalid && this.state.regpassvalid && this.state.regmailvalid && this.state.regpassconfirm

        })
    }

    errorClass=(error)=>{
        return(error.length === 0 ? '' : 'redborder')
    }
    onSubmit=(e)=> {    
        e.preventDefault()
        const user = {
            email: this.state.logemail,
            password: this.state.logpassword
        }
        login(user).then(res => {

            if (res!== undefined && res.islogined === true) {
                this.getuser()
                this.setState({
                    openSign:false,

                })
            }else{
                console.log(res)
            }
        }).catch(this.setState(state => ({ errors:'such user does not exist' })) );

    }
    getuser = ()=> {
        const token = localStorage.myusertoken;
        if(token !== undefined){
            const decoded = jwt_decode(token)
            this.setState({user:decoded})
        }

    }
    onSubmits=(e)=> {
        e.preventDefault()
       
        const newUser = {
            first_name:this.state.first_name,
            email:this.state.regemail,
            password:this.state.regpassword,
           
        }
        console.log(newUser);
        register(newUser).then(res => {
console.log(res.data);
            if (!res.data.error) {
                // this.props.history.push(`/login`)
                alert('you successfully registred')
                console.log(this.state.openUp)
                this.setState({
                    openUp:false
                })
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
                                        <a href="1">{e.txt}</a>
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
                                    <input type="email" className={`signname ${this.errorClass(this.state.formError.email)}`} name="logemail" onChange={this.onChange}  placeholder={'Enter Your Email'} />
                                </div>
                                <div className={'signinform'}>
                                    <input   type="password"  className={`signname ${this.errorClass(this.state.formError.password)}`} onChange={this.onChange} name="logpassword" placeholder={'Enter Your Password'}/>
                                </div>
                                <input type="submit" value={'Sign In'} style={!this.state.formValid ? {background:'grey'}:null} className={'signbutton'} disabled={!this.state.formValid}/>
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
                                    <input type="text"  className={`signname ${this.errorClass(this.state.formError.regname)}`} onChange={this.onChange} name="first_name" placeholder={'Enter Your Name'}/>
                                </div>
                                <div className={'signinform'}>
                                    <input type="email" className={`signname ${this.errorClass(this.state.formError.regemail)}`}  name="regemail" onChange={this.onChange} placeholder={'Enter Your Email'}/>
                                </div>
                                <div className={'signinform'}>

                                    <input type="password" className={`signname ${this.errorClass(this.state.formError.regpass)}`} onChange={this.onChange}  name="regpassword" placeholder={'Enter Your Password'}/>


                                </div>
                                <div className={'signinform'}>
                                    <input type="password" className={`signname ${this.errorClass(this.state.formError.regpassconf)}`}  onChange={this.onChange}  name="regconfirmPassword" placeholder={'Confirm Your Password'}/>
                                </div>
                                <input type="submit" value={'Sign In'} style={!this.state.regFormvalid ? {background:'grey'}:null} disabled={!this.state.regFormvalid} className={'signbutton'}/>
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
                <Navbar shopProduct={this.state.props} deletItem={this.props.deletItem} user={this.state.user}/>

            </div>





        )
    }
}