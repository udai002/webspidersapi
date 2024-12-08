const express = require("express")

const port = 5000||process.env.PORT

const app = express()

app.use('/' , (req , res)=>{
    res.send("welcome to webspiders backend api")
})



app.listen(port , ()=>{
    console.log(`app is listening at http://localhost:${port}`)
})