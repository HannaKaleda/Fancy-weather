import convertToCelsius from "./helpers/convertToCelsius";
import convertToFahrenheit from "./helpers/convertToFahrenheit";

export default function switchScale() {
    if (!localStorage.isCelsius) {
        localStorage.setItem('isCelsius', true);
    }

    document.querySelector('.scale').addEventListener('click', (event) => {
        if (!event.target.classList.contains('btn_active')) {

            document.querySelectorAll('.controls .scale button').forEach((btn) => {
                btn.classList.remove('btn_active');
            });
            event.target.classList.add('btn_active');

            if (localStorage.isCelsius === 'true') {
                localStorage.isCelsius = 'false';
            } else {
                localStorage.isCelsius = 'true';
            }

            const convertDegrees = document.querySelectorAll('.convert-degrees');
            convertDegrees.forEach((degrees) => {
                const deg = degrees;
                const content = deg.textContent.replace('◦', '');
                if (localStorage.isCelsius === 'true') {
                    deg.innerHTML = `${convertToCelsius(content)}<sup>◦</sup>`;
                } else {
                    deg.innerHTML = `${convertToFahrenheit(content)}<sup>◦</sup>`;
                }
            });
        }
    });
}