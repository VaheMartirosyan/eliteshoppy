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
        emails: '',
        password: '',
        errors: '',
        first_name: '',
        confirmPassword: '',
        myemail: '',
        mypassword: '',
        user:'',
        props:this.props.shopProduct,

        //Login Form Check
        disabled:true,
        signpasscheck:false,
        signmailcheck:false,

        //Register Form Check
        disabledreg:true,
        regname:false,
        regmail:false,
        regpass:false,
        regconfirmpass:false,
        passcheck:''
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

    onChange=(i,e)=> {
        this.setState({ [e.target.name]: e.target.value })
        //login check
        if(this.state.openSign){
            if( i === 0 && e.target.value.length >= 6){
                this.setState({
                    signpasscheck:true,
                })
            }
            if(i === 1 &&
                e.target.value.match( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\ s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                this.setState({
                    signmailcheck:true,
                })
            }
            else{
                this.setState({
                    signmailcheck:false
                })
            }
        }
        if(this.state.signmailcheck && this.state.signpasscheck){
            this.setState({
                disabled:false
            })
        }
        else{
            this.setState({
                disabled:true,
            })
        }

        //register check
        if(this.state.openUp){
            if( i === 0 && e.target.value.length >= 6){
                this.setState({
                    passcheck:e.target.value,
                    regpass:true
                })
            }
            else if(i === 1 && e.target.value.match( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\ s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                this.setState({
                    regmail:true
                })
            }
            else if(i === 2 && e.target.value.length <= 16){
                this.setState({
                    regname:true
                })
            }
            else if(i === 3 && e.target.value === this.state.passcheck ){
                this.setState({
                    regconfirmpass:true
                })
            }
            else if(this.state.regconfirmpass && this.state.regmail && this.state.regname && this.state.regpass){
                this.setState({
                    disabledreg:false
                })
            }
        }
        console.log('name',this.state.regname,'mail',this.state.regmail,'pass',this.state.regpass,'confirm',this.state.regconfirmpass,'btn',this.state.disabledreg)
        //  if(i === 0 && e.target.value.length >= 6){
        //      this.setState({a: e.target.value})
        //      console.log('arden chishta mi tanjvi')
        //  }
        //  else if(i === 0 && e.target.value.length <=6){
        //      console.log('parolt sxala')
        //  }
        //  else if( i === 1 && !e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
        //      console.log('mailtsxala')
        //  }
        //  else if(i === 2 && e.target.value.length > 20) {
        //      console.log('toshni chi anunt')
        //  }
        // if (i === 3 && e.target.value === this.state.a){
        //     console.log('parolnert brnuma')
        // }


    }
    onSubmit=(e)=> {
        e.preventDefault()
        const user = {
            email: this.state.emails,
            password: this.state.password
        }
        login(user).then(res => {

            if (res.islogined === true) {
                this.getuser()
                this.setState({
                    openSign:false,
                    signpasscheck:false,
                    signmailcheck:false,
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
                                    <input   type="password"  className={"signname"} onChange={this.onChange.bind(this,0)} name="password" placeholder={'Enter Your Password'}/>
                                </div>
                                <div className={'signinform'}>
                                    <input type="email" className={"signname"}   name="emails" onChange={this.onChange.bind(this,1)}  placeholder={'Enter Your Email'} />
                                </div>
                                <input type="submit" value={'Sign In'} style={this.state.disabled ? {background:'grey'}:null} className={'signbutton'} disabled={this.state.disabled}/>
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
                                    <input type="text"  className={"signname"} onChange={this.onChange.bind(this,2)} name="first_name" placeholder={'Enter Your Name'}/>
                                </div>
                                <div className={'signinform'}>
                                    <input type="email" className={"signname"}  name="myemail" onChange={this.onChange.bind(this,1)} placeholder={'Enter Your Email'}/>
                                </div>
                                <div className={'signinform'}>

                                    <input type="password" className={"signname"}  onChange={this.onChange.bind(this,0)} name="mypassword" placeholder={'Enter Your Password'}/>


                                </div>
                                <div className={'signinform'}>
                                    <input type="password" className={"signname"}  onChange={this.onChange.bind(this,3)} name="confirmPassword" placeholder={'Confirm Your Password'}/>
                                </div>
                                <input type="submit" value={'Sign In'} style={this.state.disabledreg ? {background:'grey'}:null} disabled={this.state.disabledreg} className={'signbutton'}/>
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