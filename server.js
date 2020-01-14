//Calling for npm and setting up 
const express = require("express");
const fs = require("fs")
const app = express();
const path = require("path");
const  PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"))



app.get("/api/notes",function(req,res){
    fs.readFile("./db/db.json",function(err,data){
        if(err) throw err
        return  res.json(JSON.parse(data))
    })
})
app.get('/note',function(req,res){
    res.sendFile(path.join(__dirname,"public/notes.html"))
})
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.post("/api/notes",function(req,res){
    var newNotes = req.body;
    console.log(newNotes)
    fs.readFile("./db/db.json","utf8",(err,data)=>{
        if(err) throw err
        var note =[] 
        note.push(JSON.parse(data));
        note.push(newNotes);
        fs.writeFile("./db/db.json",JSON.stringify(note),(err)=>{
            if(err) throw err
        })
    })
    res.json(newNotes)

});

app.get("api/notes/:id",function(req,res){
    
})







//Listener

app.listen(PORT,function(){
    console.log("App is listening on PORT "+ PORT )
})