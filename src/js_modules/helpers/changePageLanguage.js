import getTranslation from "../APIS/getTranslation";
import translate from "../data/translate";

export default async function changePageLanguage() {

    const datesToTranslate = document.querySelectorAll('.translate-dates');
    const textToTranslate = document.querySelectorAll('.translate-text');
    const summary = document.querySelector('.summary');
    const location = document.querySelector('.location');

    datesToTranslate.forEach((text) => {
        const t = text;
        if (t.classList.contains('translate-days')) {
            t.textContent = translate.days[localStorage.currentLang][t.dataset.dayNumber];
        } else if (t.classList.contains('translate-short-days')) {
            t.textContent = `${translate.shortDays[localStorage.currentLang][t.dataset.dayNumber]} `;
        } else if (t.classList.contains('translate-months')) {
            t.textContent = translate.months[localStorage.currentLang][t.dataset.monthNumber];
        }
    });

    textToTranslate.forEach((text, index) => {
        const t = text;
        t.textContent = translate[localStorage.currentLang][index];
    });

    summary.textContent = translate.summary[localStorage.currentLang][summary.dataset.summaryCode];

    const locationTranslation = await getTranslation(location.textContent);
    location.textContent = locationTranslation.text;

    document.querySelector('.search input').setAttribute('placeholder', translate.placeholder[localStorage.currentLang]);
}