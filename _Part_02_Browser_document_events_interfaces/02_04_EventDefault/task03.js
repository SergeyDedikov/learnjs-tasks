/**
 * Создайте галерею изображений, 
 * в которой основное изображение 
 * изменяется при клике на уменьшенный вариант. */


thumbs.onclick = function (event) {
  // отменяем переход по ссылке
  event.preventDefault();

  // определяем цель клика
  let target = event.target.closest('a');

  // если ссылка есть в списке
  if (target && thumbs.contains(target)) {

    // берём ссылку на большое изображение из превьюшки
    let href = target.getAttribute('href');

    // и меняем ссылку для основного изображения
    largeImg.setAttribute('src', href);

  }
}
