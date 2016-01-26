var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    homeRouter = require('./home');

app.use('/home', homeRouter);

app.route('/')
    .all(function (request, response, next) {
        // Do some plumbing stuff
        next();
    })
    .get(function (request, response, next) {
        response.send('OK GET - Hello Stack Overflow');
        next();
    });

app.listen(port, function (error) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.info('Server up and running. Listening on port ' + port);
    }
})