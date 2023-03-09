/* 

Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

*/

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет ?

rabbit.sayHi();                          // Rabbit
Rabbit.prototype.sayHi();                // undefined
Object.getPrototypeOf(rabbit).sayHi();   // undefined
rabbit.__proto__.sayHi();                // undefined

// значение sayHi() у прототипа не определено
// т.к. this.name ещё не присвоено какое-либо значение
