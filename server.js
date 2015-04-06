/*
 * Module dependencies
 */
var express = require('express')
  , Firebase = require('firebase')  

var app = express()

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.get('/admin', function (req, res) {
  res.render('admin',
  { title : 'Admin' }
  )
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});