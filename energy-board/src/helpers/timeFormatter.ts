export function getCurrentTime() {
    let today: Date = new Date();
    let hours: string = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes: string = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds: string = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
}