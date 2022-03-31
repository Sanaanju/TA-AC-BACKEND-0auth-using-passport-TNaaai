var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/success', (req, res) => {
  res.render('success');
});

router.get('/failure', (req, res) => {
  res.render('failure');
});

router.get('/auth/github', passport.Authenticate('github'));

router.get('/auth/github/callback', passport.Authenticate('github',
 {failureRedirect: '/failure'}), (req,res) => {
  res.redirect('/success')
})

module.exports = router;
