import "../sass/styles.scss";

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

box1.addEventListener('click', () => {
  box1.classList.toggle('box1--active');
  box2.classList.toggle('box2--active');
});
