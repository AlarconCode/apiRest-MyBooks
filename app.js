const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./router/user-router')
const bookRouter = require('./router/book-router')



// MiddleWares
app.set('PORT', process.env.PORT || 4000)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(userRouter, bookRouter)


module.exports = app