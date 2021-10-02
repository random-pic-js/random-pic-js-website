const express = require('express'),
    Controller = require('../controllers/website.controller'),

    router = express.Router();


router.get('/', Controller.main);

router.get('/random', Controller.random);


module.exports = router;
