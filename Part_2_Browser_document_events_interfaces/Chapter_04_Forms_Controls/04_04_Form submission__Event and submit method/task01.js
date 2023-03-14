/* 

Создайте функцию showPrompt(html, callback), 
которая выводит форму с сообщением (html), 
полем ввода и кнопками OK/ОТМЕНА.

Пользователь должен ввести что-то в текстовое поле 
и нажать Enter или кнопку «OK», 
после чего должна вызываться функция callback(value) со значением поля.

Если пользователь нажимает Esc или кнопку «ОТМЕНА», 
тогда вызывается callback(null).

В обоих случаях нужно завершить процесс ввода 
и закрыть диалоговое окно с формой.

Требования:

Форма должна быть в центре окна.
Форма является модальным окном, это значит, 
что никакое взаимодействие с остальной частью страницы невозможно, 
пока пользователь не закроет его.

При показе формы, фокус должен находиться сразу внутри <input>.
Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, 
не позволяя ему переходить к другим элементам страницы.

Пример использования:

showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  alert(value);
});

*/

// Показать полупрозрачный DIV, чтобы затенить страницу
// (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)

function showCover() {
  let cover = document.createElement('div');
  cover.id = 'cover';

  // убираем возможность прокрутки страницы во время показа модального окна с формой
  document.body.style.overflowY = 'hidden';

  document.body.append(cover);
}

function hideCover() {
  document.getElementById('cover').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == '') return false; // игнорируем отправку пустой формы

    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  form.elements.text.focus();
}

document.getElementById('show-button').onclick = function () {
  showPrompt(
    "Введите что-нибудь<br>...умное :)",
    function (value) {
      alert("Вы ввели: " + value);
    });
};
