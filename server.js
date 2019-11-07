var express = require('express')
var bodyParser = require('body-parser')
var app = express()
const server = require('http').createServer(app);
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const Goods = require('./routes/Goods')
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//'mongodb+srv://virap:erevan10@cluster0-vxh3h.mongodb.net/test?retryWrites=true&w=majority'
// 'mongodb://localhost/Lite_shop'
const mongoURI = 'mongodb+srv://virap:erevan10@cluster0-vxh3h.mongodb.net/test?retryWrites=true&w=majority';

mongoose
  .connect(
    mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use(cors())
app.use('/users', Users)
app.use('/stok', Goods)
app.post('/profile', (req, res) => {
 carsFind(MessageColecton)
})
const carsFind = async (dbCollectin)=>{
  
  await dbCollectin .find({})
    .sort({
      date: 1
    })
    .limit(30)
    .sort({
      date: -1
    })
    .lean()
    .exec((err, messages) => {
      if (!err) {
        res.send(messages)
  
      }
    })
  
  }
server.listen(port, function () {
  console.log('Server is running on port: ' + port)
})