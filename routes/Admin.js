const express = require('express')
const admin = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')



process.env.SECRET_KEY = 'supersecretsdecodejvst'

admin.post('/register', (req, res) => {
  
  const adminData = {
    first_name,
    password,
    } = req.body;
  console.log(adminData)
  User.findOne({
    first_name: req.body.first_name
  })
    .then(admin => {
      console.log(admin)
      if (!admin) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          adminData.password = hash
          Admin.create(adminData)
            .then(admin => {
              res.json({ status:'Registered!' })
            })
            .catch(err => {
              res.send({
                error:err
              })
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

admin.post('/login', (req, res) => {
  
  Admin.findOne({
    first_name: req.body.first_name
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
                    }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'Admin does not exist' })
        }
      } else {
        res.json({ error: 'Admin does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

// users.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//   User.findOne({
//     _id: decoded._id
//   })
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })
// users.post('/goods', (req, res) => {
 
//       const data = req.body
//       res.json(data)
  
// })

module.exports = admin