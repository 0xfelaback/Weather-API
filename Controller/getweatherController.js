const axios = require('axios');
const { verifyUser } = require('./authController')

async function fetchData(city) {
    const options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
        headers: {
            'x-rapidapi-key': '6478a1459dmshaa601f55a3c3d4cp1ae27fjsn1ebbb58dd125',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        temp = response.data.main.temp
        temp_min = response.data.main.temp_min
        temp_max = response.data.main.temp_max
        humidity = response.data.main.humidity
        pressure = response.data.main.pressure
        windspeed = response.data.wind.speed
        weather_condition = response.data.weather[0].description
        country = response.data.sys.country
        name = response.data.name
        return `🌤️Weather Update for [${name}, ${country}]\n  \nTemperature: ${temp} ranging from ${temp_min} to ${temp_max}\nWeather Condition: ${weather_condition}\nHumidity: ${humidity}\nPressure: ${pressure}\nWindspeed: ${windspeed} km/hr\n  \nHave a great day! Stay prepared for any weather changes.`
    } catch (error) {
        return 'An error occurred while fetching the weather data.'
    }
}
const sendWeather =  async (req,res) => {
    const {apikey, city} = req.query
    const access = await verifyUser(apikey)
    if (!access) return res.status(400).send('Invalid API key')
    res.status(200).send(await fetchData(city))
}

module.exports = sendWeather