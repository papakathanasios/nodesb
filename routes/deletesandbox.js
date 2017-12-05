var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/deletesandbox', function(req, res, next) {
    var str='';
var options = { method: 'DELETE',
  url: 'https://apis.nbg.gr/public/nbgapis/obp/v3.0.1/sandbox/REPLACE_THIS_VALUE1' };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  res.send(body);
});
});
module.exports = router;

