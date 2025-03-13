const express = require('express')
const router = express.Router()
const registerController = require('../Controller/registerController')

router.route('/')
    .get((req,res) => {
        res.status(200).send('Please register by sending your name and email in json to receive your API key')
    })
    .post(registerController.handleNewUsers)

module.exports = router