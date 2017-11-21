var express = require('express');
var router = express.Router();
var R = require("r-script");


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Computing result... ");
  R("r-scripts/ex-async.R")
  .data(57,12,37)
  .call(function(err, d) {
    if (err) throw err;
    console.log("Found result: ", d);
    res.render('index', { 
      title: 'Node-R Example',
      out: d, 
    });
  });
});

module.exports = router;
