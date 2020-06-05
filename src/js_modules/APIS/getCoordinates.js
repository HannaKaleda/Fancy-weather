import API_KEYS from '../data/API_KEYS.js';

export default async function getCoordinates(request) {
    try {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${request}&key=${API_KEYS.openCageDataAPIKey}&language=${localStorage.currentLang}&pretty=1`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`Не удается определить координаты по текущему или заданному местоположению ${err}`);
    }
}