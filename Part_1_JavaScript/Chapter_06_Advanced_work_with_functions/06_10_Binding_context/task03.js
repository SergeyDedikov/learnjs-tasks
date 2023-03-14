/* 

В свойство функции записано значение. 
Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?

*/

'use strict'

function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log(bound.test); // undefined;  привязан только объект со свойтвом name (у него нет свойства test)
