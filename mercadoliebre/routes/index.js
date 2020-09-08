var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register',function(req,res){
  res.render('register');
});

router.get('/login',function(req,res){
  res.render('login');
});

router.post('/',function(req,res){
  res.render('index');
});

router.post('/register',function(req,res){
  res.render('register');
});

router.post('/login',function(req,res){
  res.render('login');
});

module.exports = router;
