const express = require("express")
const mongoose = require('mongoose')
const TaskRoutes = require("./Routes/TaskRoutes")
const port = 5000||process.env.PORT

mongoose.connect("mongodb+srv://karumuriudaisai002:ky9KEuzCnFcOPaku@cluster0.k5uzy.mongodb.net/").then(()=>{
    console.log("you are successfully connected to database...")
}).catch(e=>{
    console.log(e)
})


const app = express()

app.use(express.static('public/uploads/'))
app.use(express.json())
app.use('/task/api' , TaskRoutes)

app.use('/' , (req , res)=>{
    res.send("welcome to webspiders backend api")
})

app.listen(port , ()=>{
    console.log(`app is listening at http://localhost:${port}`)
})