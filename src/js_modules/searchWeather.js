import getCoordinates from "./APIS/getCoordinates";
import getWeatherByLatAndLong from "./APIS/getWeatherByLatAndLong";
import setWeather from "./helpers/setWeather";
import setMap from "./setMap";

export default function searchWeather() {
    document.querySelector('.search').addEventListener('submit', async (event) => {
        
        const input = document.querySelector('.search input');
        event.preventDefault();

        if (input.value) {
            const result = await getCoordinates(input.value);
            if (result.results.length) {
                const { lat } = result.results[0].geometry;
                const { lng } = result.results[0].geometry;

                document.querySelector('.error').textContent = '';

                const weatherData = await getWeatherByLatAndLong(lat, lng);

                const location = document.querySelector('.location');
                location.textContent = `${result.results[0].components.city || result.results[0].components.county || result.results[0].components.state || ''}, ${result.results[0].components.country || ''}`;

                await setWeather(weatherData);

                document.querySelector('.lat .value').textContent = result.results[0].annotations.DMS.lat;
                document.querySelector('.lng .value').textContent = result.results[0].annotations.DMS.lng;

                await setMap(lng, lat);
            } else {
                document.querySelector('.error').textContent = `Sorry, no results for "${input.value}"`;
            }
        }
    });
}