const button = document.getElementById("my-button");
const nav = document.getElementById("my-nav");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});