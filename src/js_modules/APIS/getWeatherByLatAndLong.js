import API_KEYS from '../data/API_KEYS.js';

export default async function getWeatherByLatAndLong(lat, lng) {
    try {
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=4&units=M&lang=${localStorage.currentLang}&key=${API_KEYS.weatherBitAPIKey}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`Не удается определить погоду в текущем или заданном регионе ${err}`);
    }
}
