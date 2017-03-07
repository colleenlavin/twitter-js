const express = require('express');
const nunjucks = require('nunjucks');
const path= require('path');
const app = express();
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true })

// var locals = {
//     title: 'An Example',
//     people: [
//         { name:" Gandalf" },
//         { name:" Frodo" },
//         { name:" Hermione" },
//     ]
// }
// nunjucks.configure('views', { noCache: true });
// nunjucks.render('index.html',locals, function(err, output) {
//     console.log(output);
// });

//app.use(express.static(path.join(__dirname, '../public')))
app.use('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    console.log('Request URL:', req.originalUrl)
    next()

})
app.use('/special/', function (req, res, next) {
    console.log('PUPPIES!')

    next()

})
app.get('/', function (req, res) {
    const people = [{ name: 'Puppy1' }, { name: 'PuppiesRGr8' }, { name: 'iluvpupz' }];
    res.render('index', { title: 'Twitter', people: people });
})
app.get('/special', function (req, res) {
    res.send('You have got puppies!')
})
app.get('/', function (req, res) {
    res.send('Server Listening!')

})
app.listen(3000, function () {
    console.log('Server Listening!')
})
