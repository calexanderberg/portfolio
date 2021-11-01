const header = document.querySelector('.header');
const menuIcon = document.querySelector('.menu-icon');
const menuBtn = document.querySelector('.menu-btn');
const sign = document.getElementById('sign');
const contact = document.getElementById('contact');


window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if(scrollPosition > 1) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const transform = menuBtn.addEventListener('change', () => {
  if(menuBtn.checked) {
    menuIcon.classList.add('open');
    setTimeout(function () {sign.src='../../images/whiteSign.png'}, 400);
  } else {
    menuIcon.classList.remove('open');
    setTimeout(function () {sign.src='../../images/blueSign.png'}, 400);
  }
});

const footer = contact.addEventListener('click', () => {menyBtn = unchecked});