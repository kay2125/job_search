var db=require('../dbconnection');
//querying the database for get api call
var Task={

getAllTasks:function(callback){

return db.query("Select * from jobs",callback);

},
getTaskById:function(id,callback){

    return db.query("select * from jobs where Id=?",[id],callback);
}
};
module.exports=Task;
