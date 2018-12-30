const express = require('express')
const mongoose = require('mongoose')

//connect to our Mongo DB:
mongoose.connect('mongodb://localhost/world')
.then(data => {
  console.log('Mongo DB connection success!')
})
.catch(err => {
  console.log('Mongo DB connection failed: ' + err.message)
})

const app = express()

app.use('/', (req,res,next) => {
  res.json({
    confirmation: 'success',
    data: 'This is the Mongo project!'
  })
})

app.listen(3000)
console.log('App running http://localhost3000')
