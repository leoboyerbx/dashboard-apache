const userModel = require('../models/userModel')
const path = require('path')

module.exports = {
    home: function (req, res) {
        res.render(path.join(__viewsPath, 'index'), {page: 'home'})
    },
    users: function(req, res) {
        userModel.all().then(users => {
            console.log(users)
            res.render(path.join(__viewsPath, 'users'), { users })

        })
    }
}