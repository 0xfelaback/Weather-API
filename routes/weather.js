const express = require('express')
const router = express.Router()
const weatherController = require('../Controller/getweatherController')

router.route('/').get(weatherController)


module.exports = router