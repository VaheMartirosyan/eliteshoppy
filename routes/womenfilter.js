const express = require('express')
const filter = express.Router()
const Goods = require('../models/Goods')


filter.get('/filterProduct/:id',(req,res)=>{
   
    Goods.find({cotegory:req.params.id,productCotegory:"womensProduct"})
    .exec(function(err, goods) {
      if (err) throw err;
     
      res.status(200).json(goods)
  });
})

filter.post('/cartVew',(req,res)=>{
  const id = req.body.id
  Goods.findById(id, function (err, item) { 
    if(err){
      res.status(401).json({message:'bead request, file dont finde'})
    }
    console.log(item);
     res.json(item)
   
  } );
})

module.exports = filter