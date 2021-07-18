/*
user module is the module represents all the logged in and register user 
*/

const mongoose=require('mongoose')
const Product=mongoose.model('Product',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    price:{

        type:String,
        required:true,
        minlength:3,
        maxlength:255,
        
    },
    description:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    }
}))
exports.Product=Product