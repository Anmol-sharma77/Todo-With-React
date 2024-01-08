var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"React-Todo",
});
module.exports=con;