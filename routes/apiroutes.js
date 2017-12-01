
var dbconnection = require('../dbconnection');
var connection = dbconnection.connection;
var message="";
exports.getUsers = function(req,res){
  var index= req.body.index;
  var sortByField = req.body.sortByField;
  var sortByType = req.body.sortByType;

  connection.query('SELECT * FROM Users order by ? ? limit ?,50',[sortByField, sortByType,index], function (error, results, fields) {
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
    }
  }
  });
};
