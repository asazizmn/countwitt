var express = require('express'),
    http = require('http'),
    app = express(),

    // import custom countwitt module
    // and set up filter words
    countwitt = require('./countwitt.js'),
    counts = countwitt(['awesome']);


// set up static file directory to allow for direct resource serving
app.use(express.static(__dirname + '/client'));

app.get('/count.json', function (req, res) {
    res.json(counts);
});

// create http server and listen to port 3000
http.createServer(app).listen(3000);
console.log('Server running on port 3000');