var mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({ name:{ type:String,required:true,minlength:5,maxlength:50}, 
    email:{type:String,required:true,minlength:5,maxlength:50,unique:true} ,
    password:{type:String,required:true,minlength:5,maxlength:50} 
}))
function connectToDb() {

   // var uri = "mongodb://abhi:mummum%4027@cluster0-shard-00-00.szwhm.mongodb.net:27017,cluster0-shard-00-01.szwhm.mongodb.net:27017,cluster0-shard-00-02.szwhm.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-n35fii-shard-0&authSource=admin&retryWrites=true&w=majority";
        var uri='mongodb://localhost:27017/restrorent'
    mongoose.connect(uri);

    const connection = mongoose.connection;

    connection.once("open", function () {
        console.log("MongoDB database connection established successfully");
    });

}
function createModel() {
    const menuSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    const userSchema=new mongoose.Schema({name: String, email: String, phone_no: String, message: String })
    //model
    Menus = mongoose.model('Menus', menuSchema)
    //menu = new Menus({ name: 'chickn fry', price: 1000, Description: 'chickn', type: 'Main course' })

}
//schema

//save
function saveDb() {
    menu.save().then(result => {
        console.log("menu data", result)
    }).catch(error => {
        console.log("error", error)
    })
}
//find


function fetchMenu() {
    var menuArrName = []
    Menus.find().then(data => {
        //console.log("data", data)
        return data

    }).catch(error => {
        console.log("error=>", error)
    })
}

