const express = require('express')
const router = express.Router()

require('./routes/1-0/routes.js')(router);
require('./routes/2-0/routes.js')(router);
require('./routes/3-0/routes.js')(router);

// Employer started
router.get('/directEmployer', function (req, res) {
    res.redirect(`/1-0/registration/`)
    })


// Interim homepage
    router.get('/interimHomepage', function (req, res) {
        res.redirect(`/1-0/registration/interim-homepage`)
        })
    


module.exports = router
