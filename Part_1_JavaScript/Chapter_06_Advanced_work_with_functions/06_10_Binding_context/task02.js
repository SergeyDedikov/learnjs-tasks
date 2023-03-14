/* 
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();

*/

'use strict'

function f() {
  console.log(this.name);  // Вася
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });  // второй bind ни на что не влияет

f();
