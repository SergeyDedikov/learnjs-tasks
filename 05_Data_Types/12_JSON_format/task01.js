/* 
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

*/

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);

let user2 = JSON.parse(json);
