var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'admin@123',
database:'demo'

});
module.exports=connection;
