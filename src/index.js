import '@/styles/style.scss';
import '@/styles/normalize.css';
import '@/styles/fonts.css';
import switchScale from './js_modules/switchScale.js';
import setActiveScale from './js_modules/setActiveScale.js';
import setBackground from './js_modules/setBackground.js';
import setCurrentLocationWeather from './js_modules/setCurrentLocationWeather.js';
import setSelectedLanguage from './js_modules/setSelectedLanguage.js';
import searchWeather from './js_modules/searchWeather.js';
import setCurrentTime from './js_modules/setCurrentTime.js';
import setCurrentDate from './js_modules/setCurrentDate.js';

window.addEventListener('DOMContentLoaded', () => {
  setCurrentLocationWeather();
  setCurrentTime();
  setCurrentDate();
  switchScale();
  searchWeather();
  setSelectedLanguage();
  setBackground();
  setActiveScale();
});
