import getCoordinates from "./APIS/getCoordinates";
import getLocation from "./APIS/getLocation";
import getWeatherByLatAndLong from "./APIS/getWeatherByLatAndLong";
import setMap from "./setMap";
import setWeather from "./helpers/setWeather";

export default async function setCurrentLocationWeather() {
    const locationData = await getLocation();

    const location = document.querySelector('.location');

    const result = await getCoordinates(locationData.city);
    const { lat } = result.results[0].geometry;
    const { lng } = result.results[0].geometry;

    location.textContent = `${result.results[0].components.city || result.results[0].components.county || result.results[0].components.state || ''}, ${result.results[0].components.country || ''}`;

    const weatherData = await getWeatherByLatAndLong(lat, lng);

    await setWeather(weatherData);

    document.querySelector('.lat .value').textContent = result.results[0].annotations.DMS.lat;
    document.querySelector('.lng .value').textContent = result.results[0].annotations.DMS.lng;

    await setMap(lng, lat);

    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 1000);
}