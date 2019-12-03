const express = require('express')
const route = express.Router()
const multer = require('multer');
const Goods = require('../models/Goods')
const path = require('path')
const uuidv4 = require ( 'uuid/v4' ) 
const verifi = require('../middlwere/outorisation')


const rs = () =>
  Math.random()
    .toString(16)
    .slice(-3);
const storage = multer.diskStorage({
  destination:(req,file,clbck)=>{
    const dir = '/' + rs();
    req.dir = dir;
    clbck(null,'./client/public/img')
  },
  filename:(req,file,clbck)=>{
    const fileName = uuidv4() + path.extname(file.originalname)
    clbck(null,fileName)
    req.dir = fileName
  },
})
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
      const err = new Error('Extention');
      err.code = 'EXTENTION';
      return cb(err);
    }
    cb(null, true);
  }
})
route.post ('/imgDownload',upload.single('file'), (req, res,err) => {
  let error = '';
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        error = 'Картинка не более 2mb!';
      }
      if (err.code === 'EXTENTION') {
        error = 'Только jpeg и png!';
      }
    
    }
  res.json({
    ok: !error,
    error,
    filePath: req.filePath,
    fileName: req.dir
  });
});
route.post('/good', (req, res) => {
 
    const userData = {
      goods_name,
      new_arrivals,
      description,
      img,
      price,
      created,
      cotegory,
      productCotegory,
      cartId,
      discont,
      stok,
    } = req.body;
   
  
   if(goods_name && description && price && img && cotegory){
  
    Goods.create(userData)
    .then(data => {
      
      res.json({goods:data})
    })
    .catch(err => {
      res.status(402).json({
        message: "fill in all fields please"
      })
    })
   }else{
     
    res.status(403).json({
      message: "fill in all fields please"
    })
   }
})    
route.get ('/getProduct', (req, res) => {
    Goods.find({})
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.json(goods)
  });

})
route.post('/getSinglProduct', (req, res) => {
 const id = req.body.product
 
  Goods.findById(id, function (err, user) {
    if(err) throw err
    res.json({
      res:user
    })
  })
  
})

route.post ('/cheqckBoxFilter', (req, res) => {
  
  if(req.body.data === 'Lower Price'){
    Goods.aggregate(   [
      { $sort : {
        price: 1
            } }
    ])
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods).end()
  });
  }else if(req.body.data === 'Track Your Item'){
    Goods.aggregate(  [
      {
        '$match': {productCotegory: "chaiildrenProduct"}
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 11
      }
    ])
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods)
  });
  }
  else if(req.body.data === 'Bigger Choice'){
    Goods.aggregate(  [
      {
        '$match': {goods_name: "Puma"}
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 11
      }
    ])
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods)
  });
  }
  else if(req.body.data === 'More Colors to Choose'){
    Goods.aggregate(  [
      {
        '$match': {goods_name: "Lentex"}
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 11
      }
    ])
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods)
  });
  }
  else if(req.body.data === 'Modern'){
    Goods.aggregate(  [
      {
        '$match': {cotegory: "Shirts"}
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 11
      }
    ])
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods)
  });
  }
  else if(req.body.data === 'Favorite'){
    Goods.aggregate(  [
      {
        '$match': {discont: false}
      }, {
        '$sort': {
          'date': -1
        }
      }, {
        '$limit': 11
      }
    ])
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods)
  });
  }
 

})
route.get ('/menproduct', (req, res) => {
  Goods.aggregate(  [
    {
      '$match': {productCotegory:"meanProduct"}
    }, {
      '$sort': {
        'date': -1
      }
    }, {
      '$limit': 11
    }
  ])
  .exec(function(err, goods) {
    if (err) throw err;
     
    res.json(goods)
});

})
route.get ('/womenproduct', (req, res) => {
  Goods.aggregate(  [
    {
      '$match': {productCotegory:"womensProduct"}
    }, {
      '$sort': {
        'date': -1
      }
    }, {
      '$limit': 11
    }
  ])
  .exec(function(err, goods) {
    if (err) throw err;
     
    res.json(goods)
});

})



route.get ('/test', (req, res) => {
  Goods.aggregate (
    [
      {
        '$bucket': {
          'groupBy': '$price', 
          'boundaries': [
            1, 10, 500
          ], 
          'default': 'other', 
          'output': {
            'count': {
              '$sum': 1
            }, 
            'ids': {
              '$push': '$_id'
            }
          }
        }
      }
    ])
       
     .exec(function(err, data) {
    if (err) throw err;
     
    res.json(data)
});

})
route.get ('/default', (req, res) => {
  Goods.aggregate(  [
    {
      '$match': {}
    }, {
      '$sort': {
        'date': -1
      }
    }, {
      '$limit': 8
    }
  ])
  .exec(function(err, goods) {
    if (err) throw err;
     
    res.json(goods)
});

})
route.get ('/Womens', (req, res) => {
  Goods.aggregate(  [
    {
      '$match': {productCotegory:"womensProduct"}
    }, {
      '$sort': {
        'date': -1
      }
    }, {
      '$limit': 8
    }
  ])
  .exec(function(err, goods) {
    if (err) throw err;
     
    res.json(goods)
});

})
route.get ('/Kids', (req, res) => {
  Goods.aggregate(  [
    {
      '$match': {productCotegory:"chaiildrenProduct"}
    }, {
      '$sort': {
        'date': -1
      }
    }, {
      '$limit': 8
    }
  ])
  .exec(function(err, goods) {
    if (err) throw err;
     
    res.json(goods)
});

})
route.get ('/Mens', (req, res) => {
  Goods.aggregate(  [
    {
      '$match': {productCotegory:"meanProduct"}
    }, {
      '$sort': {
        'date': -1
      }
    }, {
      '$limit': 8
    }
  ])
  .exec(function(err, goods) {
    if (err) throw err;
     
    res.json(goods)
});

})
route.post('/cartVew',(req,res)=>{
  const id = req.body.id
  Goods.findById(id, function (err, item) { 
    
     res.json(item)
   
  } );
  
})
route.post('/deletProduct',verifi,(req,res)=>{
 
  Goods.findOneAndDelete({_id:req.body.id},function(err,data){
    
    if(err) {
      res.status(401).json({
     arror:'product note deleted'
   })
  
    }else{
     
      Goods.find({})
    .exec(function(err, goods) {
      if (err) throw err;
       
      res.status(200).json(goods)
  });
    }
   
  })
})

module.exports = route;
