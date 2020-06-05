import API_KEYS from "../data/API_KEYS";

export default async function getTranslation(request) {
    try {
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEYS.yandexAPIKey}&text=${request}&lang=${localStorage.currentLang}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(`Не удается получить перевод названия текущей локации ${err}`);
    }
}