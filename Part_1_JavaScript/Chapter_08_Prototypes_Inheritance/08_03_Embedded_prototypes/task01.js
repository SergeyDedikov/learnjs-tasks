/* 

Добавьте всем функциям в прототип метод defer(ms), 
который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

*/

Function.prototype.defer = function (ms) {
  return setTimeout(this, ms);
}

function f() {
  console.log("Hello!");
}

f.defer(1000);  // выведет "Hello!" через 1 секунду
