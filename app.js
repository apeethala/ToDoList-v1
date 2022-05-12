const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get("/",function(req,res){

    var today = new Date();
    var currentDay = today.getDay();
    var day="";

    switch (currentDay) {
        case 0:
            day = "SunDay";
            break;
         case 1:
            day = "MonDay";
            break;
        case 2:
            day = "TuesDay";
            break;
        case 3:
            day = "WednesDay";
            break;
        case 4:
            day = "ThursDay";
            break;
        case 5:
            day = "FriDay";
            break;
        case 6:
            day = "SaturDay";
            break;
        default:
            console.log("error occured and day inserted is"+currentDay);
            break;
    }
    res.render("list",{whichDay:day});
});

app.listen(3000,function(){
    console.log("server is started and running at port 3000");
});
