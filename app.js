const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname+"/date.js");
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

var items=["Buy Groceries","Cook Food","Eat Food"];
var workItems=[];

app.get("/",function(req,res){  
  var day = date.getDate();
    res.render("list",{listTitle:day,newItems:items});
});

app.post("/",function(req,res) {
    var newItem = req.body.newItem;
    if (req.body.listType==="Work-List")
    {
        workItems.push(newItem);
        console.log("work list enterd"+workItems);
        res.redirect("/work");  
    }
    else {
        items.push(newItem);
        console.log(items);
        res.redirect("/");  
    }
    
});

app.get("/work",function(req,res){
   res.render("list",{listTitle:"Work-List",newItems:workItems});
});

app.get("/about",function(req,res){
    res.render("about");
 });
 

app.listen(3000,function(){
    console.log("server is started and running at port 3000");
});
