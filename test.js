const axios = require('axios');


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
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}


