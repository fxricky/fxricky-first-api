require('dotenv').config()

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/commonModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/db'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use((req, res) => {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });

var routes = require('./api/routes/commonRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);