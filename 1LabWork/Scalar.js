'use strict';

function inc(n) { //Створюємо функцію
  return n + 1; //Повертаємо значення параметру 'n' + 1
};

//Приклад виклику
const a = 5;
let b = inc(a);
console.dir({ a, b });

// 2.

{ function inc(num) {
  num.n += 1; //Змінюємо поле n у вихідному об'єкті
}

//Приклад виклику
const obj = { n: 5 };
inc(obj);
console.dir(obj); // { n: 6 }
}