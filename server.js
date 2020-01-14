//Calling for npm and setting up 
const express = require("express");
const fs = require("fs")
const app = express();
const path = require("path");
const  PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"))
let note;
app.post("/api/notes",function(req,res){
    var newNotes = req.body;
    console.log(newNotes)
    fs.readFile("./db/db.json",(err,data)=>{
        if(err) throw err
        note = JSON.parse(data);
        note.push(newNotes)
        note.forEach((item,i) => {
            item.id = 1 + i
        })
        fs.writeFile("./db/db.json",JSON.stringify(note),(err)=>{
            if(err) throw err
        })
    })
    res.json(newNotes)

});

app.get("/api/notes",function(req,res){
    fs.readFile("./db/db.json",function(err,data){
        if(err) throw err
        return  res.json(JSON.parse(data))
    })
})
app.delete("/api/notes/:id",function(req,res){
    var chosen = req.params.id;
        fs.readFile("./db/db.json",(err,data)=>{
            if(err) throw err
        var dat = JSON.parse(data)
        for(var i = 0 ; i < dat.length;i++){
         if(chosen === dat[i].id){
            dat = dat.splice(0,i)+dat.slice(i+1,-1)
            console.log(dat)
             }
            fs.writeFile("./db/db.json",JSON.stringify(dat),(err)=>{
                if(err) throw err
                
            })
        }
    })
        
})
app.get('/note',function(req,res){
    res.sendFile(path.join(__dirname,"public/notes.html"))
})
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"public/index.html"))
})

// app.post("/api/notes",function(req,res){
//     var newNotes = req.body;
//     console.log(newNotes)
//     fs.readFile("./db/db.json","utf8",(err,data)=>{
//         if(err) throw err
        
//         note.push(JSON.parse(data));
//         note.push(newNotes);
//         note.forEach((item,i) => {
//             item.id = 1 + i
//         })
//         fs.writeFile("./db/db.json",JSON.stringify(note),(err)=>{
//             if(err) throw err
//         })
//     })
//     res.json(newNotes)

// });









//Listener

app.listen(PORT,function(){
    console.log("App is listening on PORT "+ PORT )
})