import getCurrentTime from "./helpers/getCurrentTime";

export default function setCurrentTime() {
    const time = document.querySelector('.time');

    setInterval(
        () => {
            const currentTime = getCurrentTime();
            time.textContent = currentTime;
        },
        1000,
    );
}