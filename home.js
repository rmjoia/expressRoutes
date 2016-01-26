var express = require('express');
var homeRouter = express.Router();

var router = (function (router) {

    // define the home page route
    router.get('/', function (req, res) {
        res.send('home route - homepage');
    });
    // define the about route
    router.get('/:client', function (req, res) {
        res.send(req.params.client);
    });

    return homeRouter;
})(homeRouter);

module.exports = router;