/* 
Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

*/

'use strict'

function f() {
  console.log(this); // null
}

let user = {
  g: f.bind(null)  // т.к. this привязан к null
};

user.g();
