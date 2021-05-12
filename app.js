const express =require('express')
const app=express()

const port=process.env.PORT || 3000;
const server =app.listen(port,()=>{
    console.log("listning on port 3000")
})
app.get('/',(req,res)=>{
res.send("hello")
})
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
    })
    app.get('/api/courses-details',(req,res)=>{
        courseData=[{id:1,name:'nodejs'},{id:2,name:'mongodb'}]
        res.send(JSON.stringify(courseData))
        })
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
    })
module.exports=server;