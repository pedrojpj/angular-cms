var express = require('express');
var app = express();
var CONFIG  = require('./config.json');

var dirProject = CONFIG[CONFIG.server].directory;
var PORT = CONFIG[CONFIG.server].port;


app.use('/app', express.static(__dirname + '/'+dirProject+'/app'));
app.use('/assets', express.static(__dirname + '/'+dirProject+'/assets'));

app.all('/*', function(req, res, next) {
    res.sendfile('index.html', {root: __dirname + '/' + dirProject + '/'});
});

app.listen(PORT);
console.log('server listen '+ PORT);