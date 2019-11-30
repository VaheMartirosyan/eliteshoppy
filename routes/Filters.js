const express = require('express')
const filter = express.Router()
const Goods = require('../models/Goods')


filter.get('/filterProduct/:id',(req,res)=>{
    Goods.find({cotegory:req.params.id})
    .exec(function(err, goods) {
      if (err) throw err;
      
      res.status(200).json(goods)
  });


    
})

module.exports = filter