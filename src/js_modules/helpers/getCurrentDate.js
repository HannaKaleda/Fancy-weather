import properties from "../data/properties";

export default function getCurrentDate() {
    const date = new Date();
    properties.currentMonth = date.getMonth();
    return {
        dayOfWeek: date.toDateString().split(' ')[0],
        day: date.toDateString().split(' ')[2],
        month: date.toDateString().split(' ')[1],
        dayNumber: date.getDay(),
        monthNumber: date.getMonth(),
    };
}