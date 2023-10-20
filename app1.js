var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Dhanush');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/sign_up', function(req,res){
    var Title = req.body.Title;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var mobile =req.body.mobile;
    var Password =req.body.Password;
    var Confirm =req.body.Confirm;
   
    var data = {
        "Title":Title,
        "fname": fname,
        "lname":lname,
        "email":email,
        "mobile":mobile,
        "Password":Password,
        "Confirm":Confirm,
       
       
    }
db.collection('Orders').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Registerd Successfully");       
    });
     return res.redirect('success1.html');
})
app.listen(8000);
console.log("server listening at port 3000");