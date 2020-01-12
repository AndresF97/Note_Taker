//Calling for npm and setting up 
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
app.use(express.urlencoded({extended : true}))

var notes = [
    {
        
    }
]


app.get('/note',function(req,res){
    res.sendFile(path.join(__dirname,"notes.html"))
})
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"index.html"))
})



//Listener

app.listen(PORT,function(){
    console.log("App is listening on PORT "+ PORT )
})