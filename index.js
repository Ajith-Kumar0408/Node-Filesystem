const express = require("express");

	const app = express();

	const fs = require("fs");
  

fs.writeFile("./database.txt", ` ${new Date()}`,
 function(err){
    if(err) throw err;
    console.log("saved");
});

app.get("./newfile",(req,res)=>{
    res.json(new Date())

})

app.get("/getallfiles",(req,res)=>{

 fs.readdir("./",function(err,data){
 if(err) throw err;
 console.log(data)
 })

})

app.listen(3003);