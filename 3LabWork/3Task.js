'use strict';

/* 3) IPv4 -> 32-бітне число (signed int32 у JS через побітові операції)
   За умовою: аргумент за замовчуванням '127.0.0.1'
*/
function ipToInt(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte, i) => acc + (byte << (8 * (3 - i))), 0);
  // Примітка: через побітові операції результат буде int32 (може бути від’ємним)
};

console.log('127.0.0.1      ->', ipToInt('127.0.0.1'));
console.log('10.0.0.1       ->', ipToInt('10.0.0.1'));
console.log('192.168.1.10   ->', ipToInt('192.168.1.10'));
console.log('165.225.133.150->', ipToInt('165.225.133.150'));
console.log('0.0.0.0        ->', ipToInt('0.0.0.0'));
console.log('8.8.8.8        ->', ipToInt('8.8.8.8')); // 0x08080808 = 134744072