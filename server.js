const express = require ('express')
const app = express()
app.get("/api", (req,res)=>{
    res.json({"name":["RAGUL PRABHU"],
    "file name":["dom.docx"]})
})
app.listen(5000,()=>{console.log('SERVER STARTED SUCESSFULL')})