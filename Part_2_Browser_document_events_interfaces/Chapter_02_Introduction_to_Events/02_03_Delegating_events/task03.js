/**
 * Сделать таблицу сортируемой: 
 * при клике на элемент <th> 
 * строки таблицы должны сортироваться 
 * по соответствующему столбцу.
 * 
 * Каждый элемент <th> имеет атрибут data-type 
 * 
 * Сортировка должна поддерживать только типы "string" и "number".
*/

// вешаем обработчик на таблицу
grid.addEventListener('click', function (e) {

  if (e.target.tagName != 'TH') return;

  let th = e.target;
  // если ячейка TH, тогда сортировать
  // cellIndex - это номер ячейки th:
  //   0 для первого столбца
  //   1 для второго и т.д.
  sortGrid(th.cellIndex, th.dataset.type);

});

function sortGrid(colNum, type) {

  let compare;  // compare(a, b) сравнивает две строки

  switch (type) {

    case 'number':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;

    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
      };
      break;
  }

  let tbody = grid.querySelector('tbody');
  let rowsArray = Array.from(tbody.rows);

  // сортировка
  rowsArray.sort(compare);
  tbody.append(...rowsArray);

}
