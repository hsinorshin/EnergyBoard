export function getCurrentTime() {
    let today: Date = new Date();
    let hours: string = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes: string = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds: string = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
}

export function getTodayDate() {
    const today: Date = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() < 10 ? '0' : '') + today.getDate();
}

export function getTimeToNextUpdate(lastUpdateTime : string) {
    const lastUpdate = new Date("01/01/2021 " + lastUpdateTime);
    const now = new Date("01/01/2021 " + getCurrentTime())
    const timeToNextUpdate = lastUpdate.getTime() + updateInterval - now.getTime();

    const SEC = 1000;
    const MIN = 60 * SEC;
    const HRS = 60 * MIN;

    let hrs = Math.floor(timeToNextUpdate/HRS);
    let min = Math.floor((timeToNextUpdate%HRS)/MIN);
    let sec = Math.floor((timeToNextUpdate%MIN)/SEC);

    hrs = hrs < 0 ? 0 : hrs;
    min = min < 0 ? 0 : min;
    sec = sec < 0 ? 0 : sec;

    return `${(hrs < 10 ? '0' : '') + hrs}:${(min < 10 ? '0' : '') + min}:${(sec < 10 ? '0' : '') + sec}`
}

export const updateInterval = 300000;