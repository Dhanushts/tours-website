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
    var WhereFrom = req.body.WhereFrom;
    var WhereTo = req.body.WhereTo;
    var HowMany = req.body.HowMany;
    var Price = req.body.Price;
    var Arrivals = req.body.Arrivals;
    var Leaving =req.body.Leaving;
    var text =req.body.text;
   
    var data = {
        "WhereFrom":WhereFrom,
        "WhereTo": WhereTo,
        "HowMany":HowMany,
        "Price":Price,
        "Arrivals":Arrivals,
        "Leaving":Leaving,
        "text":text,
       
    }
db.collection('Orders').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Booked Successfully");       
    });
     return res.redirect('success.html');
})
app.listen(8000);
console.log("server listening at port 3000");