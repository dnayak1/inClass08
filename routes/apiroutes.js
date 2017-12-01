
var dbconnection = require('../dbconnection');
var connection = dbconnection.connection;
var message="";
var string="";
exports.getUsers = function(req,res){
  var index= req.body.index;
  var sortByField = req.body.sortByField;
  var sortByType = req.body.sortByType;
  string = 'SELECT * FROM Users order by '+sortByField+' '+sortByType+' '+'limit '+index+',50';
  console.log(string);
  connection.query(string, function (error, results, fields) {
  if (error) {
    message = "error occured";
    res.send({
      "code":400,
      "message":message
    })
  }else{

    message = "successfull"
    console.log(results);
    if(results.length > 0){
      res.send({
        "code":200,
        "message":message,
        "result":results
          });
    }else{
      message ="no more records";
      res.send({
        "code":202,
        "message":message
      });
    }
  }
  });
};
