import React,{Component} from 'react';
import './Navbar.css';
import men from './navimages/top2.jpg';
import women from './navimages/top1.jpg'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'


class Navbar extends Component{

    state = {
        mens:false,
        womens:false,
        codes:false,
        c:0,
        shop:false,
        userProfile:''
    };
//     componentDidMount(){
//         const token = localStorage.usertoken
//         if(token !== undefined){
//          const decoded = jwt_decode(token)
//         !this.state.userProfile &&   this.setState({userProfile:decoded})
//     }
// }

//     componentWillReceiveProps(nextProps) {
//         if (this.props.getuser !== nextProps.getuser) {
//         this.setState({userProfile:nextProps.getuser})
//         }
//       }

    menuHandler = (a,b) =>{
        b.preventDefault()
        if(a === 2){
            this.setState({
                mens:!this.state.mens,
                womens:false,
                codes:false,
                c:a
            })
        }
        if(a === 3){
            this.setState({
                mens:false,
                womens:!this.state.womens,
                codes:false,
                c:a
            })
        }
        if(a === 4){
            this.setState({
                mens:false,
                womens:false,
                codes:!this.state.codes,
                c:a
            })
        }


    };

    closewindow = () =>{

        if(this.state.c === 2){
            this.setState({
                mens:false,
                c:0

            })
        }
        else if(this.state.c === 3){
            this.setState({
                womens:false,
                c:0

            })
        }
        else if(this.state.c === 4){
            this.setState({
                codes:false,
                c:0
            })
        }

    };

    openCartHandler = () =>{
        this.setState({
            shop:!this.state.shop
        })
    };
    closeshopwindow = () =>{
        this.setState({
            shop:false
        })
    }

    render() {

        const arr = ['Home','About','Men`s wear','Women`s wear','Short Codes','Contact'];

        const mens = {one:['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
            two:['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear']};

        const womens = {one:['Clothing','Wallets','Footwear','Watches','Accessories','Bags','Caps & Hats'],
            two:['Jewellery','Sunglasses','Parfumes','Beauty','Shirts','Sunglasses','Swimwear']};

        const {magazine} = this.props
        return (
            <div className={'navall'}  onClick={this.closewindow}>
                <div className='navbars'>
                    <nav>
                        <ul className={'navul'}>
                            {arr.map((e,i)=>{
                                return (
                                    <div key={i} className={'hoverdiv'}>
                                        <li   onClick={this.menuHandler.bind(this,i)}>
                                            <a href="">{e}</a>
                                        </li>
                                    </div>

                                )
                            })}
                            <div className={'shop'} onClick={this.openCartHandler}>
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            </div>
                            <div className="user">{this.state.userProfile && <span>Profile: {this.state.userProfile.email}</span>}</div>
                        </ul>
                    </nav>
                </div>
                {this.state.mens ?
                    <div  className={'mens'}>
                        <div className={'mensimg'}>
                            <img src={men} alt=""/>
                        </div>
                        <div className={'menstxt'}>
                            <div className={'menstxt1'}>
                                <ul>
                                    {mens.one.map((e,i)=>{
                                        return(
                                            <li key={i}>
                                                <a href="">{e}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={'menstxt2'}>
                                <ul>
                                    {mens.two.map((e,i)=>{
                                        return(
                                            <li key={i}>
                                                <a href="">{e}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div> :
                    this.state.womens ?
                        <div className={'womens'} >

                            <div className={'womenstxt'}>
                                <div className={'womenstxt1'}>
                                    <ul>
                                        {mens.one.map((e,i)=>{
                                            return(
                                                <li key={i}>
                                                    <a href="">{e}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={'womenstxt2'}>
                                    <ul>
                                        {mens.two.map((e,i)=>{
                                            return(
                                                <li key={i}>
                                                    <a href="">{e}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className={'womensimg'}>
                                <img src={women} alt=""/>
                            </div>
                        </div> :
                        this.state.codes ?
                            <div className={'codes'}>
                                <li>
                                    <a href="">WEB ICONS</a>
                                </li>
                                <li>
                                    <a href="">TYPOGRAPHY</a>
                                </li>
                            </div>
                            :
                            this.state.shop ?
                                <div className={'cart'}>
                                    {magazine.length === 0 ? 'Your shopping cart is empty': <div>
                                        <ul>

                                            {magazine.map((e, i) => {
                                                return(
                                                    <li key={i}>
                                                        <img src={`./img/${e.img}`} alt="shoose"/>
                                                        <h4 className="title">{e.goods_name}</h4>
                                                        <span>${e.price}</span>
                                                    </li>
                                                )
                                            })}

                                        </ul>
                                        <h3>Subtotal</h3>
                                    </div> }

                                    <button type="button" className="close" data-dismiss="modal" onClick={this.closeshopwindow}>×</button>

                                </div>:null}
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        magazine: state.magazine
    }
}

export default connect(mapStateToProps)(Navbar)