var express = require("express");
var api = require('./routes/apiroutes');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/getusers',api.getUsers);
// Binding express app to port 5000
app.listen(5000,function(){
    console.log('Node server running @ http://localhost:4000')
});
