const path = require('path')
global.__root = __dirname
global.__viewsPath = path.join(__root, 'views')
require('./server/index')()