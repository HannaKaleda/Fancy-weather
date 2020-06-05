export default function convertToCelsius(degreesInFahrenheit) {
    return Math.round((degreesInFahrenheit - 32) / 1.8);
}