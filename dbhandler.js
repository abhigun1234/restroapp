const db=require('./index')
db.connectToDb()
db.createModel()
//db.saveDb()
const express =require('express')
const app=express()
const port=process.env.PORT || 3000;
const server =app.listen(port,()=>{
    console.log("listning on port 3000")
})
app.get('/',(req,res)=>{
res.send("hello")
})
app.get('/menu',(req,res)=>{
    var menuArrobj=[]
    console.log("menu api called")
    menuArrobj=db.fetchMenu()
    console.log("menu api called",menuArrobj)
    res.send(JSON.stringify(menuArrobj))
})
module.exports=server;
