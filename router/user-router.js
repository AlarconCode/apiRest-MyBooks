const express = require('express')
const { postUser, postLogin } = require('../controller/user-controller')

const userRouter = express.Router()

userRouter.post('/registro', postUser )
userRouter.post('/login', postLogin )

module.exports = userRouter