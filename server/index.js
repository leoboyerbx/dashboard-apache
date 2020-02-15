const path = require('path')
const bodyParser = require('body-parser')
const admin = require('./controllers/adminController')
const api = require('./controllers/apiController')
module.exports = function () {
    const express = require('express')
    const bodyParser = require('body-parser')
  
    const serverApp = express()
    const http = require('http').createServer(serverApp)
    
        // parse application/x-www-form-urlencoded
    serverApp.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    serverApp.use(bodyParser.json())

    serverApp.set('view engine', 'ejs')
    serverApp.use(bodyParser.json())
    serverApp.use(bodyParser.urlencoded({ extended: true }))
    serverApp.use('/assets', express.static('public/assets'))
  
    serverApp.get('/', (request, response) => {
        admin.home(request, response)
    })
    serverApp.get('/users', (req, res) => {
      admin.users(req, res)
    })
    serverApp.post('/api/adduser', (req, res) => {
        api.adduser(req, res)
    })
    serverApp.post('/api/deluser', (req, res) => {
        api.deluser(req, res)
    })
  
    http.listen(process.env.PORT || 3000, () => {
      console.log(`App Started on PORT ${process.env.PORT || 3000}`)
    })
  }