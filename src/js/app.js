var express = require('express');
var app = express();
console.log(app);

app.get("/", function (request, response) {
    response.send('1234');
})

var server = app.listen(3003, function () {
    console.log('Server is running!');
});