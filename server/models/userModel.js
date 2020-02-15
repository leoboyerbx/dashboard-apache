const sudo = require('../modules/sudo')
const path = require('path')

module.exports = {
    all: async function () {
        let raw = await sudo('getent passwd')
        let lines = raw.split('\n')
        let res = []
        for (const line of lines) {
            const splitted = line.split(':')
            if (splitted[2] > 1000 && splitted[0] !== 'nobody' && splitted[0] !== 'admin') {
                const user = {}
                user.name = splitted[0]
                user.homeDir = splitted[5]
                res.push(user)
            }
        }
        return res
    },
    add: function (username, password) {
        return new Promise(resolve => {
            sudo(path.join(__root, '/server/scripts/user_apache_add.sh') + ` ${username} ${password}`).then(() => {
                resolve('ok')
            })

        })
    },
    remove: function (username) {
        return new Promise(resolve => {
            sudo(path.join(__root, '/server/scripts/user_apache_del.sh') + ` ${username}`).then(() => {
                resolve('ok')
            })

        })
    }
}
