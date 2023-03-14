const mouse = document.getElementById('mouse');

mouse.tabIndex = '1';

mouse.onfocus = function () {

  this.coords = this.getBoundingClientRect();

  this.style.left = this.coords.left + 'px';
  this.style.top = this.coords.top + 'px';

  this.style.position = 'fixed';

};

mouse.onkeydown = function (e) {

  this.coords = this.getBoundingClientRect();

  switch (e.key) {

    case 'ArrowRight':
      this.style.left = this.coords.left + this.offsetWidth + 'px';
      break;

    case 'ArrowDown':
      this.style.top = this.coords.top + this.offsetHeight + 'px';
      break;

    case 'ArrowLeft':
      this.style.left = this.coords.left - this.offsetWidth + 'px';
      break;

    case 'ArrowUp':
      this.style.top = this.coords.top - this.offsetHeight + 'px';
      break;
  }

}
