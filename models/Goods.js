const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const GoodsSchema = new Schema({
  goods_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  stok: {
    type: String,
    required: true
  },
  cotegory: {
    type: String,
    required: true
  },
  cotegory: {
    type: String,
    required: true
  },
  cartId: {
    type: String,
    default: new Date()
  },
  
  created: {
    type: Date,
    default: Date.now
},
discont: {
  type: Boolean,
  default: false
}
})

module.exports = Goods = mongoose.model('goods', GoodsSchema)