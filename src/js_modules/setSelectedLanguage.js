import changePageLanguage from "./helpers/changePageLanguage";

export default function setSelectedLanguage() {
    if (!localStorage.currentLang) {
        localStorage.setItem('currentLang', 'en');
    }
    const select = document.querySelector('.languages');
    const option = document.querySelector(`.${localStorage.currentLang}`);

    option.setAttribute('selected', 'selected');

    select.addEventListener('change', () => {
        localStorage.currentLang = select.value.toLowerCase();
        changePageLanguage();
    });
}