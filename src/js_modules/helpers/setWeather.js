import properties from "../data/properties";
import convertToFahrenheit from "./convertToFahrenheit";
import translate from "../data/translate";
import changePageLanguage from "./changePageLanguage";

export default async function setWeather(weatherData) {
    const todayDegrees = document.querySelector('.weather__today .degrees');
    const todayOvercast = document.querySelector('.weather__today .overcast');
    const nextDays = document.querySelectorAll('.weather__next-days .next-day');

    const { icon } = weatherData.data[0].weather;
    if (icon[icon.length - 1] === 'd') {
        properties.partOfDay = 'day';
    } else {
        properties.partOfDay = 'night';
    }

    if (localStorage.isCelsius === 'true') {
        todayDegrees.innerHTML = `<span class="convert-degrees">${Math.round(weatherData.data[0].temp)}<sup>◦</sup></span><img class="icon">`;
    } else {
        const convertDegrees = convertToFahrenheit(Math.round(weatherData.data[0].temp));
        todayDegrees.innerHTML = `<span class="convert-degrees">${convertDegrees}<sup>◦</sup></span><img class="icon">`;
    }

    todayDegrees.querySelector('.icon').src = require(`../../assets/images/icons/${weatherData.data[0].weather.icon}.png`);
    todayOvercast.querySelector('.feelings .value').innerHTML = `${Math.round((weatherData.data[0].app_max_temp + weatherData.data[0].app_min_temp) / 2)}<sup>◦</sup>`;
    todayOvercast.querySelector('.wind .value').innerHTML = (weatherData.data[0].wind_spd).toFixed(2);
    todayOvercast.querySelector('.humidity .value').innerHTML = `${weatherData.data[0].rh} %`;
    todayOvercast.querySelector('.summary').dataset.summaryCode = weatherData.data[0].weather.code;
    todayOvercast.querySelector('.summary').innerHTML = weatherData.data[0].weather.description;

    nextDays.forEach((day, index) => {
        const d = day;
        const date = new Date(weatherData.data[index + 1].datetime);

        d.querySelector('.day').dataset.dayNumber = date.getDay();
        d.querySelector('.day').innerHTML = translate.days[localStorage.currentLang][date.getDay()];

        if (localStorage.isCelsius === 'true') {
            d.querySelector('.degrees').innerHTML = `<div class="convert-degrees">${Math.round(weatherData.data[index + 1].temp)}<sup>◦</sup></div><img class="icon">`;
        } else {
            const convertDegrees = convertToFahrenheit(weatherData.data[index + 1].temp);
            d.querySelector('.degrees').innerHTML = `<div class="convert-degrees">${convertDegrees}<sup>◦</sup></div><img class="icon">`;
        }

        d.querySelector('.degrees .icon').src = require(`../../assets/images/icons/${weatherData.data[index + 1].weather.icon}.png`);
        changePageLanguage();
    });
}