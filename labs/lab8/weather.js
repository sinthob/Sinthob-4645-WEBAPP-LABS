import axios from 'axios';


const locationInput = process.argv.slice(1);
const location = locationInput[1] ;

const API_KEY = 'WEATHER_API_KEY';


//

async function getWeatherAPI(location) {

    if (!location) {
        console.error('Error: Please provide city name');
        console.error('Usage: node weather.js <city_name>');
        console.error(`Example: node weather.js 'Khon Kaen'`);
        console.error('Note: Use quotes for city names with spaces');
        process.exit(1);
    }

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`);
        const result = response.data;

        console.log(`Current temperature in ${result.location.name} is ${result.current.temp_c}°C`);
        console.log(`Weather condition: ${result.current.condition.text}`);
    } catch (error) {
        console.error('Falied to fetch post: ', error);
        process.exit(1);
    }
}

//console.log(WEATHER_API_KEY_use);
getWeatherAPI(location);

