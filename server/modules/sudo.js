const sudo = require('sudo-js')

sudo.setPassword('pass');
 

function exec (command) {
    return new Promise ((resolve, reject) => {
        if (typeof command !== "array") {
            command = command.split(' ')
        }
        sudo.exec(command, function(err, pid, result) {
            if (err) throw err
            resolve(result)
        })
    })

}

module.exports = exec
