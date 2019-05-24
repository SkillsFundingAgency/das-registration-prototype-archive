const express = require('express')
const router = express.Router()

require('./routes/1-0/routes.js')(router);


module.exports = router
