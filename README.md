# Note_Taker
Take notes with in a website.
- This app will allow you to add notes straight from the website and to a server that will push the information to json file called db. 
## Site Picture
![ Notes Page]()


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Bootstrap - Used to create cosmitics of the website and Media inquries
- FontAwesome - used to add nice looking icons 
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Express - An npm extension to set up a local host and manipulate the information.

## Summary 
- This App will allow you to take notes.
## Code Snippet
```html
<html>
<body>
 <script>
    let note;
app.post("/api/notes",function(req,res){
    var newNotes = req.body;
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
       dat.forEach((d,i) =>{
            if(d.id.toString() === chosen){
                dat.splice(i,1)
            }
       })
            fs.writeFile("./db/db.json",JSON.stringify(dat),(err)=>{
                if(err) throw err
                
            })
        
    })
    res.send("file")
        
})
     </script>
</body>
</html>
```
- This code will manipulates the content of the website and how it willbe displayed.
[LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
[GitHub](https://github.com/AndresF97)
