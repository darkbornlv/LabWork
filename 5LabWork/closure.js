'use strict';

// Завдання 1
function seq(...args) {
  const fns = [];

  function run(x) {
    let v = x;
    for (let i = fns.length - 1; i >= 0; i--) v = fns[i](v);
    return v;
  }

  function chain(arg) {
    if (typeof arg === 'number') return run(arg);
    if (typeof arg === 'function') {
      fns.push(arg);
      return chain;
    }
    throw new TypeError('seq очікує функцію або число');
  }

  for (const a of args) {
    if (typeof a === 'function') fns.push(a);
    else if (typeof a === 'number') return run(a);
    else throw new TypeError('seq очікує функції, а завершальний виклик — число');
  }

  return chain;
}

// Завдання 2
function array() {
  const data = [];

  function arr(i) {
    return data[i];
  }

  arr.push = (value) => data.push(value);
  arr.pop = () => data.pop();

  return arr;
}

// Перевірка seq (має збігатися з умовою)
console.log(seq((x) => x + 7)((x) => x * 2)(5)); // 17
console.log(seq((x) => x * 2)((x) => x + 7)(5)); // 24
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7)); // 3

// Перевірка array
const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined
