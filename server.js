const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app);
const mongoose = require('mongoose')
const Users = require('./routes/Users')
const Goods = require('./routes/Goods')
const Admin = require('./routes/Admin')
const Products = require ('./routes/Products')
const port = process.env.PORT || 5000
const cors = require('cors')
const morgan = require('morgan')
const hendelError = require('./middlwere/errorhendeler')
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
app.use(morgan('dev'));
app.use('/users', Users)
app.use('/stok', Goods)
app.use('/s',Admin)
app.use('/', Products)
app.use((req,res,next)=>{
  const error = new Error('Note Found');
  error.status = 404;
  next(error)
})
app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message:error.message
    }
  })
})
server.listen(port, function () {
  console.log('Server is running on port: ' + port)
})