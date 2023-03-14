/* 
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

Создайте функцию topSalary(salaries), 
которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

*/

function topSalary(salaries) {
  let maxSal = 0;
  let maxName = null;

  for (let [name, salar] of Object.entries(salaries)) {
    if (salar > maxSal) {
      maxSal = salar;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));  // Pete
console.log(topSalary({}));        // null
