'use strict';

function fn() {
  const objConst = { name: 'Vladyslav' };
  let objLet = { name: 'Lebediuk' };

  // мутація полів
  objConst.name = 'Vladyslav UPD';
  objLet.name = 'Lebediuk UPD';

  // переприсвоєння можливе лише для let
  objLet = { name: 'Vlad' };

  return { objConst, objLet };
}

function createUser(name, city) {
  return { name, city };
}

console.log(fn());
console.log(createUser('Vlad', 'Kyiv'));
