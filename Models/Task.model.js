const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    id:{
        type:String , 
        required:true
    },
    title:{
        type:String , 
        required:true 
    },
    description:{
        type:String , 
        required:true 
    },
    status:{
        type:String,
        required:true
    },
    priority:{
        type:String ,
        default:"LOW"
    },
    dueDate:Date ,
    createdAt:Date ,
    updatedAt:Date,
})

const task = mongoose.model("task" , TaskSchema)
module.exports = task 