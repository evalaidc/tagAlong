const express = require('express')
const parser = require('body-parser')
const mongoose = require('../db/connection.js')


const app = express()
const router = express.Router()


app.set('port', process.env.PORT || 3000)
app.use('/assets', express.static('public'))
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api', router)
