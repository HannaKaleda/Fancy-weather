export default function setActiveScale() {
    if (localStorage.isCelsius === 'true') {
        document.querySelector('.celsius').classList.add('btn_active');
    } else {
        document.querySelector('.fahrenheit').classList.add('btn_active');
    }
}