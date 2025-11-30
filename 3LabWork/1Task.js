'use strict';

/* 1) random(min, max)
   random(max) => min = 0
   Повертає ціле число в діапазоні [min, max] включно
*/
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  // на випадок, якщо передали у зворотному порядку
  if (min > max) [min, max] = [max, min];

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('random(5):', random(5));        // 0..5
console.log('random(3,7):', random(3, 7));   // 3..7