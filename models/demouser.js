/*
demouser module is the module represents all the logged in and register user 
*/
const mongoose=require('mongoose')
const DemoUser=mongoose.model('DemoUser',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    email:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    subject:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    },
    timeings:{

        type:String,
        required:true,
        minlength:2,
        maxlength:255
        
    },
    phoneno:{

        type:String,
        required:true,
        minlength:10,
        maxlength:10
        
    }
}))
exports.DemoUser=DemoUser