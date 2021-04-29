const burger = document.querySelector('.burger');
const nav = document.querySelector('.menu');
const body = document.querySelector('body');
let showMenu = false;

burger.addEventListener('click', onBurgerClick);

function onBurgerClick () {
  if (!showMenu) {
    burger.classList.add('active');
    nav.classList.add('active');
    body.classList.add('lock');
    showMenu = true;
  } else {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('lock');
    showMenu = false;
  }
}