/* 

Представьте, что у нас имеется некий объект obj, 
созданный функцией-конструктором – 
мы не знаем какой именно, 
но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();  // Да, можем

Приведите пример функции-конструктора для объекта obj, 
с которой такой вызов корректно сработает. 

И пример функции-конструктора, 
с которой такой код поведёт себя неправильно.

*/

function Obj(name) {
  this.name = name;
}

Obj.prototype = {
  name: 'Object',
  constructor: Obj,
}

let obj = new Obj('Name');
let obj2 = new obj.constructor('Name2');

console.log(obj.name);
console.log(obj2.name);
