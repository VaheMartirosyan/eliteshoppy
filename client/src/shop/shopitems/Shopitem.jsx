import React from 'react';
import './Shopitem.scss'

class ShopItems extends React.Component {
    state = {
        items: this.props.item,
        price:this.props.item.price,
        cont:1
    }

    plus = ()=>{
        if(this.state.cont <= this.state.items.stok){

            this.setState({
                cont:this.state.cont + 1,
            })
            this.props.decriment(parseInt(this.state.items.price))
        }

    }
    minus = () =>{
        if(this.state.cont >1){
            this.setState({
                cont:this.state.cont - 1,
            })
            this.props.increment(parseInt(this.state.items.price))
        }
        else{this.setState({
            cont:1
        })}
    }
    render() {
    return(
        <div className='shopcartwindow'>
            <div className={'shopItems'}>
                <div className={'imgShop'} style={{backgroundImage:`url(./img/${this.state.items.img})`}}></div>
                <h3>{this.state.items.goods_name}</h3>
                <p>${this.state.items.price*this.state.cont}</p>
                <div className={'buttons'}>
                    <div>
                        <button onClick={this.plus}>+</button>
                    </div>
                    <div>
                        <p className={'pik'}>{this.state.cont}</p>
                    </div>
                    <div>
                        <button onClick={this.minus}>-</button>
                    </div>
                </div>
                <button className={'itemsdelete'} onClick={this.props.deletehandler.bind(this, this.state.items._id)}>x</button>
            </div>
        </div>
    )
}
}

export default ShopItems



