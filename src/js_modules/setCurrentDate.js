import getCurrentDate from "./helpers/getCurrentDate";

export default function setCurrentDate() {
    const date = document.querySelector('.date-and-time .date');
    const currentDate = getCurrentDate();
    date.innerHTML = `<span class="dayOfWeek translate-dates translate-short-days" data-day-number=${currentDate.dayNumber}>${currentDate.dayOfWeek}</span>
        <span class="day"> ${currentDate.day} </span><span class="month translate-dates translate-months" data-month-number=${currentDate.monthNumber}>${currentDate.month}</span>`;
}