// ...ваш код...
// Заметьте: <textarea> должен иметь class="edit"
// my.css содержит стиль, чтобы <textarea> и <div> были одного размера

let area = null;
let view = document.getElementById('view');

view.onclick = () => editArea();

function editArea() {

  // создаём area
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = view.innerHTML;

  // слушаем событие
  area.onkeydown = function (event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  // потеря фокуса
  area.onblur = () => editEnd();  // завершаем редактирование

  // замена элемента
  view.replaceWith(area);
  
  // фокусируемся
  area.focus();
}

function editEnd() {
  // меняем содержимое
  view.innerHTML = area.value;
  // замена элемента обратно
  area.replaceWith(view);
}
