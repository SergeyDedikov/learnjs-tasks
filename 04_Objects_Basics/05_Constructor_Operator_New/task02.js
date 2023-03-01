/* 
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/

'use strict'

function Calculator() {
  this.read = () => {
    this.a = +prompt('A?:');
    this.b = +prompt('B?:');
  }
  this.sum = () => this.a + this.b;
  this.mul = () => this.a * this.b;
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
