var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
 if(req.query.x==undefined) {
    web = Math.random();
 } 
 else {
    web = req.query.x;
 }
 var result = Math.atan(web);
  res.render('computation', { webs: `Math.atan(${web}) is ${result}` });
});

module.exports = router;