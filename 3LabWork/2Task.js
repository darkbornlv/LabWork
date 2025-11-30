'use strict';

/* random(min, max)
   random(max) => min = 0
   Повертає ціле число в діапазоні [min, max] включно
*/
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* generateKey(length, characters) */
function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const idx = random(0, characters.length - 1);
    key += characters[idx];
  }
  return key;
};

// тест
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));
