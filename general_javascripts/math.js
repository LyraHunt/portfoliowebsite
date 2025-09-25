function posmod(n, m) {
    return ((n % m) + m) % m;
}

function getRandomFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
