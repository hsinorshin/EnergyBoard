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