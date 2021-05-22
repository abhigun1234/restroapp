const express = require('express')
const mongoose=require('mongoose')
connectToDb()
createModel()
function connectToDb() {

    var uri = "mongodb://abhi:mummum%4027@cluster0-shard-00-00.szwhm.mongodb.net:27017,cluster0-shard-00-01.szwhm.mongodb.net:27017,cluster0-shard-00-02.szwhm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-n35fii-shard-0&authSource=admin&retryWrites=true&w=majority";
    //    var uri='mongodb://localhost:27017/restrorent'
    mongoose.connect(uri);

    const connection = mongoose.connection;

    connection.once("open", function () {
        console.log("MongoDB database connection established successfully");
    });

}
function createModel() {
    const menuSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    // const userSchema=new mongoose.Schema({name: String, email: String, phone_no: String, message: String })

    //model
    Menus = mongoose.model('Menus', menuSchema)
    //menu = new Menus({ name: 'chickn fry', price: 1000, Description: 'chickn', type: 'Main course' })

}
// const users =require('./login')
const app = express()
app.use(express.json());
var cors = require('cors')
app.use(cors())
// app.use('/api/users',users)
app.options('*', cors())
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log("listning on port 3000")
})
//creating model
var User=mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:50
    },
    email:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    password:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        
    }
}))
app.post('/adduser',(req,res)=>{

    user=new User ({name:req.body.name,email:req.body.email,password:req.body.password})
    user.save().then(res=>{
//send mail
        console.log("res",res)
        
    }).catch(error=>{
      console.log("error",error)  
    });
    res.send(user)
})
app.get('/api/restro/users', (req, res) => {
    User.find(function (error, result) {

        if (error) {
            return res.json({ status: false, message: 'Db fail....', error: error })
        }
        else {
            res.json({
                status: true, message: 'Db find Success...',
                result: result
            })
        }

    })
})
app.get('/api/restro/user', (req, res) => {
    Menus.find(function (error, result) {

        if (error) {
            return res.json({ status: false, message: 'Db fail....', error: error })
        }
        else {
            res.json({
                status: true, message: 'Db find Success...',
                result: result
            })
        }

    })
})