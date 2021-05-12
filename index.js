const mongoose = require('mongoose')
var menu
var Menus
// connectToDb()
// createModel()
function connectToDb(){

    var uri = "mongodb://localhost/restro";

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
    // mongoose.connect('mongodb+srv://abhi:<mummum@27>@cluster0.bua7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(
    //     () => console.log("connected to mongodb")).catch(error => {
    
    //         console.log("getting error", error)
    //     })
    
}
function createModel(){
    const menuSchema = new mongoose.Schema({ name: String, price: String, Description: String, type: String })
    //model
    Menus =mongoose.model('Menus', menuSchema)
    menu = new Menus({ name: 'chickn fry', price: 1000, Description: 'chickn', type: 'Main course' })
    
}
//schema

//save
function saveDb(){
    menu.save().then(result=>{
        console.log("menu data",result)
    }).catch(error=>{
        console.log("error",error)
    })
}
 function fetchMenu(){
     var menuArrName=[]
   Menus.find().then(data=>{
        console.log("data",data)
          return data
        
     }).catch(error=>{
         console.log("error=>",error)
     })
    //  console.log("menus",menuArrName)
    
 
 }

//  fetchMenu()
// saveDb()

module.exports.fetchMenu = fetchMenu;
module.exports.saveDb = saveDb;
module.exports.createModel = createModel;
module.exports.connectToDb = connectToDb;