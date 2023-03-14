/**
 * Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
 * 
 * Требования:
 * 
 * Использовать только один обработчик событий (применить делегирование)
 * Клик вне текста заголовка (на пустом месте) ничего делать не должен.
 * 
 *   
 */

// все текстовые узлы в <li> перемещаем в элемент <span>
// он занимает только то место, которое необходимо для текста
for (let li of tree.querySelectorAll('li')) {
  let span = document.createElement('span');
  // вставляем <span> в <li>
  li.prepend(span);
  // текстовый узел (следующий сосед) перемещаем внутрь элемента <span>
  span.append(span.nextSibling); 
}

// вешаем обработчик клика
tree.addEventListener('click', function (e) {

  // заголовки теперь в тегах <span>
  if (e.target.tagName != 'SPAN') return;

  // в родительском элементе ищем список
  let list = e.target.parentNode.querySelector('ul');
  // если списка нет, ничего не делаем
  if (!list) return;

  // переключаем видимость списка
  list.hidden = !list.hidden;

});
