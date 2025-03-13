const express = require('express')
const app = express()
const port = process.env.PORT || 3500

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/register', require('./routes/register'))

app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`)
})