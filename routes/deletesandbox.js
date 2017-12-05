var express = require('express');
var router = express.Router();
var request = require("request");


var str='';
var options = { method: 'DELETE',
  url: 'https://apis.nbg.gr/public/nbgapis/obp/v3.0.1/sandbox/REPLACE_THIS_VALUE' };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(str);
});
module.exports = router;

