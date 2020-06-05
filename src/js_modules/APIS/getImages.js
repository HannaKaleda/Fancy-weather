import API_KEYS from '../data/API_KEYS';
import getSeason from '../helpers/getSeason';
import properties from '../data/properties.js';

export default async function getImages() {
    try {
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature,${getSeason()},${properties.partOfDay}&client_id=${API_KEYS.unsplashAPIKey}`;
        console.log(`Search images for ${getSeason()}, ${properties.partOfDay}`);
        const response = await fetch(url);
        const json = await response.json();
        const responsive = await fetch(json.urls.regular);
        const blob = await responsive.blob();
        const bg = URL.createObjectURL(blob);
        document.querySelector('.main-screen').style.backgroundImage = `url(${bg})`;
    } catch (err) {
        document.querySelector('.main-screen').style.backgroundImage = `url(${require('../../assets/images/bg1.jpg')})`;
        console.log(`Не удается получить изображения по запросу ${err}`);
    }
}