import API_KEYS from '../data/API_KEYS.js';

export default async function getLocation() {
    try {
        const url = `https://ipinfo.io/json?token=${API_KEYS.geolocationAPIKey}`;
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(`Не удается определить текущее местоположение ${err}`);
    }
}