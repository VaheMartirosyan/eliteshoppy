import React from 'react'

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
    console.log(parseInt(this.state.items.price) + parseInt(this.props.item.price))
    return (
        <div>
            
            <p>{this.state.price}</p>
            <p>{this.state.items.price}</p>
            <input max = {this.props.item.stok} min={1} type='number' onChange={this.change}/>
        </div>
    )
   }
}

export default ShopItems
