/* 
У нас есть объект:

let user = {
  name: "John",
  years: 30
};

Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
let {
  name,
  years: age,
  isAdmin = false
} = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
