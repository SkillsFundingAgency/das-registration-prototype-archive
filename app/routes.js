const express = require('express')
const router = express.Router()

require('./routes/1-0/routes.js')(router);
require('./routes/2-0/routes.js')(router);

module.exports = router
