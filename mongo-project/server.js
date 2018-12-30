const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use('/', (req,res,next) => {
  res.json({
    confirmation: 'success',
    data: 'This is the Mongo project!'
  })
})

app.listen(3000)
console.log('App running http://localhost3000')
