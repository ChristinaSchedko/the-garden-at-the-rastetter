//----------- Hambuger Menu 

const mneuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

mneuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})