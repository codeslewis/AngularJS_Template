var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));
var PORT = 8000
app.listen(PORT, () => {
    console.log('Listening on Port: ', PORT);
});
