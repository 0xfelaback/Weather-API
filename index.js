const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/register', require('./routes/register'))

app.use('/weather', require('./routes/weather'))

app.get('/$|/index', (req,res)=> {
    res.send('Weather-API')
    res.end()
})

const server = app.listen(0, () => {
    console.log(`server is listening on port ${server.address().port}`)
})