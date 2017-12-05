var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/createsandbox', function(req, res, next) {
    var str='';
var options = { method: 'POST',
  url: 'https://apis.nbg.gr/public/nbgapis/obp/v3.0.1/sandbox',
  //headers: { accept: 'text/json', 'content-type': 'text/json' },
  //Replace the line below to your own sandbox id and comment the line below it
  //body: { sandbox_id: 'REPLACE_THIS_VALUE' },
  body: { sandbox_id: Date.now() },
  json: true };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  res.send(body);
});

});
module.exports = router;

