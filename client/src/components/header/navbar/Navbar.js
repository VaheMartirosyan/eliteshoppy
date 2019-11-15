import React,{Component} from 'react'
import './Navbar.css'
import Menshover from './hovercomponents/mens/menshover'
import Womenshover from './hovercomponents/womens/womenshover'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom"


class Navbar extends Component{

    state = {
        navlink:[
            {name:'Home',link:'/'},{name:'About',link:'/about'},{name:'Men`s wear',link:'/mens'},
            {name:'Women`s wear',link:'/womens'},{name:'Short Codes',link:'/codes'},{name:'Contact',link:'/contact'}
        ],
        mens:false,
        womens:false,
        codes:false,
        c:0,
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


    openCartHandler = () =>{

    };
    closeshopwindow = () =>{

    }

    render() {

        const {magazine} = this.props
        return (
            <div className={'navall'}  onClick={this.closewindow}>
                <div className='navbars'>
                    <nav className={'navnav'}>
                        <ul className={'navul'}>
                            <li className={'navulli'}>
                                <NavLink to={'/'} >Home</NavLink>
                            </li>
                            <li className={'navulli'}>
                                <NavLink to={'/about'} >About</NavLink>
                            </li>
                            <li  className={'limens navulli'}>
                                <NavLink to={'/mens'} >Men`s wear</NavLink>
                                <div className={'menshover'}>
                                    <Menshover />
                                </div>
                            </li>
                            <li className={'liwomens navulli'}>
                                <NavLink to={'/womens'} >Women`s wear</NavLink>
                                <div className={'womenshover'}>
                                    <Womenshover/>
                                </div>
                            </li>
                            <li className={'navulli'}>
                                <NavLink to={'/contact'} >Contact</NavLink>
                            </li>
                            <div className={'shop'} onClick={this.props.shopOpen}>
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            </div>
                            <div className="user">{this.state.userProfile && <span>Profile: {this.state.userProfile.email}</span>}</div>
                        </ul>
                    </nav>
                </div>

                {this.props.shop ?
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

                        <button type="button" className="close" data-dismiss="modal" onClick={this.props.shopClose}>×</button>

                    </div>:null}
            </div>

        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        magazine: state.shopCards.initmagazine
        // shop: state.magazine.shop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shopOpen: () => {
            return dispatch({type: 'shopChange'})

        },
        shopClose: () =>{
            return dispatch({type: 'closeShop'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

