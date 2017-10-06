var express = require('express');
var router = express.Router();
var request = require("request");


var str='';
var options = { method: 'GET',
  url: 'http://nbgnodeapi.cloudapp.net/api/banks',
  headers:
   { accept: 'application/json' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  str= body;

    });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(str);
});
module.exports = router;

