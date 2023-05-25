const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateKey(len, characters) {
    let key = '';
    for (let i = 0; i < len; i++) {
        key += characters[getRandomNumber(0, characters.length)];
    }
    return key;
}

const key = generateKey(16, characters);

console.log(key); // eg599gb60q926j8i