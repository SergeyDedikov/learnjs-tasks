/* 

Задача состоит из двух частей.

У нас есть объекты:

let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};

1) С помощью свойства __proto__ задайте прототипы так, 
чтобы поиск любого свойства выполнялся по следующему пути: 

pockets → bed → table → head. 

Например, pockets.pen должно возвращать значение 3 (найденное в table), 
а bed.glasses – значение 1 (найденное в head).

2) Ответьте на вопрос: 
как быстрее получить значение glasses – 
через pockets.glasses или через head.glasses? 


*/

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen);  // 3
console.log(bed.glasses);  // 1

// 2) для современных движков неважно, 
// откуда берётся свойство – из объекта или из прототипа.
// Они запоминают, где было найдено свойство,
// и повторно используют его в следующем запросе
