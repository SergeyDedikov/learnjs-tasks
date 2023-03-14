// Задача 1

/* 
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

*/

'use strict'

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')
                      // т.к. ref == undefined, потому что this в этот момент вызывается и не определяется
