const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  console.log(tweets)
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/special', function (req, res) {
    res.send('You have got puppies!')
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list , showForm: false} );
});
router.get('/tweets/:id', function(req, res) {
  var id = req.params.id;
  var list = tweetBank.find( {id: id} );
  res.render( 'index', { tweets: list } );
});
router.post('/tweets', function(req, res) {
  var name =  req.body.name;
  var content =  req.body.content;
  // console.log('*******************', req.body)
  tweetBank.add(name, content);
  res.redirect('/');
});

module.exports = router;
