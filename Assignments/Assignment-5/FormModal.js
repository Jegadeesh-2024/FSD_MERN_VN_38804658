const mongoose = require('mongoose');

const crudSchema = new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String,
        required:true,
        
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    }

})
module.exports = mongoose.model("Crud",crudSchema)