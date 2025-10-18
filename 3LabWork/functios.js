'use strict';

function random (min, max) {
    if (max === undefined) {
        min = 0
        max = min
};
    if (min > max) [min, max] = [max, min];
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(0, 15));
console.log(random(0, 1000000));