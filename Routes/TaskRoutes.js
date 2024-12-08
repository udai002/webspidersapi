const express = require("express")
const router = express.Router()

router.get('/' , (req , res)=>{
    res.json({msg:"you are ready to go"})
})

module.exports = router