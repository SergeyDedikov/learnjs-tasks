/* 
Напишите функцию camelize(str), 
которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

// @param str: string
// @return: string

function camelize(str) {
  return str
    .split('-')
    .map((item, i) => i == 0
      ? item
      : item[0].toUpperCase() + item.slice(1))
    .join('');
}
