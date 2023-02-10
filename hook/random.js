export function RandomBook(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}