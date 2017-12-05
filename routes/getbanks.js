var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/getbanks', function(req, res, next) {
 var str='';
var options = { method: 'GET',
  url: 'https://apis.nbg.gr/public/nbgapis/obp/v3.0.1/banks',
  headers:
   { provider: 'REPLACE_THIS_VALUE',
     provider_id: 'REPLACE_THIS_VALUE',
     username: 'REPLACE_THIS_VALUE',
     user_id: 'REPLACE_THIS_VALUE',
     application_id: 'REPLACE_THIS_VALUE',
     sandbox_id: 'REPLACE_THIS_VALUE',
     accept: 'text/json' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  res.send(body);
});

});
module.exports = router;

