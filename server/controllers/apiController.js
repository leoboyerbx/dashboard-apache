const userModel = require('../models/userModel')
const path = require('path')

module.exports = {
    adduser: function (req, res) {
    	let user = req.body
    	userModel.add(user.username, user.password).then((result) => {
        res.end("<meta http-equiv=\"refresh\" content=\"0; /users\" />")
    		
    	})
    },
    deluser: function (req, res) {
    	let user = req.body
    	userModel.remove(user.username).then((result) => {
        res.end("<meta http-equiv=\"refresh\" content=\"0; /users\" />")
    		
    	})
    }
}