const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true })

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', routes);
// app.use(express.static('public'));
app.use('/static', express.static('public'))
app.use('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    console.log('Request URL:', req.originalUrl)
    next()

})
app.use('/special/', function (req, res, next) {
    console.log('PUPPIES!')

    next()

})
// app.get('/', function (req, res) {
//     const people = [{ name: 'Puppy1' }, { name: 'PuppiesRGr8' }, { name: 'iluvpupz' }];
//     res.render('index', { title: 'Twitter', people: people });
// })
// app.get('/special', function (req, res) {
//     res.send('You have got puppies!')
// })
// app.get('/', function (req, res) {
//     res.send('Server Listening!')

// })
app.listen(3000, function () {
    console.log('Server Listening!')
})
