/*
user module is the module represents all the logged in and register user 
*/

const mongoose=require('mongoose')
const Course=mongoose.model('Course',new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
  
    description:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    },
    courseImg:{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    },coursevideoUrl:[{

        type:String,
        required:true,
        minlength:5,
        maxlength:255
        
    }]
}))
exports.Course=Course