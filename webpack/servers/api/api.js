var pkg = require('../../../package.json');
var express = require('express');
var cors = require('cors');

var app = express();

if(!pkg.config) {
  console.error('Please setup config in package.json!');
}

app.use(cors());

app.get('/endpoint', function(req, res) {
  res.send({foo: true});
});

var server = app.listen(pkg.config.apiPort || 8001, function() {
  var port = server.address().port;
  console.log('Api is listening at :%s', port);
});

module.exports = server;
