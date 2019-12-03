import React,{Component} from 'react'
import './Navbar.css'
import './MediaNavbar.css'
import 'media-queries'
import Menshover from './hovercomponents/mens/menshover'
import Womenshover from './hovercomponents/womens/womenshover'
import jwt_decode from 'jwt-decode'
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom"



class Navbar extends Component{

    state = {
        navlink:[
            {name:'Home',link:'/'},{name:'About',link:'/about'},{name:'Men`s wear',link:'/mens'},
            {name:'Women`s wear',link:'/womens'},{name:'Short Codes',link:'/codes'},{name:'Contact',link:'/contact'},
            {name:'Shop',link:'/shop'}
        ],
        mens:false,
        womens:false,
        codes:false,
        c:0,
        userProfile:'',
        bascket:this.props.shopProduct,
        shopProduct:'',
        btnIcons:false
    };
    componentDidMount(){
        const token = localStorage.myusertoken

        if(token){
            const decoded = jwt_decode(token)
            !this.state.userProfile &&   this.setState({userProfile:decoded})

        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.setState({userProfile:nextProps.user})
        }
    }

    btnNavBar=()=>{
        this.setState({
            btnIcons:!this.state.btnIcons
        })
    }
    render() {


        return (
            <div className={'navall'}  onClick={this.closewindow}>
                <div className='navbars'>
                    <nav className={'navnav'}>
                        <ul className={'navul'}>
                            <div className="iconsManu" onClick={this.btnNavBar}>
                                <i className="fa fa-bars"></i>
                                {this.state.btnIcons?
                                    <div className="hoverNav">
                                        <li className={'navulli'}>
                                            <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/'} >Home</NavLink>
                                        </li>
                                        <li className={'navulli'}>
                                            <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/about'} >About</NavLink>
                                        </li>
                                        <li  className={'limens1 navulli'}>
                                            <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/mens'} >Men`s wear</NavLink>
                                            <div className={'menshover1'}>
                                                <Menshover />
                                            </div>
                                        </li>
                                        <li className={'liwomens1 navulli'}>
                                            <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/womens'} >Women`s wear</NavLink>
                                            <div className={'womenshover1'}>
                                                <Womenshover/>
                                            </div>
                                        </li>
                                        <li className={'navulli'}>
                                            <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/contact'} >Contact</NavLink>
                                        </li>
                                        <li className={'navulli'}>
                                            <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/shop'} >Our shop</NavLink>
                                        </li>
                                    </div>
                                    :null}



                            </div>
                            <li className={'navulli noneLi'}>
                                <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/'} >Home</NavLink>
                            </li>
                            <li className={'navulli noneLi'}>
                                <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/about'} >About</NavLink>
                            </li>
                            <li  className={'limens navulli noneLi'}>
                                <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/mens'} >Men`s wear</NavLink>
                                <div className={'menshover'}>
                                    <Menshover />
                                </div>
                            </li>
                            <li className={'liwomens navulli noneLi'}>
                                <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/womens'} >Women`s wear</NavLink>
                                <div className={'womenshover'}>
                                    <Womenshover/>
                                </div>
                            </li>
                            <li className={'navulli noneLi'}>
                                <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/contact'} >Contact</NavLink>
                            </li>
                            <li className={'navulli noneLi'}>
                                <NavLink  activeStyle={{textDecoration:'none',color:'#0FC3A4'}} to={'/shop'} >Our shop</NavLink>
                            </li>
                            <div className={'shop shopCss'} onClick={this.props.shopOpen}>
                                <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                            </div>
                            <div className="user">{this.state.userProfile && <span>Profile: {this.state.userProfile.email}</span>}
                                <div className="exitProfile"><p onClick={()=> localStorage.removeItem('myusertoken')}><a href='/'>exit</a></p></div>
                            </div>
                        </ul>
                    </nav>
                </div>

                {this.props.shop ?
                    <div className={'cart'}>
                        {this.state.bascket.length === 0 ? 'Your shopping cart is empty': <div>
                            <ul>
                                {this.props.shopProduct.map((e, i) => {
                                    return(
                                        <li key={i}>
                                            <img src={`./img/${e.img}`} alt="shoose"/>
                                            <h4 className="title">{e.goods_name}</h4>

                                            <span>${e.price}</span>
                                            <span className="delete" onClick = {()=>this.props.deletItem(e._id)}>x</span>
                                        </li>
                                    )
                                })}
                            </ul>
                            <NavLink className={'shopnav'} onClick={this.props.shopClose} to={'/shop'}>Go To Shop</NavLink>
                        </div> }

                        <button type="button" className="close" data-dismiss="modal" onClick={this.props.shopClose}>×</button>

                    </div>:null}
            </div>

        );
    }
}

const mapStateToProps = state => {

    return {
        magazine: state.magazine.initmagazine,
        shop: state.magazine.shop
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

