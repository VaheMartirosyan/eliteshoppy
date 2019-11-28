import React from 'react';
import './Shopitem.scss'

class ShopItems extends React.Component{
state = {
    items: this.props.item,
    price:this.props.item.price

}

change = (e) => {
    var items = parseInt(this.state.items.price)*e.target.value
    this.setState({
        price:items
    })
}

   render(){

    return (
        <div className='shopcartwindow'>
            <div className={'shopItems'}>
                <div className={'imgShop'} style={{backgroundImage:`url(./img/${this.state.items.img})`}}></div>
                <h3>{this.state.items.goods_name}</h3>
                <p>${this.state.price}</p>
                <input defaultValue={1}  className={'changecount'} max = {this.props.item.stok} min={1} type='number' onChange={this.change}/>
                <button className={'itemsdelete'} onClick={this.props.deletehandler.bind(this, this.state.items._id)}>x</button>
            </div>
        </div>

    )
   }
}

export default ShopItems
