const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.get('/', (req,res)=> {
    res.end("Welcome to this API")
})


app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})