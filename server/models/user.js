const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ProjectId:{
        type:String,
        required:true
    },
    Business_Unit:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)