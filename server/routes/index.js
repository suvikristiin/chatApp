var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  console.log("moi signup")
  res.json('sign up')
})

router.post('/login', function(req, res, next) {
  console.log("moi login")
  res.json('log in')
})

module.exports = router;
