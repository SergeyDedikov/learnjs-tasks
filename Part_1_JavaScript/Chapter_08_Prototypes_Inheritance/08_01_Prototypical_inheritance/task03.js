/* 

Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): 
animal или rabbit?


*/

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); // в прототипах this — это тот же объект, на котором вызывается метод
              // т.е., который перед точкой

console.log(animal.full);  // undefined
console.log(rabbit.full);  // true
